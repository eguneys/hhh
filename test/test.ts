import { tMo, run } from 'tiqed';

import core from "./core";
import attributes from "./attributes";
import hooks from './hooks';
import vh from './vh';
import diff from './diff';

(() => {

  tMo(core);
  tMo(attributes);
  tMo.only(hooks);
  tMo(vh);
  tMo(diff);

  run();
})();
