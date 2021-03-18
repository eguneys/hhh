import { tMo, run } from 'tiqed';

import core from "./core";
import attributes from "./attributes";
import hooks from './hooks';

(() => {

  tMo(core);
  tMo(attributes);
  tMo(hooks);

  run();
})();
