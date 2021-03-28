import * as vh from './vh';

export type VHCEx = vh.VHNode | vh.VChildren<any> | VEx

export function isVEx(_: VHCEx): _ is VEx {
  return ((_ as VEx).replace !== undefined);
}

export type VEx = {
  children: Array<vh.VHNode>
  replace: (_: Array<vh.VHNode>) => void
}

export function vex(children: Array<vh.VHNode>) {
  return {
    children,
    replace: (_: Array<VHCEx>) => {}
  }
}
