"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.vinit = void 0;
var vh_1 = require("./vh");
var htmldomapi_1 = require("./htmldomapi");
var diff = require("./diff");
function vinit() {
    // updateChildren(updatePair.add(data), mf, $d);
    function updateChildren(_a, mf, children, $parent) {
        var arr = _a[0], oldArray = _a[1];
        var _b = diff.array(arr, oldArray), added = _b.added, removed = _b.removed, still = _b.still;
        var recycle = [];
        removed.forEach(function (_) {
            var _$ = Array.from(children.keys()).find(function (_v$) { return _v$.prop === _; });
            if (_$) {
                recycle.push(_$);
            }
        });
        added.forEach(function (_) {
            var v$ = recycle.pop();
            if (v$) {
                v$.update(_);
            }
            else {
                var newV$ = mf(_), new$ = recons(newV$);
                $parent.appendChild(new$);
                children.set(newV$, new$);
            }
        });
        recycle.forEach(function (r$) {
            var $_ = children.get(r$);
            if ($_) {
                $parent.removeChild($_);
            }
            children["delete"](r$);
        });
    }
    function updateKlassList(_a, elm) {
        var klassList = _a[0], oldKlassList = _a[1];
        var _b = diff.array(klassList, oldKlassList), added = _b.added, removed = _b.removed, still = _b.still;
        removed.forEach(function (_) {
            return elm.classList.remove(_);
        });
        added.forEach(function (_) {
            return elm.classList.add(_);
        });
    }
    function updateVChildren(children, $parent) {
        var updatePair = children.updatePair, mf = children.mf, data = children.data;
        var cmap = new Map();
        children.update = function (data) {
            updateChildren(updatePair.add(data), mf, cmap, $parent);
        };
        children.forEach = function (fn) {
            Array.from(cmap.keys()).forEach(function (_) { return fn(_); });
        };
        children.update(data);
    }
    function updateVHNodeChild(child, $parent) {
        var $_ = recons(child);
        $parent.appendChild($_);
    }
    function propCombine(oprop, prop) {
        if (typeof oprop === 'object') {
            if (typeof prop === 'object') {
                return __assign(__assign({}, oprop), prop);
            }
        }
        return prop;
    }
    function recons(vh) {
        var api = htmldomapi_1.htmlDomApi;
        var selOrText = vh.selOrText, prop = vh.prop, updates = vh.updates, updatePairs = vh.updatePairs, children = vh.children;
        var $d, $dc;
        if (typeof selOrText === 'string') {
            var _a = selOrText.split('.'), tagname = _a[0], klass = _a.slice(1);
            $d = api.createElement(tagname);
            klass.forEach(function (_) {
                return $d.classList.add(_);
            });
        }
        else {
            $d = api.createTextNode(selOrText.text);
        }
        vh.update = function (_prop) {
            var _a;
            vh.prop = propCombine(vh.prop, _prop);
            (_a = updates.element) === null || _a === void 0 ? void 0 : _a.call(updates, vh.prop)($d);
            if (updates.klassList) {
                var pairs = updatePairs.klassList.add(updates.klassList(vh.prop));
                updateKlassList(pairs, $d);
            }
        };
        vh.update(prop);
        children.forEach(function (child) {
            if (vh_1.isVHNode(child)) {
                updateVHNodeChild(child, $d);
            }
            else {
                updateVChildren(child, $d);
            }
        });
        return $d;
    }
    return recons;
}
exports.vinit = vinit;
