import { qed, it } from 'tiqed';
import { VNode } from '../src/vnode';
import { h } from '../src/h';
import { init } from '../src/init';

export default function attributes() {

  let reconcile = init();
  let elm: any;


  // it('have their provided values', () => {

  //   let vnode = h('div', { attrs: { href: '/foo', selected: true } });

  //   elm = reconcile(vnode);

  //   qed('attr href: /foo', elm.getAttribute('href'), '/foo');
  // });
  
}
