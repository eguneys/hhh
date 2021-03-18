import { Maybe, VNode, VNodeData } from './vnode';
export declare type VNodes = VNode[];
export declare type VNodeChildElement = VNode | string | number | undefined | null;
export declare type ArrayOrElement<T> = T | T[];
export declare type VNodeChildren = ArrayOrElement<VNodeChildElement>;
export declare function h(sel: string): VNode;
export declare function h(sel: string, data: Maybe<VNodeData>): VNode;
export declare function h(sel: string, children: VNodeChildren): VNode;
export declare function h(sel: string, data: Maybe<VNodeData>, children: VNodeChildren): VNode;
