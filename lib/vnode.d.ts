export declare type Attrs = Record<string, string | number | boolean>;
export declare type CreateHook = (vNode: VNode) => any;
export interface Hooks {
    create?: CreateHook;
}
export declare type Maybe<A> = A | undefined;
export interface VNode {
    sel: Maybe<string>;
    data: Maybe<VNodeData>;
    children: Maybe<Array<VNode>>;
    text: Maybe<string>;
    elm?: Node | undefined;
}
export interface VNodeData {
    attrs?: Attrs;
    hook?: Hooks;
}
export declare function vnode(sel: Maybe<string>, data: Maybe<any>, children: Maybe<Array<VNode>>, text: Maybe<string>): VNode;
