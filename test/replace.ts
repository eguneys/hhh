import { qed, it } from 'tiqed';
import { h } from '../src/h';
import { vex } from '../src/vex';
import { vinit } from '../src/vinit';

export default function replace() {

  
  let recons = vinit();
  let elm: any;


  it('replaces children', () => {
    
    let v$ = vex([
      h('div.hello')
    ]);

    elm = recons(h('div.wrap', [v$]));
    qed('hello class', elm.firstChild.classList.contains('hello'));
    qed('1 child', elm.children.length, 1);

    v$.replace([
      h('div.world'),
      h('div.two')
    ]);

    qed('world class', elm.firstChild.classList.contains('world'));
    qed('2 children', elm.children.length, 2);
  });

  
}
