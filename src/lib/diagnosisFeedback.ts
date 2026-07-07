import type { DiagnosisKeyElement } from '../types/case';

export interface DiagnosisAnalysis {
  matched: DiagnosisKeyElement[];
  missed: DiagnosisKeyElement[];
  score: number; // 0..1 across key elements
  wordCount: number;
}

// Match a key term against the answer.
// - Short tokens (<5 chars, e.g. "l5", "acl", "disc") need a full word boundary on
//   both sides so they don't match inside unrelated words ("model5", "discomfort").
// - Longer tokens (>=5 chars) are treated as stems and match as prefixes, so
//   "radiculopath" catches "radiculopathy" and "red flag" catches "red flags".
function tokenMatch(paddedText: string, synonym: string): boolean {
  const s = synonym.toLowerCase().trim();
  if (!s) return false;
  const escaped = s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const trailing = s.length >= 5 ? '' : '([^a-z0-9]|$)';
  const re = new RegExp(`(^|[^a-z0-9])${escaped}${trailing}`, 'i');
  return re.test(paddedText);
}

export function analyseDiagnosis(
  answer: string,
  elements: DiagnosisKeyElement[]
): DiagnosisAnalysis {
  const paddedText = ` ${answer.toLowerCase()} `;
  const matched: DiagnosisKeyElement[] = [];
  const missed: DiagnosisKeyElement[] = [];

  for (const el of elements) {
    const hit = el.synonyms.some((syn) => tokenMatch(paddedText, syn));
    if (hit) matched.push(el);
    else missed.push(el);
  }

  const score = elements.length ? matched.length / elements.length : 0;
  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
  return { matched, missed, score, wordCount };
}
