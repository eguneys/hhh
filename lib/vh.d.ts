export declare class VPair<A> {
    oldUpdate: A;
    constructor(oldUpdate: A);
    add(update: A): [A, A];
}
export declare type VUpdateElement = (elm: Node) => void;
export declare type KlassList = Array<string>;
export declare type VUpdate<A> = (props: VProp) => A;
export declare type VProp = any;
export declare type VUpdates = {
    klassList?: VUpdate<KlassList>;
    element?: VUpdate<VUpdateElement>;
};
export declare type VUpdatePairs = {
    klassList: VPair<KlassList>;
};
export declare type Sel = string;
export declare type Text = {
    text: string;
};
export declare type VHNodeOrChildren = VHNode | VChildren<any>;
export declare function isVHNode(_: VHNodeOrChildren): _ is VHNode;
export interface VHNode {
    selOrText: Sel | Text;
    prop: VProp;
    updates: VUpdates;
    updatePairs: VUpdatePairs;
    update: (_: VProp) => void;
    children: Array<VHNodeOrChildren>;
}
export interface VChildren<A> {
    data: Array<A>;
    updatePair: VPair<Array<A>>;
    mf: (_: A) => VHNode;
    forEach: (f: (_: VHNode) => void) => void;
    update: (_: Array<A>) => void;
}
export declare function vmap<A>(data: Array<A>, mf: (_: A) => VHNode): VChildren<A>;
export declare function vh(selOrText: Sel | Text, prop: VProp, updates: VUpdates, children?: Array<VHNodeOrChildren>): VHNode;
