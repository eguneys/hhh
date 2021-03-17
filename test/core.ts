import { na, jss, deep, cry } from './util2';
import { it } from './util';
import { VNode } from '../src/vnode';
import { h } from '../src/h';
import { init } from '../src/init';


export default function core() {

  let reconcile = init();

  let elm: any;

  it('tag', () => {
    na('div', h('div').sel, 'div')
    na('a', h('a').sel, 'a')
    jss(h('div'));
  });

  it('children', () => {
    let vnode = h('div', [h('span.hello'), h('b.world')])
    na('tag', vnode.sel, 'div');
    let children = vnode.children as [VNode, VNode];
    na('c0', children[0].sel, 'span.hello');
    na('c1', children[1].sel, 'b.world');
    jss(vnode);
  });

  it('props', () => {
    let vnode = h('div', {}, h('span.hello'));
    na('tag', vnode.sel, 'div');
    let children = vnode.children as [VNode];
    na('c0', children[0].sel, 'span.hello');
  });

  it('textcontent children', () => {
    let vnode = h('div', ['Im a string']);
    let children = vnode.children as [VNode];
    na('c0', children[0].text, 'Im a string');
  });  

  it('textcontent', () => {
    let vnode = h('a', 'Im a string');
    na('text', vnode.text, 'Im a string');
  });

  it('props+text', () => {
    let vnode = h('a', {}, 'Im a string');
    na('text', vnode.text, 'Im a string');
  });

  it('"null" props', () => {
    let vnode = h('a', null);
    na('data', vnode.data, {});
    vnode = h('a', null, ['Im a string']);
    const children = vnode.children as [VNode];
    na('c0', children[0].text, 'Im a string');
  });


  it('has tag', () => {
    elm = reconcile(h('div'));
    na('tag', elm.tagName, 'DIV');
  });

  it('receives classes in selector', () => {

    elm = reconcile(h('div', [h('i.am.a.class')]));

    na('t1', elm.firstChild.tagName, 'I');
    na('c1', elm.firstChild.classList.contains('am'));
    na('c2', elm.firstChild.classList.contains('a'));
    na('c3', elm.firstChild.classList.contains('class'));
  });

  it('can create elements with text content', () => {

    elm = reconcile(h('div', ['I am a string']));

    na('arraytext', elm.innerHTML, 'I am a string');

    elm = reconcile(h('a', 'I am a string'));
    na('text', elm.innerHTML, 'I am a string');
  });

  it('can create elements with span and text', () => {

    elm = reconcile(h('a', [h('span'), 'I am a string']));

    na('span', elm.childNodes[0].tagName, 'SPAN')
    na('text', elm.childNodes[1].textContent, 'I am a string')

  });

}
