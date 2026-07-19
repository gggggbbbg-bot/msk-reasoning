import type { Case } from '../../types/case';
import { lbp01 } from './lbp/lbp-01-acute-radiculopathy';
import { lbp02 } from './lbp/lbp-02-non-specific-chronic';
import { lbp03 } from './lbp/lbp-03-spinal-stenosis';
import { cervical01 } from './cervical/cervical-01-mechanical-neck-pain';
import { cervical02 } from './cervical/cervical-02-radiculopathy';
import { cervical03 } from './cervical/cervical-03-wad';
import { headache01 } from './headache/headache-01-cervicogenic';
import { headache02 } from './headache/headache-02-tension-type';
import { headache03 } from './headache/headache-03-migraine';
import { ankle01 } from './ankle/ankle-01-lateral-sprain';
import { ankle02 } from './ankle/ankle-02-syndesmosis';
import { ankle03 } from './ankle/ankle-03-achilles-tendinopathy';
import { knee01 } from './knee/knee-01-pfp';
import { knee02 } from './knee/knee-02-acl';
import { knee03 } from './knee/knee-03-oa';

export const ALL_CASES: Case[] = [
  lbp01,
  lbp02,
  lbp03,
  cervical01,
  cervical02,
  cervical03,
  headache01,
  headache02,
  headache03,
  ankle01,
  ankle02,
  ankle03,
  knee01,
  knee02,
  knee03,
];
