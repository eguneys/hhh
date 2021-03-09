export interface DOMAPI {
  createElement: (tagName: any, options?: ElementCreationOptions) => HTMLElement
  createTextNode: (text: string) => Text
  appendChild: (node: Node, child: Node) => void
}

function createElement(tagName: any, options?: ElementCreationOptions): HTMLElement {
  return document.createElement(tagName, options)
}

function createTextNode(text: string): Text {
  return document.createTextNode(text)
}

function appendChild(node: Node, child: Node): void {
  node.appendChild(child)
}

export const htmlDomApi: DOMAPI = {
  createElement,
  createTextNode,
  appendChild
}
