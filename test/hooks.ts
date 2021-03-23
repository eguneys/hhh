import { it, qed } from 'tiqed';
import { h } from '../src/h';
import { vinit } from '../src/vinit';


export default function hooks() {

  let recons = vinit();

  it('hooks');

  it('calls resize', () => {

    let result = [];
    let v$ = h('div', { resize: (bounds) => {
      result.push(1);
    } }, []);

    let $_ = recons(v$);

    document.body.appendChild($_);
    
    // qed('calls on append', result.length, 1);
  });


  
}
