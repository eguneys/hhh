import { run } from './util';

import core from "./core";
import attributes from "./attributes";

(() => {
  core();
  attributes();

  run();
})();
