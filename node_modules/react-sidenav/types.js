"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The ViewMode. If a render supports it then
 * rendering of children can be affected by this
 */
var ViewMode;
(function (ViewMode) {
    ViewMode["normal"] = "normal";
    ViewMode["compact"] = "compact";
})(ViewMode = exports.ViewMode || (exports.ViewMode = {}));
var NavGroupState;
(function (NavGroupState) {
    NavGroupState["expanded"] = "expanded";
    NavGroupState["collapsed"] = "collapsed";
})(NavGroupState = exports.NavGroupState || (exports.NavGroupState = {}));
var ChildrenToggleMode;
(function (ChildrenToggleMode) {
    ChildrenToggleMode["hover"] = "hover";
    ChildrenToggleMode["click"] = "click";
})(ChildrenToggleMode = exports.ChildrenToggleMode || (exports.ChildrenToggleMode = {}));
