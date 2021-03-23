import { VHNode, VChildren, VProp, isVHNode } from './vh';
import { htmlDomApi, DOMAPI } from './htmldomapi';
import * as vh from './vh';
import * as diff from './diff';

export function vinit() {

  function shallowEqual<A>(a: A, b: A): boolean {
    if (typeof a === 'object' && typeof b === 'object') {
      for (let key in a) {
        if (a[key] !== b[key]) {
          return false;
        }
      }
      return true;
    } else {
      return a === b;
    }
  }
  
  // updateChildren(updatePair.add(data), mf, $d);
  function updateChildren<A>([arr,
                              oldArray]: [Array<A>, Array<A>], 
                             mf: (_: A, __: VProp) => VHNode,
                             children: Map<VHNode, Node>,
                             parentProp: VProp,
                             $parent: Node) {

    let { added, removed, still } = diff.array(arr, oldArray, shallowEqual);

    let recycle: Array<VHNode> = [];

    removed.forEach((_: VProp) => {
      let _$ = Array.from(children.keys()).find((_v$: VHNode) => shallowEqual(_v$.prop, _));
      if (_$) {
        recycle.push(_$);
      }
    });

    added.forEach((_: VProp) => {
      let v$ = recycle.pop();
      if (v$) {
        v$.update(_);
      } else {
        let newV$ = mf(_, parentProp),
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
    let { updatePair, mf, data, parentProp } = children;

    let cmap: Map<VHNode, Node> = new Map();

    children.update = (data) => {
      updateChildren(updatePair.add(data), mf, cmap, parentProp, $parent);
    }

    children.updateProp = (prop) => {
      parentProp = prop;
      Array.from(cmap.keys()).forEach((_: VHNode) => {
        _.updateParentProp(prop);
      });
    };

    children.update(data);
  }

  function updateVHNodeChild(child: VHNode, $parent: Node) {
    
    let $_ = recons(child);
    $parent.appendChild($_);

  }

  function propCombine(oprop: VProp, prop: VProp): VProp {
    if (typeof oprop === 'object') {
      if (typeof prop === 'object') {
        return { ...oprop, ...prop };
      }
    }
    return prop;
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

    vh.updateParentProp = (prop: VProp) => {
      vh.parentProp = prop;
      vh.update(vh.prop);
    };

    vh.update = (_prop: VProp) => {
      if (_prop) {
        vh.prop = propCombine(vh.prop, _prop);
      }
      let withParentProp = vh.parentProp?propCombine(vh.parentProp, vh.prop): vh.prop;
      updates.element?.(withParentProp)($d);

      if (updates.klassList) {
        let pairs = updatePairs.klassList.add(updates.klassList(withParentProp));
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
    
    if (updates.resize) {
      let ur = updates.resize;
      new ResizeObserver((e) => {
        ur(($d as Element).getBoundingClientRect());
      }).observe($d as Element);
    }
  
    return $d;
  }
  
  return recons;
}
