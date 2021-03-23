import { VHNodeOrChildren, VHNode } from './vh';
export declare type VHNodeOrChildrenOrText = VHNodeOrChildren | string;
export declare function h(sel: string): VHNode;
export declare function h(sel: string, children: Array<VHNodeOrChildrenOrText> | string): VHNode;
