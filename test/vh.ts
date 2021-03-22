import { qed, it } from 'tiqed';
import { vmap, vh } from '../src/vh';
import { vinit } from '../src/vinit';

export default function attributes() {

  let recons = vinit();
  let elm: any;


  it('updates class list', () => {

    let v$ = vh('div', { pos: 'hello world' }, {
      klassList: ({pos}) => pos.split(' ') });

    elm = recons(v$);
    v$.update({pos: 'one world' });
    console.log(elm);
  });

  it('updates children', () => {

    let numbers = [1,2,3,4];

    let v$numbers = vmap(numbers, (digit: number) =>
      vh('span', digit, {
        klassList: digit => [digit]
      }));

    let v$ = vh('div', { 
      pos: 'children world' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$numbers]);
    

    elm = recons(v$);
    qed('4 child', elm.children.length, 4)

    v$numbers.update([3,4,5]);

    qed('2 child', elm.children.length, 3);

    v$numbers.forEach(_ => _.update(10));
    console.log(elm);

  });

  it('adds vhnode children', () => {

    let v$span = vh('span', {}, {});

    let v$ = vh('div', { 
      pos: 'vnode child' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$span]);
    
    elm = recons(v$);

    qed('1 child', elm.children.length, 1);
    console.log(elm);

  });
  
}
