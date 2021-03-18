"use strict";
exports.__esModule = true;
exports.htmlDomApi = void 0;
function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function appendChild(node, child) {
    node.appendChild(child);
}
exports.htmlDomApi = {
    createElement: createElement,
    createTextNode: createTextNode,
    appendChild: appendChild
};
