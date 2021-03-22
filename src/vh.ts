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
  updates: VUpdates,
  updatePairs: VUpdatePairs,
  update: (_: VProp) => void,
  children: Array<VHNodeOrChildren>
}

export interface VChildren<A> {
  data: Array<A>,
  updatePair: VPair<Array<A>>,
  mf: (_: A) => VHNode,
  forEach: (f: (_: VHNode) => void) => void
  update: (_: Array<A>) => void
}

export function vmap<A>(data: Array<A>, mf: (_: A) => VHNode): VChildren<A> {
  return {
    data,
    updatePair: new VPair<Array<A>>([]),
    mf,
    update: (_) => {},
    forEach: (_) => {}
  }
}

export function vh(selOrText: Sel | Text, prop: VProp,
                   updates: VUpdates, children: Array<VHNodeOrChildren> = []): VHNode {
  return {
    selOrText,
    prop,
    updates,
    updatePairs: {
      klassList: new VPair<KlassList>([]),
    },
    update: (_) => {},
    children
  }
}
