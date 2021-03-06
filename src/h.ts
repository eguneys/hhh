import * as is from './is';
import { VHCEx } from './vex';
import { vh,
         VUpdates,
         VHNode, 
         Text, 
         Sel,
         VProp } from './vh';

export type VHCExOrText = VHCEx | string

export function h(sel: string): VHNode
// export function h(sel: string, data: Maybe<VNodeData>): VNode
export function h(sel: string, children: Array<VHCExOrText> | string): VHNode
export function h(sel: string, data: VUpdates, children: Array<VHCExOrText>): VHNode
export function h(sel: Sel, b?: any, c?: any): VHNode {

  let data: VUpdates = {}
  let prop: VProp
  let textOrChildren: Array<VHCExOrText> | string | undefined
  let i: number

  if (c !== undefined) {
    if (b !== null) {
      data = b
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
      data = b
    }
  }

  if (textOrChildren !== undefined) {
    if (typeof textOrChildren === 'string') {
      return vh(sel, prop, data, [vh({ text: textOrChildren }, undefined, {}, [])]);
    } else {
      let children = textOrChildren.map(child => {
        if (is.primitive(child)) {
          return vh({ text: child }, undefined, {}, [])
        } else {
          return child;
        }
      });
      return vh(sel, prop, data, children)
    }
  } else {
    return vh(sel, prop, data, []);
  }
}
