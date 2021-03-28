import { qed, it } from 'tiqed';
import { vh } from '../src/vh';
import { vinit } from '../src/vinit';

export default function attributes() {

  let reconcile = vinit();
  let elm: any;

  it('have their provided values', () => {

    let vnode = vh('div', { }, {
      attrs: (props) => ({ href: '/foo', selected: 'selected' })
    }, []);

    elm = reconcile(vnode);

    qed('attr href: /foo', elm.getAttribute('href'), '/foo');
  });
  
}
