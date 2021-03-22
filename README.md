Utility functions to build dom elements.

## Usage

`yarn install hhh --save`


```
import { h, init } from 'hhh'

function () {
  let recons = init();

  let vnode = h('div', [h('span', 'Hello'),
      h('span.red', 'world.')]);

  let $element = recons(vnode);

  document.body.appendChild($element);
}
```
