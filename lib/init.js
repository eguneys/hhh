"use strict";
exports.__esModule = true;
exports.init = void 0;
var htmldomapi_1 = require("./htmldomapi");
function init() {
    return function reconcile(vnode) {
        var _a, _b;
        var api = htmldomapi_1.htmlDomApi;
        var sel = vnode.sel, data = vnode.data, children = vnode.children, text = vnode.text;
        var $d, $dc;
        if (!sel) {
            $d = api.createTextNode(text ? text : '');
            return $d;
        }
        var _c = sel.split('.'), tagname = _c[0], klass = _c.slice(1);
        $d = api.createElement(tagname);
        vnode.elm = $d;
        klass.forEach(function (_) {
            var elm = $d;
            elm.classList.add(_);
        });
        if (data === null || data === void 0 ? void 0 : data.attrs) {
            var elm = $d;
            for (var key in data.attrs) {
                var attr = data.attrs[key];
                if (attr === true) {
                    elm.setAttribute(key, '');
                }
                else {
                    elm.setAttribute(key, attr);
                }
            }
        }
        if (text) {
            $dc = document.createTextNode(text);
            $d.appendChild($dc);
        }
        if (children) {
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var vc = children_1[_i];
                $dc = reconcile(vc);
                api.appendChild($d, $dc);
            }
        }
        var hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
        if (hook) {
            (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, vnode);
        }
        return $d;
    };
}
exports.init = init;
