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
    $d = api.createElement(tagname);

    vnode.elm = $d;

    klass.forEach(_ => {
      let elm: Element = $d as Element;
      elm.classList.add(_)
    });

    if (data?.attrs) {
      let elm: Element = $d as Element;
      for (let key in data.attrs) {
        let attr = data.attrs[key];
        if (attr === true) {
          elm.setAttribute(key, '');
        } else {
          elm.setAttribute(key, attr as any);
        }
      }
    }

    if (text) {
      $dc = document.createTextNode(text);
      $d.appendChild($dc);
    }

    if (children) {
      for (let vc of children) {
        $dc = reconcile(vc);
        api.appendChild($d, $dc);
      }
    }

    const hook = vnode.data?.hook;
    if (hook) {
      hook.create?.(vnode);
    }

    return $d;
  }

}
