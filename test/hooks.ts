import { it, qed, ok as yes } from 'tiqed';
import { h } from '../src/h';
import { init } from '../src/init';
import { CreateHook } from '../src/vnode';


export default function hooks() {

  let reconcile = init();

  it('hooks');

  it('calls hook on create', () => {

    let result = [];

    const cb: CreateHook = (vnode) => {
      yes(vnode.elm instanceof Element);

      qed('ok', (vnode.elm as Element).children.length, 2);
      qed('ok', vnode.elm?.parentNode === null, true);
      result.push(vnode);
    };

    const vnode = h('div', [
      h('div', { hook: { create: cb } }, [
        h('span'),
        h('span')
      ])
    ])
    reconcile(vnode);

    qed('called', result.length, 1);

  });


  
}
