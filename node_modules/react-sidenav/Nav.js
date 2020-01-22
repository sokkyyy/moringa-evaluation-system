"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("./index");
var NavGroup_1 = require("./NavGroup");
var types_1 = require("./types");
var PATH_SEPARATOR = '|';
exports.NavContext = React.createContext(null);
var splitPath = function (path) {
    if (path) {
        return path.split(PATH_SEPARATOR);
    }
    return [];
};
var isSelectedPath = function (contextPath, selection) {
    var ourPath = splitPath(contextPath);
    var selectionPath = splitPath(selection);
    if (selectionPath.length === 0 || selectionPath.length !== ourPath.length) {
        return false;
    }
    for (var i = 0; i < selectionPath.length; i++) {
        if (selectionPath[i] !== ourPath[i]) {
            return false;
        }
    }
    return true;
};
var isSelected = function (context, parentContext, id) {
    var selectionPath = context ? context.selectedPath : '';
    var parentPathId = parentContext ? "" + parentContext.pathId : undefined;
    var result = isSelectedPath(parentPathId ? "" + parentPathId + PATH_SEPARATOR + id : id, selectionPath);
    return result;
};
var createPathId = function (context, id) {
    if (context) {
        return "" + context.pathId + PATH_SEPARATOR + id;
    }
    return id;
};
function hasNavChildren(props) {
    var children = React.Children.toArray(props.children);
    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var childEl = children_1[_i];
        var child = childEl;
        if (child.type === exports.Nav) {
            return true;
        }
    }
    return false;
}
exports.Nav = function (props) {
    var context = React.useContext(index_1.SideNavContext);
    var contextAction = React.useContext(index_1.SideNavActionContext);
    var parentNavContext = React.useContext(exports.NavContext);
    var selected = isSelected(context, parentNavContext, props.id);
    var pathId = createPathId(parentNavContext, props.id);
    var level = pathId.split(PATH_SEPARATOR).length;
    var hasNavAsChildren = hasNavChildren(props);
    var isLeaf = !hasNavAsChildren;
    var onClick = function (e) {
        if (context.mode === types_1.ViewMode.normal) {
            e.stopPropagation();
        }
        contextAction.onSelectionPathSelected(pathId, { id: props.id, isLeaf: isLeaf, payload: props.payload, level: level });
    };
    var elementToCreate = isLeaf ? 'div' : NavGroup_1.NavGroup;
    var containerProps = {
        'data-level': "" + level,
        'data-isleaf': "" + isLeaf,
        'data-id': "" + props.id,
        'data-pathid': "" + pathId,
        'data-testid': "" + pathId,
        children: props.children,
        onClick: onClick
    };
    if (isLeaf) {
        containerProps['data-selected'] = selected;
    }
    return (React.createElement(exports.NavContext.Provider, { value: {
            selected: selected,
            id: props.id,
            pathId: pathId,
            level: level,
            isLeaf: isLeaf
        } }, React.createElement(elementToCreate, containerProps)));
};
