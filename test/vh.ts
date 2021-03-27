import { qed, it } from 'tiqed';
import { vmap, vh } from '../src/vh';
import { vinit } from '../src/vinit';

export default function attributes() {

  let recons = vinit();
  let elm: any;


  it('updates class list', () => {

    let v$ = vh('div', { pos: 'hello world' }, {
      klassList: ({pos}) => pos.split(' ') }, []);

    elm = recons(v$);
    v$.update({pos: 'one world' });
    console.log(elm);
  });

  it('gets parent props', () => {
    let v$ = vh('div', { pos: 'parent' }, {
      klassList: ({pos, parentProp}) => [pos + parentProp] }, [], {
        parentProp: 'parent'
      });
    elm = recons(v$);
    console.log(elm);    
  });

  it('updates children', () => {

    let numbers = [1,2,3,4];

    let v$numbers = vmap(numbers, (digit: number) =>
      vh('span', digit, {
        klassList: digit => [digit]
      }, []));

    let v$ = vh('div', { 
      pos: 'children world' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$numbers]);
    

    elm = recons(v$);
    qed('4 child', elm.children.length, 4)

    v$numbers.update([3,4,5]);

    qed('2 child', elm.children.length, 3);

  });

  it('updates children with object props', () => {

    let numbers = [1,2,3,4];

    let makeProps = (digit: number) => ({digit});
    let numberProps = numbers.map(makeProps);

    let v$numbers = vmap(numberProps, (props) => 
      vh('span', props, {
        klassList: ({ digit }) => [digit]
      }, []));

    let v$ = vh('div', { 
      pos: 'children object props' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$numbers]);
    

    elm = recons(v$);
    qed('4 child', elm.children.length, 4)

    v$numbers.update([3,4,5].map(makeProps));

    qed('3 child', elm.children.length, 3);
    
  });

  it('update props after update parent prop', () => {

    let numbers = [1,2,3,4];

    let makeprops = (digit: number) => ({digit});
    let numberprops = numbers.map(makeprops);
    let parentProp = 'Parent';

    let v$numbers = vmap(numberprops, (props, parentProps) => 
      vh('span', props, {
        klassList: ({ digit, parentProp }) => [parentProp + digit]
      }, [], parentProps), {parentProp});

    let v$ = vh('div', { 
      pos: 'update props' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$numbers]);
    

    elm = recons(v$);
    qed('4 child', elm.children.length, 4)


    v$numbers.updateProp({parentProp: 'updated' });

    v$numbers.update([3,4,5].map(makeprops));

    qed('3 child', elm.children.length, 3);
    console.log(elm);
  });


  it('re-add removed child', () => {

    let numbers = [1];

    let makeprops = (digit: number) => ({digit});
    let numberprops = numbers.map(makeprops);
    let parentProp = 'Parent';

    let v$numbers = vmap(numberprops, (props, parentProps) => 
      vh('span', props, {
        klassList: ({ digit, parentProp }) => [parentProp + digit]
      }, [], parentProps), {parentProp});

    let v$ = vh('div', { 
      pos: 'update props' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$numbers]);
    

    elm = recons(v$);
    v$numbers.update([].map(makeprops));

    v$numbers.updateProp({parentProp: 'updated' });

    v$numbers.update([1].map(makeprops));

    qed('parent prop updated', elm.firstChild.classList.contains('updated1'));
    console.log(elm);

  });

  it('adds vhnode children', () => {

    let v$span = vh('span', {}, {}, []);

    let v$ = vh('div', { 
      pos: 'vnode child' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$span]);
    
    elm = recons(v$);

    qed('1 child', elm.children.length, 1);
    console.log(elm);

  });

  it('preserves old props', () => {

    let result: number[] = [];
    let v$span = vh('span', {n: 3}, {
      element: ({ n }) => (_: Node) => {
        result.push(n);
      }
    }, []);

    elm = recons(v$span);

    v$span.update({ a: 4});

    qed('n', result, [3,3]);

  });

  it.only('vmap different props', () => {
    

    let v$numbers = vmap([], (props, parentProps) => 
      vh('span', props, {
        klassList: ({ digit, parentProp }) => [parentProp + digit]
      }, [], parentProps), parentProps);

    let v$ = vh('div', { 
      pos: 'update props' }, {
        klassList: ({pos}) => pos.split(' '),
      }, [v$numbers]);
    

    elm = recons(v$);
    v$numbers.update([].map(makeprops));    

  });
  
}
