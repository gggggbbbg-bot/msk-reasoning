import type { Case } from '../types/case';

export function validateCase(c: Case): string[] {
  const errs: string[] = [];
  const tag = `[${c.id}]`;

  if (!c.id) errs.push(`${tag} missing id`);
  if (!c.title) errs.push(`${tag} missing title`);
  if (!c.region) errs.push(`${tag} missing region`);
  if (c.hypotheses.length < 2) errs.push(`${tag} needs >=2 hypotheses`);
  if (!c.hypotheses.some((h) => h.isPrimary)) errs.push(`${tag} no primary hypothesis flagged`);
  if (c.hypotheses.filter((h) => h.isPrimary).length > 1) errs.push(`${tag} multiple primary hypotheses`);
  if (c.objectiveTests.length === 0) errs.push(`${tag} no objective tests`);

  const icfBuckets: (keyof Case['icf'])[] = [
    'bodyStructureFunction',
    'activityLimitations',
    'participationRestrictions',
    'personalFactors',
    'environmentalFactors',
  ];
  for (const b of icfBuckets) {
    if (c.icf[b].length === 0) errs.push(`${tag} ICF bucket "${b}" is empty`);
  }

  const allMgmt = [...c.management.shortTerm, ...c.management.longTerm];
  for (const m of allMgmt) {
    if (m.evidenceRefs.length === 0) errs.push(`${tag} management "${m.intervention}" has no evidenceRefs`);
  }

  if (c.references.length === 0) errs.push(`${tag} no references`);

  return errs;
}

export async function runCaseValidator() {
  try {
    const mod = await import('../data/cases');
    const errors: string[] = [];
    for (const c of mod.ALL_CASES) errors.push(...validateCase(c));
    if (errors.length) {
      // eslint-disable-next-line no-console
      console.warn('[validateCase] Case schema issues found:\n' + errors.join('\n'));
    } else {
      // eslint-disable-next-line no-console
      console.info(`[validateCase] OK — ${mod.ALL_CASES.length} cases validated.`);
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('[validateCase] failed to load cases:', e);
  }
}
