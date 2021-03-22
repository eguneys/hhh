import { it, qed } from 'tiqed';
import { h } from '../src/h';
import { vinit } from '../src/vinit';

function jss(o: any) {
  let s = typeof o === 'string' ? o : JSON.stringify(o);
  console.log(s);
}

export default function core() {

  let recons = vinit();

  let elm: any;

  // it('tag', () => {
  //   qed('div', h('div').sel, 'div')
  //   qed('a', h('a').sel, 'a')
  //   jss(h('div'));
  // });

  // it('children', () => {
  //   let vnode = h('div', [h('span.hello'), h('b.world')])
  //   qed('tag', vnode.sel, 'div');
  //   let children = vnode.children as [VNode, VNode];
  //   qed('c0', children[0].sel, 'span.hello');
  //   qed('c1', children[1].sel, 'b.world');
  //   jss(vnode);
  // });

  // it('props', () => {
  //   let vnode = h('div', {}, h('span.hello'));
  //   qed('tag', vnode.sel, 'div');
  //   let children = vnode.children as [VNode];
  //   qed('c0', children[0].sel, 'span.hello');
  // });

  // it('textcontent children', () => {
  //   let vnode = h('div', ['Im a string']);
  //   let children = vnode.children as [VNode];
  //   qed('c0', children[0].text, 'Im a string');
  // });  

  // it('textcontent', () => {
  //   let vnode = h('a', 'Im a string');
  //   qed('text', vnode.text, 'Im a string');
  // });

  // it('props+text', () => {
  //   let vnode = h('a', {}, 'Im a string');
  //   qed('text', vnode.text, 'Im a string');
  // });

  it('"null" props', () => {
    // let vnode = h('a', null);
    // qed('data', vnode.data, {});
    // vnode = h('a', null, ['Im a string']);
    // const children = vnode.children as [VNode];
    // qed('c0', children[0].text, 'Im a string');
  });


  it('has tag', () => {
    elm = recons(h('div'));
    qed('tag', elm.tagName, 'DIV');
  });

  it('receives classes in selector', () => {

    elm = recons(h('div', [h('i.am.a.class')]));
    qed('t1', elm.firstChild.tagName, 'I');
    qed('c1', elm.firstChild.classList.contains('am'));
    qed('c2', elm.firstChild.classList.contains('a'));
    qed('c3', elm.firstChild.classList.contains('class'));
  });

  it('can create elements with text content', () => {

    elm = recons(h('div', ['I am a string']));

    qed('arraytext', elm.innerHTML, 'I am a string');

    elm = recons(h('a', 'I am a string'));
    qed('text', elm.innerHTML, 'I am a string');
  });

  it('can create elements with span and text', () => {

    elm = recons(h('a', [h('span'), 'I am a string']));

    qed('span', elm.childNodes[0].tagName, 'SPAN')
    qed('text', elm.childNodes[1].textContent, 'I am a string')
  });

}
