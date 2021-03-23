"use strict";
exports.__esModule = true;
exports.h = void 0;
var is = require("./is");
var vh_1 = require("./vh");
// export function h(sel: string, data: Maybe<VNodeData>, children: VNodeChildren): VNode
function h(sel, b, c) {
    var prop;
    var textOrChildren;
    var i;
    if (c !== undefined) {
        if (b !== null) {
            // data = b
        }
        if (is.array(c)) {
            textOrChildren = c;
        }
        else if (is.primitive(c)) {
            textOrChildren = c + '';
        }
        else if (c && c.sel) {
            textOrChildren = [c];
        }
    }
    else if (b !== undefined && b !== null) {
        if (is.array(b)) {
            textOrChildren = b;
        }
        else if (is.primitive(b)) {
            textOrChildren = b + '';
        }
        else if (b && b.sel) {
            textOrChildren = [b];
        }
        else {
            prop = b;
        }
    }
    if (textOrChildren !== undefined) {
        if (typeof textOrChildren === 'string') {
            return vh_1.vh(sel, prop, {}, [vh_1.vh({ text: textOrChildren }, undefined, {})]);
        }
        else {
            var children = textOrChildren.map(function (child) {
                if (is.primitive(child)) {
                    return vh_1.vh({ text: child }, undefined, {});
                }
                else {
                    return child;
                }
            });
            return vh_1.vh(sel, prop, {}, children);
        }
    }
    else {
        return vh_1.vh(sel, prop, {});
    }
}
exports.h = h;
