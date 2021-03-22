"use strict";
exports.__esModule = true;
exports.vh = exports.vmap = exports.VPair = void 0;
var VPair = /** @class */ (function () {
    function VPair(oldUpdate) {
        this.oldUpdate = oldUpdate;
    }
    VPair.prototype.add = function (update) {
        var oldUpdate = this.oldUpdate;
        this.oldUpdate = update;
        return [update, oldUpdate];
    };
    return VPair;
}());
exports.VPair = VPair;
function vmap(data, mf) {
    return {
        data: data,
        updatePair: new VPair([]),
        mf: mf,
        update: function (_) { },
        forEach: function (_) { }
    };
}
exports.vmap = vmap;
function vh(selOrText, prop, updates, children) {
    return {
        selOrText: selOrText,
        prop: prop,
        updates: updates,
        updatePairs: {
            klassList: new VPair([])
        },
        update: function (_) { },
        children: children
    };
}
exports.vh = vh;
