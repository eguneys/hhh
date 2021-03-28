import { tMo, run } from 'tiqed';

import core from "./core";
import attributes from "./attributes";
import hooks from './hooks';
import vh from './vh';
import replace from './replace';
import diff from './diff';

(() => {

  tMo(core);
  tMo.only(attributes);
  tMo(hooks);
  tMo(vh);
  tMo(replace);
  tMo(diff);

  run();
})();
