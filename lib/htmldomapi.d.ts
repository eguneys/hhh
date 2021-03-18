export interface DOMAPI {
    createElement: (tagName: any, options?: ElementCreationOptions) => HTMLElement;
    createTextNode: (text: string) => Text;
    appendChild: (node: Node, child: Node) => void;
}
export declare const htmlDomApi: DOMAPI;
