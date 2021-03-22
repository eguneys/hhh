import { VHNode, VChildren, VProp, isVHNode } from './vh';
import { htmlDomApi, DOMAPI } from './htmldomapi';
import * as vh from './vh';
import * as diff from './diff';

export function vinit() {
  
  // updateChildren(updatePair.add(data), mf, $d);
  function updateChildren<A>([arr,
                              oldArray]: [Array<A>, Array<A>], 
                             mf: (_: A) => VHNode,
                             children: Map<VHNode, Node>,
                             $parent: Node) {
    let { added, removed, still } = diff.array(arr, oldArray);

    let recycle: Array<VHNode> = [];

    removed.forEach((_: A) => {
      let _$ = Array.from(children.keys()).find((_v$: VHNode) => _v$.prop === _);
      if (_$) {
        recycle.push(_$);
      }
    });

    added.forEach((_: A) => {
      let v$ = recycle.pop();
      if (v$) {
        v$.update(_);
      } else {
        let newV$ = mf(_),
        new$ = recons(newV$);

        $parent.appendChild(new$);
        children.set(newV$, new$);
      }
    });

    recycle.forEach(r$ => {
      let $_ = children.get(r$);
      if ($_) {
        $parent.removeChild($_);
      }
      children.delete(r$);
    });
  }


  function updateKlassList([klassList, 
                            oldKlassList]: [Array<string>, Array<string>],
                           elm: Node) {
    let { added, removed, still } = diff.array(klassList, oldKlassList);
    removed.forEach(_ => 
      (elm as Element).classList.remove(_));
    added.forEach(_ => 
      (elm as Element).classList.add(_));
  }

  function updateVChildren<A>(children: VChildren<A>, $parent: Node) {
    let { updatePair, mf, data } = children;

    let cmap: Map<VHNode, Node> = new Map();

    children.update = (data) => {
      updateChildren(updatePair.add(data), mf, cmap, $parent);
    }

    children.forEach = (fn) => {
      Array.from(cmap.keys()).forEach((_: VHNode) => fn(_));
    };

    children.update(data);
  }

  function updateVHNodeChild(child: VHNode, $parent: Node) {
    
    let $_ = recons(child);
    $parent.appendChild($_);

  }

  function recons(vh: VHNode) {

    const api: DOMAPI = htmlDomApi;

    let { selOrText, prop, updates, updatePairs, children } = vh;

    let $d: Node, $dc: Node;

    if (typeof selOrText === 'string') {
      let [tagname, ...klass] = selOrText.split('.');
      $d = api.createElement(tagname);
      klass.forEach(_ => 
        ($d as Element).classList.add(_));
    } else {
      $d = api.createTextNode(selOrText.text);
    }


    vh.update = (_prop: VProp) => {

      vh.prop = _prop;
      updates.element?.(vh.prop)($d);

      if (updates.klassList) {
        let pairs = updatePairs.klassList.add(updates.klassList(vh.prop));
        updateKlassList(pairs, $d);
      }
    }

    vh.update(prop);

    children.forEach(child => {
      if (isVHNode(child)) {
        updateVHNodeChild(child, $d);
      } else {
        updateVChildren(child, $d);
      }
    });
  
    return $d;
  }
  
  return recons;
}
