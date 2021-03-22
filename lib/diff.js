"use strict";
exports.__esModule = true;
exports.array = void 0;
function array(ls, ols) {
    var still = [], added = [], removed = [];
    var _loop_1 = function (l) {
        if (ols.find(function (_) { return _ === l; })) {
            still.push(l);
        }
        else {
            added.push(l);
        }
    };
    for (var _i = 0, ls_1 = ls; _i < ls_1.length; _i++) {
        var l = ls_1[_i];
        _loop_1(l);
    }
    for (var _a = 0, ols_1 = ols; _a < ols_1.length; _a++) {
        var l = ols_1[_a];
        if (!still.includes(l) &&
            !added.includes(l)) {
            removed.push(l);
        }
    }
    return {
        added: added,
        removed: removed,
        still: still
    };
}
exports.array = array;
