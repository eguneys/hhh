"use strict";
exports.__esModule = true;
exports.vnode = void 0;
function vnode(sel, data, children, text) {
    return {
        sel: sel,
        data: data,
        children: children,
        text: text
    };
}
exports.vnode = vnode;
