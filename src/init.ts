import { VNode } from './vnode';
import { htmlDomApi, DOMAPI } from './htmldomapi';

export function init() {
  
  return function reconcile(vnode: VNode): Node {

    const api: DOMAPI = htmlDomApi

    let { sel, data, children, text } = vnode;

    let $d: Node, $dc: Node;

    if (!sel) {
      $d = api.createTextNode(text ? text : '');
      return $d;
    }

    let [tagname, ...klass] = sel.split('.');
    $d = api.createElement(tagname, data);

    klass.forEach(_ => {
      let elm: Element = $d as Element;
      elm.classList.add(_)
    });

    if (children) {
      for (let vc of children) {
        $dc = reconcile(vc);
        api.appendChild($d, $dc);
      }
    }

    return $d;
  }

}
