export type Maybe<A> = |
  A | undefined

export interface VNode {
  sel: Maybe<string>,
  data: Maybe<VNodeData>,
  children: Maybe<Array<VNode>>
  text: Maybe<string>  
}

export interface VNodeData {
}

export function vnode(sel: Maybe<string>,
                      data: Maybe<any>,
                      children: Maybe<Array<VNode>>,
                      text: Maybe<string>): VNode {


  return {
    sel,
    data,
    children,
    text
  }

}
