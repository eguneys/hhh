export class VPair<A> {
  oldUpdate: A
  constructor(oldUpdate: A) {
    this.oldUpdate = oldUpdate;
  }

  add(update: A): [A, A] {
    let oldUpdate = this.oldUpdate;
    this.oldUpdate = update;
    return [update, oldUpdate];
  }
}

export type VUpdateElement = (elm: Node) => void
export type KlassList = Array<string>

export type VUpdate<A> = (props: VProp) => A
export type VProp = any

export type VUpdates = {
  resize?: (_: ClientRect) => void
  klassList?: VUpdate<KlassList>
  element?: VUpdate<VUpdateElement>
}

export type VUpdatePairs = {
  klassList: VPair<KlassList>
}

export type Sel = string

export type Text = {
  text: string
};

export type VHNodeOrChildren = VHNode | VChildren<any>

export function isVHNode(_: VHNodeOrChildren): _ is VHNode {
  return ((_ as VHNode).selOrText !== undefined);
}

export interface VHNode {
  selOrText: Sel | Text,
  prop: VProp,
  parentProp?: VProp,
  updates: VUpdates,
  updatePairs: VUpdatePairs,
  update: (_: VProp) => void,
  updateParentProp: (_: VProp) => void,
  children: Array<VHNodeOrChildren>
}

export interface VChildren<A> {
  data: Array<A>,
  updatePair: VPair<Array<A>>,
  parentProp?: VProp,
  mf: (_: VProp, __: VProp) => VHNode,
  updateProp: (_: VProp) => void,
  update: (_: Array<A>) => void
}

export function vmap<A>(data: Array<A>, mf: (_: A, __: VProp) => VHNode, parentProp?: VProp): VChildren<A> {
  return {
    data,
    updatePair: new VPair<Array<A>>([]),
    mf,
    parentProp,
    update: (_) => {},
    updateProp: (_) => {}
  }
}

export function vh(selOrText: Sel | Text, prop: VProp,
                   updates: VUpdates, children: Array<VHNodeOrChildren>,
                   parentProp?: VProp): VHNode {
  return {
    selOrText,
    prop,
    parentProp,
    updates,
    updatePairs: {
      klassList: new VPair<KlassList>([]),
    },
    update: (_) => {},
    updateParentProp: (_) => {},
    children
  }
}
