import * as is from './is';
import { vh,
         VHNodeOrChildren,
         VHNode, 
         Text, 
         Sel,
         VProp } from './vh';

export type VHNodeOrChildrenOrText = VHNodeOrChildren | string

export function h(sel: string): VHNode
// export function h(sel: string, data: Maybe<VNodeData>): VNode
export function h(sel: string, children: Array<VHNodeOrChildrenOrText> | string): VHNode
// export function h(sel: string, data: Maybe<VNodeData>, children: VNodeChildren): VNode
export function h(sel: Sel, b?: any, c?: any): VHNode {

  let prop: VProp
  let textOrChildren: Array<VHNodeOrChildrenOrText> | string | undefined
  let i: number

  if (c !== undefined) {
    if (b !== null) {
      // data = b
    }
    if (is.array(c)) {
      textOrChildren = c
    } else if (is.primitive(c)) {
      textOrChildren = c + ''
    } else if (c && c.sel) {
      textOrChildren = [c]
    }
  } else if (b !== undefined && b !== null) {
    if (is.array(b)) {
      textOrChildren = b
    } else if (is.primitive(b)) {
      textOrChildren = b + ''
    } else if (b && b.sel) {
      textOrChildren = [b]
    } else {
      prop = b
    }
  }

  if (textOrChildren !== undefined) {
    if (typeof textOrChildren === 'string') {
      return vh(sel, prop, {}, [vh({ text: textOrChildren }, undefined, {})]);
    } else {
      let children = textOrChildren.map(child => {
        if (is.primitive(child)) {
          return vh({ text: child }, undefined, {})
        } else {
          return child;
        }
      });
      return vh(sel, prop, {}, children)
    }
  } else {
    return vh(sel, prop, {});
  }
}
