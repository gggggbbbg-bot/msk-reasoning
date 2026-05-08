import type { Case } from '../../types/case';
import { lbp01 } from './lbp/lbp-01-acute-radiculopathy';
import { lbp02 } from './lbp/lbp-02-non-specific-chronic';
import { cervical01 } from './cervical/cervical-01-mechanical-neck-pain';
import { cervical02 } from './cervical/cervical-02-radiculopathy';
import { headache01 } from './headache/headache-01-cervicogenic';
import { headache02 } from './headache/headache-02-tension-type';
import { ankle01 } from './ankle/ankle-01-lateral-sprain';
import { ankle02 } from './ankle/ankle-02-syndesmosis';
import { knee01 } from './knee/knee-01-pfp';
import { knee02 } from './knee/knee-02-acl';

export const ALL_CASES: Case[] = [
  lbp01,
  lbp02,
  cervical01,
  cervical02,
  headache01,
  headache02,
  ankle01,
  ankle02,
  knee01,
  knee02,
];
