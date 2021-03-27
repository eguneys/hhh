import { tMo, run } from 'tiqed';

import core from "./core";
import attributes from "./attributes";
import hooks from './hooks';
import vh from './vh';
import diff from './diff';

(() => {

  tMo(core);
  tMo(attributes);
  tMo(hooks);
  tMo.only(vh);
  tMo(diff);

  run();
})();
