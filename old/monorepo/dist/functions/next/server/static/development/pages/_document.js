module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@join-uniform/components/src/AppBar/AppBar.tsx":
/*!*******************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppBar/AppBar.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: AppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return AppBar; });
/* harmony import */ var _join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/icons */ "../../node_modules/@join-uniform/icons/src/index.ts");
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Grid */ "../../node_modules/@join-uniform/components/src/Grid/index.ts");
/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Hidden */ "../../node_modules/@join-uniform/components/src/Hidden/index.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppBar/AppBar.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }











/**
 * Application app bar. Displays hamburger button on mobile.
 */
function AppBar(props) {
  var title = props.title,
      buttons = props.buttons,
      onDrawerToggleButtonClick = props.onDrawerToggleButtonClick,
      onLogoutButtonClick = props.onLogoutButtonClick;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DrawerToggleButton, {
    onClick: onDrawerToggleButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Title, {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), buttons && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ButtonsContainer, {
    buttons: buttons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LogoutButton, {
    onClick: onLogoutButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }));
}

function Wrapper(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "static",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    justify: "space-between",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, children)));
}

function DrawerToggleButton(props) {
  var onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AppBarIconButton, {
    color: "inherit",
    "aria-label": "Menu",
    onClick: onClick,
    reducedLeftMargin: true,
    mobileOnly: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__["MenuIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })));
}

function Title(props) {
  var title = props.title;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    implementation: "css",
    smDown: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AppBarTypography, {
    variant: "h6",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, title)));
}

var AppBarTypography = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(_muiComponents__WEBPACK_IMPORTED_MODULE_8__["Typography"]).withConfig({
  displayName: "AppBar__AppBarTypography",
  componentId: "sc-1vm8wg6-0"
})(["font-weight:400;"]);

function ButtonsContainer(props) {
  var buttons = props.buttons;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, buttons.map(function (button, index) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      key: button.key || index,
      item: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, button);
  }));
}

function LogoutButton(props) {
  var onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(AppBarIconButton, {
    reducedRightMargin: true,
    red: true,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__["PowerSettingsNewIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })));
}

var AppBarIconButton = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (props) {
  var reducedLeftMargin = props.reducedLeftMargin,
      mobileOnly = props.mobileOnly,
      reducedRightMargin = props.reducedRightMargin,
      red = props.red,
      rest = _objectWithoutProperties(props, ["reducedLeftMargin", "mobileOnly", "reducedRightMargin", "red"]);

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }));
}).withConfig({
  displayName: "AppBar__AppBarIconButton",
  componentId: "sc-1vm8wg6-1"
})(["", ";", ";", ";", ";"], function (props) {
  return props.reducedLeftMargin && Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["css"])(["margin-left:-12px;"]);
}, function (props) {
  return props.mobileOnly && Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["css"])(["", "{display:none;}"], function (_ref) {
    var theme = _ref.theme;
    return theme.breakpoints.up("md");
  });
}, function (props) {
  return props.reducedRightMargin && Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["css"])(["margin-right:-12px;"]);
}, function (props) {
  return props.red && Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["css"])(["color:", ";"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.palette.error.dark;
  });
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppBar/index.ts":
/*!*****************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppBar/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ "../../node_modules/@join-uniform/components/src/AppBar/AppBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBar", function() { return _AppBar__WEBPACK_IMPORTED_MODULE_0__["AppBar"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppDrawer/AppDrawer.tsx":
/*!*************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/AppDrawer.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: drawerWidth, AppDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDrawer", function() { return AppDrawer; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LinkListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinkListItem */ "../../node_modules/@join-uniform/components/src/AppDrawer/LinkListItem.tsx");
/* harmony import */ var _LogoListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogoListItem */ "../../node_modules/@join-uniform/components/src/AppDrawer/LogoListItem.tsx");
/* harmony import */ var _ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResponsiveDrawer */ "../../node_modules/@join-uniform/components/src/AppDrawer/ResponsiveDrawer.tsx");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/AppDrawer.tsx";







var drawerWidth = 240;
function AppDrawer(props) {
  var theme = props.theme,
      logoSrc = props.logoSrc,
      links = props.links,
      LinkComponent = props.LinkComponent;
  var ThemeProvider = theme === "admin" ? _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["AdminAppDrawerTheme"] : _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["UserAppDrawerTheme"];
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ThemeProvider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_6__["ResponsiveDrawer"], {
    Drawer: StyledDrawer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinksList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LogoListItem__WEBPACK_IMPORTED_MODULE_5__["LogoListItem"], {
    src: logoSrc,
    href: links[0].href,
    LinkComponent: LinkComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), links.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LinkListItem__WEBPACK_IMPORTED_MODULE_4__["LinkListItem"], {
      key: link.href,
      href: link.href,
      title: link.title,
      hiddenSubPage: link.hiddenSubPage,
      LinkComponent: LinkComponent,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    });
  }))));
}
var StyledDrawer = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default.a).attrs({
  classes: {
    paper: "drawer-paper"
  }
}).withConfig({
  displayName: "AppDrawer__StyledDrawer",
  componentId: "sc-1y1vvh2-0"
})([".drawer-paper{width:", "px;background-color:", ";}"], drawerWidth, function (_ref) {
  var theme = _ref.theme;
  return theme.palette.background.default;
});
var LinksList = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "AppDrawer__LinksList",
  componentId: "sc-1y1vvh2-1"
})(["padding-top:0px;"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppDrawer/AppDrawerContext.tsx":
/*!********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/AppDrawerContext.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: AppDrawerContextProvider, useAppDrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDrawerContextProvider", function() { return AppDrawerContextProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDrawerContext", function() { return useAppDrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/AppDrawerContext.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var AppDrawerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  open: false,
  toggle: function toggle() {
    throw new Error("App drawer context consumer used outside context provider.");
  }
});
function AppDrawerContextProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setOpen(function (state) {
      return !state;
    });
  }, []);
  var value = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      open: open,
      toggle: toggle
    };
  }, [open]);
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AppDrawerContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, children);
}
function useAppDrawerContext() {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AppDrawerContext);
}

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppDrawer/LinkListItem.tsx":
/*!****************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/LinkListItem.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: LinkListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkListItem", function() { return LinkListItem; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/LinkListItem.tsx";




function LinkListItem(props) {
  var LinkComponent = props.LinkComponent,
      href = props.href,
      title = props.title,
      hiddenSubPage = props.hiddenSubPage;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkComponent, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, function (active) {
    if (!active && hiddenSubPage) return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_1___default.a, {
      button: true,
      component: "a",
      href: href,
      selected: active,
      classes: {
        selected: "selected"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ListItemTextWithActiveStyle, {
      inset: hiddenSubPage,
      classes: {
        inset: "inset"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, title));
  });
}
var ListItemTextWithActiveStyle = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "LinkListItem__ListItemTextWithActiveStyle",
  componentId: "sc-1f7oq5m-0"
})(["span{color:", ";.selected &{color:", ";}}&.inset{padding-left:24px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.text.secondary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.text.primary;
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppDrawer/LogoListItem.tsx":
/*!****************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/LogoListItem.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: LogoListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoListItem", function() { return LogoListItem; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LogoText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LogoText */ "../../node_modules/@join-uniform/components/src/LogoText/index.ts");
/* harmony import */ var _generateToolbarHeightBasedCss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generateToolbarHeightBasedCss */ "../../node_modules/@join-uniform/components/src/AppDrawer/generateToolbarHeightBasedCss.tsx");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/LogoListItem.tsx";








function LogoListItem(props) {
  var src = props.src,
      href = props.href,
      LinkComponent = props.LinkComponent;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LinkComponent, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, function () {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wrapper, {
      button: true,
      component: "a",
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LogoListItemIcon, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LogoListItemIconImage, {
      src: src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(LogoListItemText, {
      disableTypography: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_LogoText__WEBPACK_IMPORTED_MODULE_6__["LogoText"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })));
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
}
var listItemHeight = Object(_generateToolbarHeightBasedCss__WEBPACK_IMPORTED_MODULE_7__["generateToolbarHeightBasedCss"])(0);
var logoWidth = Object(_generateToolbarHeightBasedCss__WEBPACK_IMPORTED_MODULE_7__["generateToolbarHeightBasedCss"])(20, "width");
var logoHeight = Object(_generateToolbarHeightBasedCss__WEBPACK_IMPORTED_MODULE_7__["generateToolbarHeightBasedCss"])(20);
var Wrapper = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "LogoListItem__Wrapper",
  componentId: "sc-1ywn9yr-0"
})(["", ";padding:0px;padding-left:16px;"], listItemHeight);
var LogoListItemIcon = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "LogoListItem__LogoListItemIcon",
  componentId: "sc-1ywn9yr-1"
})(["", ";", ";margin-right:12px;"], logoWidth, logoHeight);
var LogoListItemIconImage = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].img.withConfig({
  displayName: "LogoListItem__LogoListItemIconImage",
  componentId: "sc-1ywn9yr-2"
})(["display:block;width:100%;height:100%;"]);
var LogoListItemText = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "LogoListItem__LogoListItemText",
  componentId: "sc-1ywn9yr-3"
})(["padding-left:0;padding-right:0;"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppDrawer/ResponsiveDrawer.tsx":
/*!********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/ResponsiveDrawer.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: ResponsiveDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveDrawer", function() { return ResponsiveDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hidden */ "../../node_modules/@join-uniform/components/src/Hidden/index.ts");
/* harmony import */ var _AppDrawerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppDrawerContext */ "../../node_modules/@join-uniform/components/src/AppDrawer/AppDrawerContext.tsx");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/ResponsiveDrawer.tsx";



function ResponsiveDrawer(props) {
  var _useAppDrawerContext = Object(_AppDrawerContext__WEBPACK_IMPORTED_MODULE_2__["useAppDrawerContext"])(),
      open = _useAppDrawerContext.open,
      toggle = _useAppDrawerContext.toggle;

  var children = props.children,
      Drawer = props.Drawer;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    mdUp: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer, {
    variant: "temporary",
    anchor: "left",
    open: open,
    onClose: toggle,
    ModalProps: {
      keepMounted: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_1__["Hidden"], {
    smDown: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Drawer, {
    variant: "permanent",
    open: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, children)));
}

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppDrawer/generateToolbarHeightBasedCss.tsx":
/*!*********************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/generateToolbarHeightBasedCss.tsx ***!
  \*********************************************************************************************************************************/
/*! exports provided: generateToolbarHeightBasedCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateToolbarHeightBasedCss", function() { return generateToolbarHeightBasedCss; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function generateToolbarHeightBasedCss(reduction) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "height";
  return Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["css"])(function (_ref) {
    var _ref2;

    var theme = _ref.theme;
    return _ref2 = {}, _defineProperty(_ref2, field, "".concat(56 - reduction, "px")), _defineProperty(_ref2, "".concat(theme.breakpoints.up("xs"), " and (orientation: landscape)"), _defineProperty({}, field, "".concat(48 - reduction, "px"))), _defineProperty(_ref2, "".concat(theme.breakpoints.up("sm")), _defineProperty({}, field, "".concat(64 - reduction, "px"))), _ref2;
  });
}

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/AppDrawer/index.ts":
/*!********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/AppDrawer/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: drawerWidth, AppDrawer, AppDrawerContextProvider, useAppDrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppDrawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppDrawer */ "../../node_modules/@join-uniform/components/src/AppDrawer/AppDrawer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return _AppDrawer__WEBPACK_IMPORTED_MODULE_0__["drawerWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppDrawer", function() { return _AppDrawer__WEBPACK_IMPORTED_MODULE_0__["AppDrawer"]; });

/* harmony import */ var _AppDrawerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppDrawerContext */ "../../node_modules/@join-uniform/components/src/AppDrawer/AppDrawerContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppDrawerContextProvider", function() { return _AppDrawerContext__WEBPACK_IMPORTED_MODULE_1__["AppDrawerContextProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAppDrawerContext", function() { return _AppDrawerContext__WEBPACK_IMPORTED_MODULE_1__["useAppDrawerContext"]; });




/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Button/Button.tsx":
/*!*******************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/Button.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: colors, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Typography */ "../../node_modules/@join-uniform/components/src/Button/Typography/index.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/Button.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







var createCustomColorCss = function createCustomColorCss(colorName, color) {
  // From:
  // https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/createPalette.js
  // function addLightOrDark(..)
  var tonalOffset = 0.2; // const colorLight = lighten(color, tonalOffset);

  var colorDark = Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["darken"])(color, tonalOffset * 1.5);
  return Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["css"])(["&.color-", ":not([disabled]){color:", ";}&.variant-text.color-", "{&:hover{background-color:", ";@media (hover:none){background-color:transparent;}}}&.variant-outlined.color-", "{border:1px solid ", ";&:hover{border:1px solid ", ";}}&.variant-contained.color-", ",&.variant-fab.color-", ",&.variant-extendedFab.color-", "{", ";}"], colorName, color, colorName, function (_ref) {
    var theme = _ref.theme;
    return Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(color, theme.palette.action.hoverOpacity);
  }, colorName, Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(color, 0.5), color, colorName, colorName, colorName, function (_ref2) {
    var theme = _ref2.theme;
    return "\n      color: ".concat(theme.palette.getContrastText(color), ";\n      background-color: ").concat(color, ";\n      box-shadow: ").concat(theme.shadows[2], ";\n\n      &.focusVisible {\n        box-shadow: ").concat(theme.shadows[6], ";\n      }\n\n      &:active {\n        box-shadow: ").concat(theme.shadows[8], ";\n      }\n\n      &.disabled {\n        color: ").concat(theme.palette.action.disabled, ";\n        background-color: ").concat(theme.palette.action.disabledBackground, ";\n        box-shadow: ").concat(theme.shadows[0], ";\n      }\n\n      &:hover {\n        background-color: ").concat(colorDark, ";\n\n        /* Reset on touch devices, it doesn't add specificity */\n        @media (hover: none) {\n          background-color: ").concat(color, ";\n        }\n      }\n    ");
  });
};

var buttonColors = {
  primary: createCustomColorCss("primary", "#2f8d2b"),
  orange: createCustomColorCss("orange", "#f2994a"),
  red: createCustomColorCss("red", "#910f0f"),
  blue: createCustomColorCss("blue", "#2d9cdb"),
  yellow: createCustomColorCss("yellow", "#ecd100"),
  lightGreen: createCustomColorCss("lightGreen", "#4fef48")
};
var colors = ["default", "inherit"].concat(_toConsumableArray(Object.keys(buttonColors)));
var buttonColorsCss = Object.values(buttonColors).reduce(function (accumulator, color) {
  return _toConsumableArray(accumulator).concat(_toConsumableArray(color));
}, []);

var _styleTable$Button = _slicedToArray(_Typography__WEBPACK_IMPORTED_MODULE_4__["styleTable"].Button, 5),
    typeface = _styleTable$Button[0],
    font = _styleTable$Button[1],
    size = _styleTable$Button[2],
    casing = _styleTable$Button[3],
    spacing = _styleTable$Button[4];

if (casing) {//
}

var typographyCss = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-family:", ";font-weight:", ";font-size:", "rem;letter-spacing:", "rem;text-transform:none;"], typeface, font, size / 16, spacing / size);
var Button = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  var className = props.className,
      _props$classes = props.classes,
      parentClasses = _props$classes === void 0 ? {} : _props$classes,
      _props$color = props.color,
      color = _props$color === void 0 ? "default" : _props$color,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? "text" : _props$variant,
      rest = _objectWithoutProperties(props, ["className", "classes", "color", "variant"]);

  var classNames = [];
  if (className) classNames.push(className);
  classNames.push("variant-".concat(variant));

  if (color !== "default" && color !== "inherit") {
    classNames.push("color-".concat(color));
  }

  var classes = _objectSpread({}, parentClasses, {
    disabled: "disabled",
    focusVisible: "focusVisible"
  });

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    className: classNames.join(" "),
    classes: classes,
    color: color === "inherit" ? "inherit" : "default",
    variant: variant
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }));
}).withConfig({
  displayName: "Button",
  componentId: "qg6n2y-0"
})(["", ";", ";"], typographyCss, buttonColorsCss);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Button/Typography/Typography.tsx":
/*!**********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/Typography/Typography.tsx ***!
  \**********************************************************************************************************************/
/*! exports provided: TypographyVariant, Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return Typography; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styleTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styleTable */ "../../node_modules/@join-uniform/components/src/Button/Typography/styleTable.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "../../node_modules/@join-uniform/components/src/Button/Typography/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypographyVariant", function() { return _types__WEBPACK_IMPORTED_MODULE_4__["Variant"]; });

var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/Typography/Typography.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








/**
 * Typography component based on the second iteration of the Material Design
 * specifications.
 *
 * @see https://material.io/design/typography/the-type-system.html
 */
var Typography = function Typography(props) {
  var _props$variant = props.variant,
      variant = _props$variant === void 0 ? _types__WEBPACK_IMPORTED_MODULE_4__["Variant"].Body1 : _props$variant,
      component = props.component,
      rest = _objectWithoutProperties(props, ["variant", "component"]);

  var componentVariant = styles[variant];
  var TypographyComponent = component ? componentVariant.withComponent(component) : componentVariant;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    component: function component(_ref) {
      var className = _ref.className,
          style = _ref.style,
          children = _ref.children;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TypographyComponent, {
        className: className,
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, children);
    }
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
};
var styles = Object.entries(_styleTable__WEBPACK_IMPORTED_MODULE_3__["styleTable"]).reduce(function (accumulator, _ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      variantKey = _ref3[0],
      _ref3$ = _slicedToArray(_ref3[1], 5),
      typeface = _ref3$[0],
      font = _ref3$[1],
      size = _ref3$[2],
      casing = _ref3$[3],
      spacing = _ref3$[4];

  var variant = variantKey;
  accumulator[variant] = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].span.withConfig({
    displayName: "Typography__variant",
    componentId: "jf11ks-0"
  })(["font-family:", ";font-weight:", ";font-size:", "rem;", ";letter-spacing:", "rem;line-height:initial;line-height:unset;"], typeface, font, size / 16, casing === "all caps" && "text-transform: uppercase", spacing / size);
  return accumulator;
}, // tslint:disable-next-line:no-object-literal-type-assertion
{});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Button/Typography/index.ts":
/*!****************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/Typography/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: styleTable, TypographyVariant, Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styleTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleTable */ "../../node_modules/@join-uniform/components/src/Button/Typography/styleTable.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleTable", function() { return _styleTable__WEBPACK_IMPORTED_MODULE_0__["styleTable"]; });

/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typography */ "../../node_modules/@join-uniform/components/src/Button/Typography/Typography.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypographyVariant", function() { return _Typography__WEBPACK_IMPORTED_MODULE_1__["TypographyVariant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return _Typography__WEBPACK_IMPORTED_MODULE_1__["Typography"]; });




/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Button/Typography/styleTable.ts":
/*!*********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/Typography/styleTable.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: styleTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleTable", function() { return styleTable; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../../node_modules/@join-uniform/components/src/Button/Typography/types.ts");
var _styleTable;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var styleTable = (_styleTable = {}, _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].H1, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Light, 96, "sentence", -1.5]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].H2, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Light, 60, "sentence", -0.5]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].H3, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 48, "sentence", 0]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].H4, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 34, "sentence", 0.25]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].H5, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 24, "sentence", 0]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].H6, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Medium, 20, "sentence", 0.15]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].Subtitle1, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 16, "sentence", 0.15]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].Subtitle2, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Medium, 14, "sentence", 0.1]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].Body1, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 16, "sentence", 0.5]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].Body2, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 14, "sentence", 0.25]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].Button, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Medium, 14, "all caps", 0.75]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].Caption, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 12, "sentence", 0.4]), _defineProperty(_styleTable, _types__WEBPACK_IMPORTED_MODULE_0__["Variant"].Overline, [_types__WEBPACK_IMPORTED_MODULE_0__["Face"].Montserrat, _types__WEBPACK_IMPORTED_MODULE_0__["Font"].Regular, 10, "all caps", 1.5]), _styleTable);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Button/Typography/types.ts":
/*!****************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/Typography/types.ts ***!
  \****************************************************************************************************************/
/*! exports provided: Variant, Face, Font */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variant", function() { return Variant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Face", function() { return Face; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
var Variant;

(function (Variant) {
  Variant["H1"] = "H1";
  Variant["H2"] = "H2";
  Variant["H3"] = "H3";
  Variant["H4"] = "H4";
  Variant["H5"] = "H5";
  Variant["H6"] = "H6";
  Variant["Subtitle1"] = "Subtitle1";
  Variant["Subtitle2"] = "Subtitle2";
  Variant["Body1"] = "Body1";
  Variant["Body2"] = "Body2";
  Variant["Button"] = "Button";
  Variant["Caption"] = "Caption";
  Variant["Overline"] = "Overline";
})(Variant || (Variant = {}));

var Face;

(function (Face) {
  Face["Montserrat"] = "'Montserrat', sans-serif";
  Face["Roboto"] = "'Roboto', sans-serif";
})(Face || (Face = {}));

var Font;

(function (Font) {
  Font["Light"] = "300";
  Font["Regular"] = "400";
  Font["Medium"] = "500";
})(Font || (Font = {}));

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Button/index.ts":
/*!*****************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Button/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: colors, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../../node_modules/@join-uniform/components/src/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["colors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Card/Card.tsx":
/*!***************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Card/Card.tsx ***!
  \***************************************************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardActionArea */ "../../node_modules/@join-uniform/components/src/CardActionArea/index.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Card/Card.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Card = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  var children = props.children,
      hoverable = props.hoverable,
      rest = _objectWithoutProperties(props, ["children", "hoverable"]);

  if (hoverable && "development" === "development") {
    var hasActionArea = hasChildCardActionAreaComponent(children);

    if (!hasActionArea) {
      throw new Error("Expected a child CardActionArea component when using the 'hoverable' style.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), children);
}).withConfig({
  displayName: "Card",
  componentId: "dn4tow-0"
})(["", "{box-shadow:none;border:1px solid #dadce0;border-radius:4px;}transition:", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.down("sm");
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.transitions.create("box-shadow", {
    duration: theme.transitions.duration.short
  });
}, function (_ref3) {
  var hoverable = _ref3.hoverable,
      theme = _ref3.theme;
  return hoverable && "\n      &:hover {\n        box-shadow: ".concat(theme.shadows[2], ";\n      }\n\n      ").concat(theme.breakpoints.up("md"), " {\n        &:hover {\n          box-shadow: ").concat(theme.shadows[4], ";\n        }\n      }\n    ");
});
/**
 * Recursively checks children in search of an instance of the CardActionArea
 * component.
 *
 * @param children Children of current tree.
 */

var hasChildCardActionAreaComponent = function hasChildCardActionAreaComponent(children) {
  return react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children).some(function (child) {
    // Not a text node.
    if (typeof child !== "string" && typeof child !== "number") {
      // Not a native element and display name matches.
      if (typeof child.type !== "string" && child.type.displayName === _CardActionArea__WEBPACK_IMPORTED_MODULE_3__["CardActionArea"].displayName) {
        return true;
      } // Native element or component.


      return hasChildCardActionAreaComponent(child.props.children);
    } // Text node.


    return false;
  });
};

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Card/index.ts":
/*!***************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Card/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "../../node_modules/@join-uniform/components/src/Card/Card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_0__["Card"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/CardActionArea/CardActionArea.tsx":
/*!***********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/CardActionArea/CardActionArea.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: CardActionArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardActionArea", function() { return CardActionArea; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");

var CardActionArea = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "CardActionArea",
  componentId: "sc-1435b4e-0"
})(["", ";"], function (_ref) {
  var onClick = _ref.onClick;
  return onClick && Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["css"])(["cursor:pointer;"]);
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/CardActionArea/index.ts":
/*!*************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/CardActionArea/index.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CardActionArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardActionArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardActionArea */ "../../node_modules/@join-uniform/components/src/CardActionArea/CardActionArea.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardActionArea", function() { return _CardActionArea__WEBPACK_IMPORTED_MODULE_0__["CardActionArea"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/CardHeader/CardHeader.tsx":
/*!***************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/CardHeader/CardHeader.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: CardHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _adminTypography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminTypography */ "../../node_modules/@join-uniform/components/src/adminTypography.ts");
function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/CardHeader/CardHeader.tsx";




var CardHeader = function CardHeader(props) {
  var className = props.className,
      title = props.title,
      titleStyle = props.titleStyle,
      subheader = props.subheader,
      imageUrl = props.imageUrl,
      _props$imageSize = props.imageSize,
      imageSize = _props$imageSize === void 0 ? 80 : _props$imageSize,
      overline = props.overline,
      _props$subheaderColor = props.subheaderColor,
      subheaderColor = _props$subheaderColor === void 0 ? "textSecondary" : _props$subheaderColor,
      variant = props.variant;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Wrapper, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, imageUrl && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Image, {
    src: imageUrl,
    size: imageSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, overline && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Overline, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, overline), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StyledTitle, {
    style: titleStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this,
    _css: variant === "admin" ? _adminTypography__WEBPACK_IMPORTED_MODULE_4__["cardTitleStyle"] : undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Subheader, {
    color: subheaderColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, subheader)));
};
var Wrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"].div.withConfig({
  displayName: "CardHeader__Wrapper",
  componentId: "sc-1oc35he-0"
})(["display:flex;align-items:center;padding:", "px;", "{padding:", "px ", "px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.unit * 2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.up("sm");
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.unit * 2;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.unit * 3;
});
var Image = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    className: props.className,
    src: props.src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  });
}).withConfig({
  displayName: "CardHeader__Image",
  componentId: "sc-1oc35he-1"
})(["display:block;width:", "px;height:", "px;margin-right:", "px;"], function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.unit * 2;
});
var Overline = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (_ref6) {
  var className = _ref6.className,
      children = _ref6.children;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: className,
    variant: "overline",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, children);
}).withConfig({
  displayName: "CardHeader__Overline",
  componentId: "sc-1oc35he-2"
})(["font-weight:500;"]);
var Title = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      style = _ref7.style;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: className,
    variant: "h5",
    paragraph: true,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, children);
}).withConfig({
  displayName: "CardHeader__Title",
  componentId: "sc-1oc35he-3"
})(["margin-bottom:8px;"]);
var Subheader = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      color = _ref8.color;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: className,
    variant: "subtitle2",
    gutterBottom: true,
    color: color,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, children);
}).withConfig({
  displayName: "CardHeader__Subheader",
  componentId: "sc-1oc35he-4"
})([""]);

var _StyledTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Title)(_templateObject(), function (p) {
  return p._css;
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/CardHeader/index.ts":
/*!*********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/CardHeader/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CardHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardHeader */ "../../node_modules/@join-uniform/components/src/CardHeader/CardHeader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return _CardHeader__WEBPACK_IMPORTED_MODULE_0__["CardHeader"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCard.tsx":
/*!*********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCard.tsx ***!
  \*********************************************************************************************************************/
/*! exports provided: DashboardCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCard", function() { return DashboardCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
/* harmony import */ var _DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardCardModeContext */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardModeContext.tsx");
/* harmony import */ var _DashboardCardPagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardCardPagination */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPagination.tsx");
/* harmony import */ var _DashboardCardPaginationHeaderToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardCardPaginationHeaderToolbar */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPaginationHeaderToolbar.tsx");
/* harmony import */ var _DashboardCardTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DashboardCardTable */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTable.tsx");
/* harmony import */ var _DashboardCardTitleToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashboardCardTitleToolbar */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTitleToolbar.tsx");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCard.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var DashboardCard =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardCard, _Component);

  function DashboardCard() {
    _classCallCheck(this, DashboardCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardCard).apply(this, arguments));
  }

  _createClass(DashboardCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          titleSiblingNode = _this$props.titleSiblingNode,
          iconNode = _this$props.iconNode,
          items = _this$props.items,
          onItemEditClick = _this$props.onItemEditClick,
          onRequestDeleteClick = _this$props.onRequestDeleteClick,
          editCaptionText = _this$props.editCaptionText,
          columnLabels = _this$props.columnLabels,
          columnTypes = _this$props.columnTypes,
          paginationProps = _this$props.paginationProps,
          paginationListItemType = _this$props.paginationListItemType,
          additionalActionNode = _this$props.additionalActionNode,
          bottomActionsNode = _this$props.bottomActionsNode;
      var itemKeys = items.map(function (item) {
        return item.key;
      });
      var paginationNode = paginationProps ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardCardPagination__WEBPACK_IMPORTED_MODULE_4__["DashboardCardPagination"], _extends({}, paginationProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })) : undefined;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_3__["DashboardCardModeProvider"], {
        itemKeys: itemKeys,
        onItemEditClick: onItemEditClick,
        onRequestDeleteClick: onRequestDeleteClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardCardTitleToolbar__WEBPACK_IMPORTED_MODULE_7__["DashboardCardTitleToolbar"], {
        title: title,
        titleSiblingNode: titleSiblingNode,
        iconNode: iconNode,
        editCaptionText: editCaptionText,
        showEditButton: items.length > 0 && Boolean(onItemEditClick),
        showDeletionButton: items.length > 0 && Boolean(onRequestDeleteClick),
        additionalActionNode: additionalActionNode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), paginationProps && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardCardPaginationHeaderToolbar__WEBPACK_IMPORTED_MODULE_5__["DashboardCardPaginationHeaderToolbar"], _extends({}, paginationProps, {
        listItemType: paginationListItemType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      })), items.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardCardTable__WEBPACK_IMPORTED_MODULE_6__["DashboardCardTable"], {
        showCheckboxes: Boolean(onRequestDeleteClick),
        columnLabels: columnLabels,
        columnTypes: columnTypes,
        items: items,
        bottomPaginationNode: paginationNode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), bottomActionsNode && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, bottomActionsNode)));
    }
  }]);

  return DashboardCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardColumnComponents.tsx":
/*!*************************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardColumnComponents.tsx ***!
  \*************************************************************************************************************************************/
/*! exports provided: ColumnItemDualLine, ColumnItemImage, ColumnItemProfile, ColumnItemSingleLine, ColumnItemSwitch, ColumnItemButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnItemDualLine", function() { return ColumnItemDualLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnItemImage", function() { return ColumnItemImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnItemProfile", function() { return ColumnItemProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnItemSingleLine", function() { return ColumnItemSingleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnItemSwitch", function() { return ColumnItemSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnItemButton", function() { return ColumnItemButton; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
/* harmony import */ var _ResponsiveIconTextButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ResponsiveIconTextButton */ "../../node_modules/@join-uniform/components/src/ResponsiveIconTextButton/index.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardColumnComponents.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var ColumnItemDualLine = function ColumnItemDualLine(_ref) {
  var itemColumn = _ref.itemColumn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, itemColumn.primaryText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "caption",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, itemColumn.secondaryText));
};
var ColumnItemImage = function ColumnItemImage(_ref2) {
  var itemColumn = _ref2.itemColumn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    style: {
      display: "block",
      height: 64,
      margin: "4px 0"
    },
    src: itemColumn.imgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  });
};
var ColumnItemProfile = function ColumnItemProfile(_ref3) {
  var itemColumn = _ref3.itemColumn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProfileWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "profile-newness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      visibility: itemColumn.isNewUser ? "visible" : "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "profile-image",
    src: itemColumn.imgUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "profile-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, itemColumn.primaryText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "caption",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:".concat(itemColumn.secondaryText),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, itemColumn.secondaryText))));
};
var ColumnItemSingleLine = function ColumnItemSingleLine(_ref4) {
  var itemColumn = _ref4.itemColumn;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, itemColumn.primaryText);
};
var StyledSwitch = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Switch"], _extends({
    color: "primary",
    classes: {
      bar: "bar",
      checked: "checked",
      disabled: "disabled"
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }));
}).withConfig({
  displayName: "DashboardCardColumnComponents__StyledSwitch",
  componentId: "t1iif7-0"
})([".disabled{color:", ";}.disabled + .bar{opacity:0.38;}.checked{color:", ";}.checked + .bar{background-color:", ";opacity:0.5;}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.palette.grey[50];
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.palette.primary.main;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.palette.primary.main;
});
var ColumnItemSwitch = function ColumnItemSwitch(_ref8) {
  var itemColumn = _ref8.itemColumn,
      mode = _ref8.mode;
  var component = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledSwitch, {
    checked: Boolean(itemColumn.switchChecked),
    onClick: function onClick(event) {
      event.stopPropagation();
    },
    onChange: function onChange(event) {
      if (!itemColumn.switchOnChange) return;
      itemColumn.switchOnChange(event.target.checked);
    },
    disabled: !itemColumn.switchAlwaysClickable && mode !== "edit",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  });
  return itemColumn.switchTooltipTitle ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: itemColumn.switchTooltipTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, component) : component;
};
var ColumnItemButton = function ColumnItemButton(_ref9) {
  var itemColumn = _ref9.itemColumn;
  var button = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResponsiveIconTextButton__WEBPACK_IMPORTED_MODULE_3__["ResponsiveIconTextButton"], {
    onClick: itemColumn.onClick,
    iconNode: itemColumn.buttonIconNode,
    tooltipTitle: itemColumn.buttonTooltipTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, itemColumn.primaryText);
  return itemColumn.wrapper ? Object(react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"])(itemColumn.wrapper, undefined, button) : button;
};
var ProfileWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "DashboardCardColumnComponents__ProfileWrapper",
  componentId: "t1iif7-1"
})(["display:flex;.profile-newness{display:flex;flex-direction:column;justify-content:center;}.profile-newness div{width:16px;height:16px;background-color:", ";border-radius:50%;}.profile-image{display:block;height:64px;margin:4px 8px 4px 0;}.profile-text{display:flex;flex-direction:column;justify-content:center;}.profile-text > *:first-child{margin-bottom:4px;}"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.palette.primary.light;
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardColumnType.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardColumnType.ts ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardItem.ts":
/*!************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardItem.ts ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardItemColumn.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardItemColumn.ts ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardModeContext.tsx":
/*!********************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardModeContext.tsx ***!
  \********************************************************************************************************************************/
/*! exports provided: DashboardCardModeProvider, DashboardCardModeConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardModeProvider", function() { return DashboardCardModeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardModeConsumer", function() { return DashboardCardModeConsumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardModeContext.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  mode: "display",
  selected: []
};

var uninitializedAction = function uninitializedAction() {
  throw new Error("Uninitialized action was called.");
};

var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  actions: {
    enterEditMode: uninitializedAction,
    enterDeletionMode: uninitializedAction,
    exitMode: uninitializedAction,
    clickItem: uninitializedAction,
    requestDelete: uninitializedAction,
    toggleSelectAll: uninitializedAction,
    getSelectedCount: uninitializedAction,
    getIsIndeterminate: uninitializedAction,
    getIsAllSelected: uninitializedAction
  },
  state: initialState
});
/**
 * Wraps the functionality of the DashboardCard which deals with entering the
 * edit and deletion modes. It tracks the checkbox states for rows.
 */

var DashboardCardModeProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardCardModeProvider, _Component);

  function DashboardCardModeProvider(props) {
    var _this;

    _classCallCheck(this, DashboardCardModeProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashboardCardModeProvider).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnterEditMode", function () {
      return _this.setState({
        mode: "edit"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEnterDeletionMode", function () {
      return _this.setState({
        mode: "deletion"
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleExitMode", function () {
      return _this.setState( // FIXME: Not sure what's going with this type definition problem.
      // @ts-ignore
      DashboardCardModeProvider.getResetSelectionStateFromProps(_this.props));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleItemClick", function (key) {
      var itemIndex = _this.props.itemKeys.indexOf(key);

      if (itemIndex < 0) return;

      if (_this.state.mode === "deletion") {
        var _selected = _this.state.selected;

        _this.setState({
          selected: _toConsumableArray(_selected.slice(0, itemIndex)).concat([!_selected[itemIndex]], _toConsumableArray(_selected.slice(itemIndex + 1)))
        });
      } else if (_this.state.mode === "edit" && _this.props.onItemEditClick) {
        _this.props.onItemEditClick(key);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRequestDeleteClick", function () {
      if (!_this.props.onRequestDeleteClick) return;
      if (_this.getSelectedCount() === 0) return;

      var selectedItemKeys = _this.props.itemKeys.reduce(function (acc, key, index) {
        if (_this.state.selected[index]) return acc.concat(key);
        return acc;
      }, []);

      if (selectedItemKeys.length === 0) return;

      _this.props.onRequestDeleteClick(selectedItemKeys);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSelectAll", function () {
      if (_this.state.mode !== "deletion") return;

      _this.setState({
        selected: _this.props.itemKeys.map(function () {
          return !_this.getIsAllSelected();
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedCount", function () {
      return _this.state.selected.reduce(function (acc, val) {
        return val ? acc + 1 : acc;
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getIsIndeterminate", function () {
      var selectedCount = _this.getSelectedCount();

      return selectedCount > 0 && selectedCount < _this.state.selected.length;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getIsAllSelected", function () {
      return _this.getSelectedCount() === _this.props.itemKeys.length;
    });

    _this.state = _objectSpread({}, initialState, DashboardCardModeProvider.getResetSelectionStateFromProps(props));
    return _this;
  }
  /**
   * Returns the card to display mode and sets all items to unselected.
   */


  _createClass(DashboardCardModeProvider, [{
    key: "componentDidUpdate",

    /**
     * If any item key has changed, reset the display state (exit back to display
     * mode) for safety. This relies on getDerivedStateFromProps correctly
     * resizing the "selected" state array.
     */
    value: function componentDidUpdate(prevProps) {
      for (var i = 0; i < prevProps.itemKeys.length; i += 1) {
        if (prevProps.itemKeys[i] !== this.props.itemKeys[i]) {
          this.handleExitMode();
          return;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var api = {
        actions: {
          enterEditMode: this.handleEnterEditMode,
          enterDeletionMode: this.handleEnterDeletionMode,
          exitMode: this.handleExitMode,
          clickItem: this.handleItemClick,
          requestDelete: this.handleRequestDeleteClick,
          toggleSelectAll: this.handleSelectAll,
          getSelectedCount: this.getSelectedCount,
          getIsIndeterminate: this.getIsIndeterminate,
          getIsAllSelected: this.getIsAllSelected
        },
        state: this.state
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Provider, {
        value: api,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, children);
    }
  }], [{
    key: "getResetSelectionStateFromProps",
    value: function getResetSelectionStateFromProps(props) {
      return {
        mode: "display",
        selected: props.itemKeys.map(function () {
          return false;
        })
      };
    }
    /**
     * If the number of items provided to this component changes, recalculate the
     * "selected" state property to prevent range errors.
     */

  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.itemKeys.length !== prevState.selected.length) {
        return DashboardCardModeProvider.getResetSelectionStateFromProps(nextProps);
      }

      return null;
    }
  }]);

  return DashboardCardModeProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var DashboardCardModeConsumer = context.Consumer;

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPagination.tsx":
/*!*******************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPagination.tsx ***!
  \*******************************************************************************************************************************/
/*! exports provided: DashboardCardPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardPagination", function() { return DashboardCardPagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPagination.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // tslint:disable-next-line:no-empty-interface

var DashboardCardPagination =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardCardPagination, _Component);

  function DashboardCardPagination() {
    _classCallCheck(this, DashboardCardPagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardCardPagination).apply(this, arguments));
  }

  _createClass(DashboardCardPagination, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_1__["TablePagination"], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return DashboardCardPagination;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPaginationHeaderToolbar.tsx":
/*!********************************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPaginationHeaderToolbar.tsx ***!
  \********************************************************************************************************************************************/
/*! exports provided: DashboardCardPaginationHeaderToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardPaginationHeaderToolbar", function() { return DashboardCardPaginationHeaderToolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPaginationHeaderToolbar.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DashboardCardPaginationHeaderToolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardCardPaginationHeaderToolbar, _Component);

  function DashboardCardPaginationHeaderToolbar() {
    _classCallCheck(this, DashboardCardPaginationHeaderToolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardCardPaginationHeaderToolbar).apply(this, arguments));
  }

  _createClass(DashboardCardPaginationHeaderToolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rowsPerPage = _this$props.rowsPerPage,
          count = _this$props.count,
          listItemType = _this$props.listItemType;

      if (!listItemType) {
        throw new Error("List item type required if using pagination controls.");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "subtitle1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Showing ", rowsPerPage, " of ", count, " ", listItemType, "."));
    }
  }]);

  return DashboardCardPaginationHeaderToolbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTable.tsx":
/*!**************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTable.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: DashboardCardTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardTable", function() { return DashboardCardTable; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DashboardTableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DashboardTableRow */ "../../node_modules/@join-uniform/components/src/DashboardTableRow/index.ts");
/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hidden */ "../../node_modules/@join-uniform/components/src/Hidden/index.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
/* harmony import */ var _DashboardCardColumnComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardCardColumnComponents */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardColumnComponents.tsx");
/* harmony import */ var _DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DashboardCardModeContext */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardModeContext.tsx");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTable.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DashboardCardTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardCardTable, _Component);

  function DashboardCardTable(props) {
    var _this;

    _classCallCheck(this, DashboardCardTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashboardCardTable).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getColumnComponent", function (type) {
      switch (type) {
        case "dual-line":
          return _DashboardCardColumnComponents__WEBPACK_IMPORTED_MODULE_5__["ColumnItemDualLine"];

        case "image":
          return _DashboardCardColumnComponents__WEBPACK_IMPORTED_MODULE_5__["ColumnItemImage"];

        case "profile":
          return _DashboardCardColumnComponents__WEBPACK_IMPORTED_MODULE_5__["ColumnItemProfile"];

        case "single-line":
          return _DashboardCardColumnComponents__WEBPACK_IMPORTED_MODULE_5__["ColumnItemSingleLine"];

        case "switch":
          return _DashboardCardColumnComponents__WEBPACK_IMPORTED_MODULE_5__["ColumnItemSwitch"];

        case "button":
          return _DashboardCardColumnComponents__WEBPACK_IMPORTED_MODULE_5__["ColumnItemButton"];

        default:
          throw new Error("Unknown column type: ".concat(type));
      }
    });

    if (props.columnLabels.length !== props.columnTypes.length) {
      throw new Error("Expected same length columnLabels and columnTypes");
    }

    return _this;
  }

  _createClass(DashboardCardTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          showCheckboxes = _this$props.showCheckboxes,
          columnTypes = _this$props.columnTypes,
          columnLabels = _this$props.columnLabels,
          items = _this$props.items,
          bottomPaginationNode = _this$props.bottomPaginationNode;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_6__["DashboardCardModeConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, function (api) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["Table"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["TableHead"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
          suppressHydrationWarning: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          },
          __self: this
        }, showCheckboxes && api.state.mode === "deletion" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CheckboxWidthTableCell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, api.state.mode === "deletion" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RedCheckbox, {
          indeterminate: api.actions.getIsIndeterminate(),
          checked: api.actions.getIsAllSelected(),
          onChange: api.actions.toggleSelectAll,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        })), columnLabels.map(function (label, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
            key: index,
            xsDown: columnTypes[index] === "image",
            implementation: "js",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UnpaddedTableCell, {
            style: {
              // Make first cell the largest. This is to make multiple
              // tables on one page have the same column sizings.
              width: index === 0 && columnLabels.length > 2 ? "50%" : undefined,
              // Force right padding if Switch component because we're
              // using numeric padding style.
              paddingRight: columnTypes[index] === "switch" ? 24 : undefined
            },
            align: columnTypes[index] === "switch" ? "right" : undefined,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            variant: "subtitle2" // Add left padding for alignment with Toolbar Button.
            ,
            style: {
              paddingLeft: columnTypes[index] === "button" ? 32 : undefined
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, label)));
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["TableBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, items.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClickableTableRow, {
            key: item.key,
            selected: api.state.selected[index],
            onClick: function onClick() {
              return api.actions.clickItem(item.key);
            },
            mode: api.state.mode,
            suppressHydrationWarning: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, showCheckboxes && api.state.mode === "deletion" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UnpaddedTableCell, {
            padding: "checkbox",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, api.state.mode === "deletion" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RedCheckbox, {
            checked: api.state.selected[index],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          })), item.columns.map(function (itemColumn, columnIndex) {
            var ItemColumnComponent = _this2.getColumnComponent(columnTypes[columnIndex]);

            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
              key: "".concat(item.key, "-").concat(columnIndex),
              xsDown: columnTypes[columnIndex] === "image",
              implementation: "js",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 186
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UnpaddedTableCell, {
              style: {
                // Force right padding if Switch component because we're
                // using numeric padding style.
                paddingRight: columnTypes[columnIndex] === "switch" ? 24 : undefined
              },
              align: columnTypes[columnIndex] === "switch" ? "right" : undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemColumnComponent, {
              itemColumn: itemColumn,
              mode: api.state.mode,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 206
              },
              __self: this
            })));
          }));
        })), bottomPaginationNode && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["TableFooter"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["TableRow"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, bottomPaginationNode)));
      });
    }
  }]);

  return DashboardCardTable;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
var CheckboxWidthTableCell = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["TableCell"]).attrs(function () {
  return {
    padding: "checkbox"
  };
}).withConfig({
  displayName: "DashboardCardTable__CheckboxWidthTableCell",
  componentId: "sc-1l5x9ck-0"
})(["width:72px;"]);
var RedCheckbox = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["Checkbox"]).attrs(function () {
  return {
    classes: {
      checked: "checked"
    }
  };
}).withConfig({
  displayName: "DashboardCardTable__RedCheckbox",
  componentId: "sc-1l5x9ck-1"
})(["&.checked{color:#e10050;}"]);
var UnpaddedTableCell = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["TableCell"]).withConfig({
  displayName: "DashboardCardTable__UnpaddedTableCell",
  componentId: "sc-1l5x9ck-2"
})(["&:not(:first-child){padding-left:0;padding-right:0;}"]);
var ClickableTableRow = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  var mode = props.mode,
      rest = _objectWithoutProperties(props, ["mode"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DashboardTableRow__WEBPACK_IMPORTED_MODULE_2__["DashboardTableRow"], _extends({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }));
}).withConfig({
  displayName: "DashboardCardTable__ClickableTableRow",
  componentId: "sc-1l5x9ck-3"
})(["cursor:", ";"], function (_ref) {
  var mode = _ref.mode;
  return mode !== "display" ? "pointer" : "inherit";
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTitleToolbar.tsx":
/*!*********************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTitleToolbar.tsx ***!
  \*********************************************************************************************************************************/
/*! exports provided: DashboardCardTitleToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCardTitleToolbar", function() { return DashboardCardTitleToolbar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _join_uniform_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @join-uniform/icons */ "../../node_modules/@join-uniform/icons/src/index.ts");
/* harmony import */ var _adminTypography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminTypography */ "../../node_modules/@join-uniform/components/src/adminTypography.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
/* harmony import */ var _DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashboardCardModeContext */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardModeContext.tsx");
function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTitleToolbar.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var DashboardCardTitleToolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(DashboardCardTitleToolbar, _Component);

  function DashboardCardTitleToolbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DashboardCardTitleToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DashboardCardTitleToolbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateActionsButtonNode", function (api) {
      var _this$props = _this.props,
          showDeletionButton = _this$props.showDeletionButton,
          showEditButton = _this$props.showEditButton,
          additionalActionNode = _this$props.additionalActionNode;
      var _api$actions = api.actions,
          enterDeletionMode = _api$actions.enterDeletionMode,
          enterEditMode = _api$actions.enterEditMode,
          exitMode = _api$actions.exitMode,
          requestDelete = _api$actions.requestDelete;
      var mode = api.state.mode;
      var selectedCount = api.actions.getSelectedCount();
      /**
       * This is used to selectively wrap an element with a tooltip. Passing a
       * disabled button as a child to a tooltip causes an error. To prevent the
       * error, undefined is passed as the title when the element should be
       * disabled to prevent wrapping with a tooltip.
       */

      var maybeWithTooltip = function maybeWithTooltip(element, title) {
        return title ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
          title: title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, element) : element;
      };

      return mode === "display" ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, additionalActionNode, showDeletionButton && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        title: "Deletion Mode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
        onClick: enterDeletionMode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_4__["DeleteIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))), showEditButton && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        title: "Edit Mode",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
        onClick: enterEditMode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_4__["EditIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, mode === "deletion" && maybeWithTooltip(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
        disabled: selectedCount === 0,
        onClick: requestDelete,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_4__["DeleteIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), selectedCount !== 0 ? "Delete ".concat(selectedCount, " Selected Item").concat(selectedCount !== 1 ? "s" : "") : undefined), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
        title: "Exit ".concat(mode === "edit" ? "Edit" : "Deletion", " Mode"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
        onClick: exitMode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_4__["DoneIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }))));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "generateCaptionNode", function (api) {
      var _this$props2 = _this.props,
          title = _this$props2.title,
          titleSiblingNode = _this$props2.titleSiblingNode,
          editCaptionText = _this$props2.editCaptionText,
          iconNode = _this$props2.iconNode;
      var mode = api.state.mode;
      var selectedCount = api.actions.getSelectedCount();
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, mode === "display" && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EntryTitleWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, iconNode || react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_4__["DashboardIcon"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StyledTypography, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, title), titleSiblingNode), mode !== "display" && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
        variant: "subtitle2",
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, mode === "edit" ? "Edit Mode".concat(editCaptionText ? " - " : "").concat(editCaptionText || "") : "".concat(selectedCount, " Selected for Deletion")));
    });

    return _this;
  }

  _createClass(DashboardCardTitleToolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_7__["DashboardCardModeConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, function (api) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ColoredToolbar, {
          mode: api.state.mode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CaptionWrapper, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }, _this2.generateCaptionNode(api)), _this2.generateActionsButtonNode(api));
      });
    }
  }]);

  return DashboardCardTitleToolbar;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);
var ColoredToolbar = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (props) {
  var mode = props.mode,
      rest = _objectWithoutProperties(props, ["mode"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["Toolbar"], _extends({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }));
}).withConfig({
  displayName: "DashboardCardTitleToolbar__ColoredToolbar",
  componentId: "sc-11kznze-0"
})(["", ""], function (_ref) {
  var mode = _ref.mode,
      theme = _ref.theme;
  if (mode === "display") return;
  return "\n      color: ".concat(mode === "edit" ? theme.palette.primary.dark : theme.palette.error.dark, ";\n      background-color: ").concat(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["lighten"])(mode === "edit" ? theme.palette.primary.light : theme.palette.error.light, 0.75), "\n    ");
});
var CaptionWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"].div.withConfig({
  displayName: "DashboardCardTitleToolbar__CaptionWrapper",
  componentId: "sc-11kznze-1"
})(["flex:1;"]);
var EntryTitleWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"].div.withConfig({
  displayName: "DashboardCardTitleToolbar__EntryTitleWrapper",
  componentId: "sc-11kznze-2"
})(["display:flex;align-items:center;> *:first-child{margin-right:", "px;color:#757575;}> *:nth-child(3){margin-left:", "px;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.unit;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.unit * 2;
});

var _StyledTypography = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_muiComponents__WEBPACK_IMPORTED_MODULE_6__["Typography"])(_templateObject(), _adminTypography__WEBPACK_IMPORTED_MODULE_5__["cardTitleStyle"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardCard/index.ts":
/*!************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardCard/index.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardCard */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCard", function() { return _DashboardCard__WEBPACK_IMPORTED_MODULE_0__["DashboardCard"]; });

/* harmony import */ var _DashboardCardColumnType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardCardColumnType */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardColumnType.ts");
/* harmony import */ var _DashboardCardColumnType__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DashboardCardColumnType__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DashboardCardColumnType__WEBPACK_IMPORTED_MODULE_1__) if(["DashboardCard","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DashboardCardColumnType__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DashboardCardItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DashboardCardItem */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardItem.ts");
/* harmony import */ var _DashboardCardItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DashboardCardItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DashboardCardItem__WEBPACK_IMPORTED_MODULE_2__) if(["DashboardCard","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DashboardCardItem__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DashboardCardItemColumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardCardItemColumn */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardItemColumn.ts");
/* harmony import */ var _DashboardCardItemColumn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_DashboardCardItemColumn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DashboardCardItemColumn__WEBPACK_IMPORTED_MODULE_3__) if(["DashboardCard","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DashboardCardItemColumn__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardCardModeContext */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardModeContext.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardModeProvider", function() { return _DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_4__["DashboardCardModeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardModeConsumer", function() { return _DashboardCardModeContext__WEBPACK_IMPORTED_MODULE_4__["DashboardCardModeConsumer"]; });

/* harmony import */ var _DashboardCardPagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DashboardCardPagination */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPagination.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardPagination", function() { return _DashboardCardPagination__WEBPACK_IMPORTED_MODULE_5__["DashboardCardPagination"]; });

/* harmony import */ var _DashboardCardPaginationHeaderToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DashboardCardPaginationHeaderToolbar */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardPaginationHeaderToolbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardPaginationHeaderToolbar", function() { return _DashboardCardPaginationHeaderToolbar__WEBPACK_IMPORTED_MODULE_6__["DashboardCardPaginationHeaderToolbar"]; });

/* harmony import */ var _DashboardCardTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DashboardCardTable */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardTable", function() { return _DashboardCardTable__WEBPACK_IMPORTED_MODULE_7__["DashboardCardTable"]; });

/* harmony import */ var _DashboardCardTitleToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DashboardCardTitleToolbar */ "../../node_modules/@join-uniform/components/src/DashboardCard/DashboardCardTitleToolbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardCardTitleToolbar", function() { return _DashboardCardTitleToolbar__WEBPACK_IMPORTED_MODULE_8__["DashboardCardTitleToolbar"]; });











/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardTableRow/DashboardTableRow.tsx":
/*!*****************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardTableRow/DashboardTableRow.tsx ***!
  \*****************************************************************************************************************************/
/*! exports provided: DashboardTableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTableRow", function() { return DashboardTableRow; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardTableRow/DashboardTableRow.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var DashboardTableRow = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, props, {
    classes: {
      selected: "selected"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
}).withConfig({
  displayName: "DashboardTableRow",
  componentId: "sc-15nyiky-0"
})(["&:nth-of-type(odd){background-color:", ";}&.selected{background-color:rgba(0,0,0,0.07);}td{border:none;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.palette.background.default;
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DashboardTableRow/index.ts":
/*!****************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DashboardTableRow/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: DashboardTableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashboardTableRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardTableRow */ "../../node_modules/@join-uniform/components/src/DashboardTableRow/DashboardTableRow.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardTableRow", function() { return _DashboardTableRow__WEBPACK_IMPORTED_MODULE_0__["DashboardTableRow"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DraggableList/DraggableList.tsx":
/*!*********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DraggableList/DraggableList.tsx ***!
  \*********************************************************************************************************************/
/*! exports provided: arrayMove, DraggableList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableList", function() { return DraggableList; });
/* harmony import */ var _join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/icons */ "../../node_modules/@join-uniform/icons/src/index.ts");
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sortable-hoc */ "react-sortable-hoc");
/* harmony import */ var react_sortable_hoc__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayMove", function() { return react_sortable_hoc__WEBPACK_IMPORTED_MODULE_3__["arrayMove"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Grid */ "../../node_modules/@join-uniform/components/src/Grid/index.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DraggableList/DraggableList.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var DraggableListBase = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_3__["SortableContainer"])(function (props) {
  var itemElements = props.itemElements,
      onRemoveButtonClick = props.onRemoveButtonClick;
  var draggableItemElements = itemElements.map(function (itemElement, index) {
    var key = itemElement.key || index;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DraggableListItem, {
      key: key,
      index: index,
      itemIndex: index,
      onRemoveButtonClick: onRemoveButtonClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, itemElement);
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, draggableItemElements);
});
function DraggableList(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DraggableListBase, _extends({}, props, {
    useDragHandle: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
}
var DraggableListItem = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_3__["SortableElement"])(function (props) {
  var children = props.children,
      itemIndex = props.itemIndex,
      onRemoveButtonClick = props.onRemoveButtonClick;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    direction: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DragHandle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__["RemoveIcon"], {
    onClick: function onClick() {
      return onRemoveButtonClick(itemIndex);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, children));
});
var DragHandleIconButton = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__["DragHandleIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }));
}).withConfig({
  displayName: "DraggableList__DragHandleIconButton",
  componentId: "jrp2v5-0"
})(["cursor:grab;"]);
var DragHandle = Object(react_sortable_hoc__WEBPACK_IMPORTED_MODULE_3__["SortableHandle"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DragHandleIconButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }));
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/DraggableList/index.ts":
/*!************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/DraggableList/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: arrayMove, DraggableList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DraggableList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DraggableList */ "../../node_modules/@join-uniform/components/src/DraggableList/DraggableList.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayMove", function() { return _DraggableList__WEBPACK_IMPORTED_MODULE_0__["arrayMove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableList", function() { return _DraggableList__WEBPACK_IMPORTED_MODULE_0__["DraggableList"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Grid/Grid.tsx":
/*!***************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Grid/Grid.tsx ***!
  \***************************************************************************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          padding: ", ";\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}


var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Grid/Grid.tsx";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      width: 100%;\n      max-width: 1280px;\n      margin-left: auto;\n      margin-right: auto;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          padding: ", ";\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Grid = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(function (props) {
  var contentCenterProp = props.contentCenter,
      containerProp = props.container,
      storybookContainer = props.storybookContainer,
      rest = _objectWithoutProperties(props, ["contentCenter", "container", "storybookContainer"]);

  var contentCenter = !!contentCenterProp || !!storybookContainer;
  var container = !!containerProp || !!storybookContainer;

  if (contentCenter && !container) {
    throw new Error("The container prop must be set to true to use contentCenter.");
  }

  var element = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    container: container
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));

  if (contentCenter) {
    element = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_StyledDiv, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this,
      _css: storybookContainer ? "8px 8px" : "0px 0px"
    }, element);
  }

  return element;
}).withConfig({
  displayName: "Grid",
  componentId: "sc-1hx7cqt-0"
})(["", ";"], function (props) {
  return props.contentCenter && Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
});

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div")(_templateObject3(), function (p) {
  return p._css;
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Grid/index.ts":
/*!***************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Grid/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "../../node_modules/@join-uniform/components/src/Grid/Grid.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["Grid"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/GridHideable/GridHideable.tsx":
/*!*******************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/GridHideable/GridHideable.tsx ***!
  \*******************************************************************************************************************/
/*! exports provided: GridHideable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridHideable", function() { return GridHideable; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/createBreakpoints */ "@material-ui/core/styles/createBreakpoints");
/* harmony import */ var _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Grid */ "../../node_modules/@join-uniform/components/src/Grid/index.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/GridHideable/GridHideable.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






/**
 * Adds the functionality from Material UI's Hidden component. This allows using
 * the CSS only implementation alongside Grid.
 *
 * This provides a workaround for service side rendering.
 */
var GridHideable = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  var className = props.className,
      lgDown = props.lgDown,
      lgUp = props.lgUp,
      mdDown = props.mdDown,
      mdUp = props.mdUp,
      only = props.only,
      smDown = props.smDown,
      smUp = props.smUp,
      xlDown = props.xlDown,
      xlUp = props.xlUp,
      xsDown = props.xsDown,
      xsUp = props.xsUp,
      rest = _objectWithoutProperties(props, ["className", "lgDown", "lgUp", "mdDown", "mdUp", "only", "smDown", "smUp", "xlDown", "xlUp", "xsDown", "xsUp"]);

  var classNames = [];
  if (className) classNames.push(className); // tslint:disable-next-line:prefer-for-of

  for (var i = 0; i < _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__["keys"].length; i += 1) {
    var breakpoint = _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__["keys"][i];
    var breakpointUp = props["".concat(breakpoint, "Up")];
    var breakpointDown = props["".concat(breakpoint, "Down")]; // prettier-ignore

    if (breakpointUp) {
      classNames.push("hidden-".concat(breakpoint, "Up"));
    }

    if (breakpointDown) {
      classNames.push("hidden-".concat(breakpoint, "Down"));
    }

    if (only) {
      var onlyBreakpoints = Array.isArray(only) ? only : [only];
      onlyBreakpoints.forEach(function (b) {
        classNames.push("hidden-only-".concat(b));
      });
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], _extends({}, rest, {
    className: classNames.join(" "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
}).withConfig({
  displayName: "GridHideable",
  componentId: "sc-165mgzo-0"
})(["", ";"], _material_ui_core_styles_createBreakpoints__WEBPACK_IMPORTED_MODULE_1__["keys"].map(function (key) {
  return Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["css"])(["", "{&.hidden-only-", "{display:none;}}", "{&.hidden-", "Up{display:none;}}", "{&.hidden-", "Down{display:none;}}"], function (_ref) {
    var theme = _ref.theme;
    return theme.breakpoints.only(key);
  }, key, function (_ref2) {
    var theme = _ref2.theme;
    return theme.breakpoints.up(key);
  }, key, function (_ref3) {
    var theme = _ref3.theme;
    return theme.breakpoints.down(key);
  }, key);
}));

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/GridHideable/index.ts":
/*!***********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/GridHideable/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GridHideable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GridHideable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridHideable */ "../../node_modules/@join-uniform/components/src/GridHideable/GridHideable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHideable", function() { return _GridHideable__WEBPACK_IMPORTED_MODULE_0__["GridHideable"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Hidden/Hidden.tsx":
/*!*******************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Hidden/Hidden.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: Hidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return Hidden; });
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Hidden/Hidden.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function Hidden(props) {
  // Hopefully tree shake this away in production.
  if (true) {
    // Enforce usage of the "implementation" prop to avoid unexpected warning
    // when rehydrating from server side rendering.
    if (typeof props.implementation !== "string") {
      throw new Error("Implementation must be specified to prevent accidental issues with server side rendering.");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
}

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/Hidden/index.ts":
/*!*****************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/Hidden/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: Hidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hidden */ "../../node_modules/@join-uniform/components/src/Hidden/Hidden.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return _Hidden__WEBPACK_IMPORTED_MODULE_0__["Hidden"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/ImagePicker/ImagePicker.tsx":
/*!*****************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/ImagePicker/ImagePicker.tsx ***!
  \*****************************************************************************************************************/
/*! exports provided: ImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return ImagePicker; });
/* harmony import */ var _join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/icons */ "../../node_modules/@join-uniform/icons/src/index.ts");
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "../../node_modules/@join-uniform/components/src/Button/index.ts");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Grid */ "../../node_modules/@join-uniform/components/src/Grid/index.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/ImagePicker/ImagePicker.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .left-icon {\n    margin-right: ", "px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








/**
 * Provides an image picker component for use in the admin dashboard.
 */
function ImagePicker(props) {
  var uploadedImageUrl = props.uploadedImageUrl,
      previewImageUrl = props.previewImageUrl,
      title = props.title,
      onSelectButtonClick = props.onSelectButtonClick,
      onUploadButtonClick = props.onUploadButtonClick;
  var Wrapper = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    if (!uploadedImageUrl) return react__WEBPACK_IMPORTED_MODULE_2__["Fragment"];

    var Link = function Link(_ref) {
      var children = _ref.children;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: uploadedImageUrl,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, children);
    };

    return Link;
  }, [uploadedImageUrl]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LeftIconStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, previewImageUrl ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
    src: previewImageUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EmptyImageTexture, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    xs: true,
    container: true,
    direction: "column",
    justify: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onSelectButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__["CollectionsIcon"], {
    className: "left-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), "Select"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onUploadButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__["CloudUploadIcon"], {
    className: "left-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), "Upload"))));
}
var LeftIconStyle = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.unit;
});
var ImageWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"].div.withConfig({
  displayName: "ImagePicker__ImageWrapper",
  componentId: "jt357o-0"
})(["width:128px;height:128px;border:1px solid ", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
});
var EmptyImageTexture = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_0__["TextureIcon"]).withConfig({
  displayName: "ImagePicker__EmptyImageTexture",
  componentId: "jt357o-1"
})(["width:100%;height:100%;color:", ";"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.palette.type === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
});
var Image = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"].img.withConfig({
  displayName: "ImagePicker__Image",
  componentId: "jt357o-2"
})(["display:block;width:100%;height:100%;"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/ImagePicker/index.ts":
/*!**********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/ImagePicker/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImagePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImagePicker */ "../../node_modules/@join-uniform/components/src/ImagePicker/ImagePicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return _ImagePicker__WEBPACK_IMPORTED_MODULE_0__["ImagePicker"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/IndexCard/IndexCard.tsx":
/*!*************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/IndexCard/IndexCard.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: IndexCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexCard", function() { return IndexCard; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _adminTypography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminTypography */ "../../node_modules/@join-uniform/components/src/adminTypography.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/IndexCard/IndexCard.tsx";





function IndexCard(props) {
  var title = props.title,
      categories = props.categories,
      entryLogoUrl = props.entryLogoUrl,
      colorBlock = props.colorBlock,
      colorCategoryBackground = props.colorCategoryBackground,
      colorLogoBackground = props.colorLogoBackground,
      colorTitle = props.colorTitle;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    backgroundColor: colorBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerWrapper, {
    backgroundColor: colorBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EntryLogoImage, {
    backgroundColor: colorLogoBackground,
    src: entryLogoUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextSectionWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleTypography, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "mock test for:")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CategoryPillWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, categories.map(function (category, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CategoryPill, {
      key: index,
      backgroundColor: colorCategoryBackground,
      textColor: colorTitle,
      title: category,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    });
  })))));
}
var logoSizePixels = 128;
var blockWidthPixels = logoSizePixels + logoSizePixels / 2;
var verticalMargin = 50;
var mobileBreakpoint = "sm";
var Wrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "IndexCard__Wrapper",
  componentId: "sc-1catg0d-0"
})(["width:100%;padding:16px;background-color:", ";> *{max-width:1280px;margin:0 auto;}"], function (props) {
  return getLightBg(props.backgroundColor);
});
var InnerWrapper = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, props.children);
}).withConfig({
  displayName: "IndexCard__InnerWrapper",
  componentId: "sc-1catg0d-1"
})(["display:flex;padding-left:", "px;", ";"], logoSizePixels, function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      theme = _ref.theme;
  return "\n    background-image: linear-gradient(\n      to right,\n      ".concat(backgroundColor, ",\n      ").concat(backgroundColor, " ").concat(blockWidthPixels, "px,\n      ").concat(getLightBg(backgroundColor), " ").concat(blockWidthPixels, "px,\n      ").concat(getLightBg(backgroundColor), "\n    );\n\n    ").concat(theme.breakpoints.down(mobileBreakpoint), " {\n      flex-direction: column;\n      align-items: center;\n      padding-left: 0;\n      padding-top: ").concat(verticalMargin, "px;\n      background-image: linear-gradient(\n        to bottom,\n        ").concat(backgroundColor, ",\n        ").concat(backgroundColor, " ").concat(verticalMargin + logoSizePixels / 2, "px,\n        ").concat(getLightBg(backgroundColor), " ").concat(verticalMargin + logoSizePixels / 2, "px,\n        ").concat(getLightBg(backgroundColor), "\n      );\n    }\n  ");
});
var EntryLogoImage = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].img.withConfig({
  displayName: "IndexCard__EntryLogoImage",
  componentId: "sc-1catg0d-2"
})(["display:block;width:", "px;height:", "px;margin:", "px 0;background-color:", ";", "{margin:0;}"], logoSizePixels, logoSizePixels, verticalMargin, function (_ref2) {
  var backgroundColor = _ref2.backgroundColor;
  return "".concat(backgroundColor);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.down(mobileBreakpoint);
});
var TextSectionWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "IndexCard__TextSectionWrapper",
  componentId: "sc-1catg0d-3"
})(["flex:1;display:flex;flex-direction:column;width:100%;padding:24px 0;margin-left:16px;", "{margin-left:0;}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoints.down(mobileBreakpoint);
});
var TitleWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "IndexCard__TitleWrapper",
  componentId: "sc-1catg0d-4"
})(["display:flex;align-items:baseline;margin-left:8px;margin-bottom:16px;>:first-child{margin-right:8px;}", "{flex-direction:column;align-items:center;margin-left:0;>:first-child{margin-right:0;}}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.down(mobileBreakpoint);
});
var TitleTypography = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["Typography"]).withConfig({
  displayName: "IndexCard__TitleTypography",
  componentId: "sc-1catg0d-5"
})(["", ";"], _adminTypography__WEBPACK_IMPORTED_MODULE_3__["cardTitleStyle"]);
var CategoryPillWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "IndexCard__CategoryPillWrapper",
  componentId: "sc-1catg0d-6"
})(["display:flex;flex-wrap:wrap;"]);
var CategoryPill = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (_ref6) {
  var className = _ref6.className,
      title = _ref6.title;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, title));
}).withConfig({
  displayName: "IndexCard__CategoryPill",
  componentId: "sc-1catg0d-7"
})(["width:calc(100% / 3 - 16px);padding:8px;margin:8px;border-radius:8px;background-color:", ";text-align:center;", "{width:calc(100% / 2 - 16px);}"], function (_ref7) {
  var backgroundColor = _ref7.backgroundColor;
  return backgroundColor;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.breakpoints.down(mobileBreakpoint);
});

function getLightBg(color) {
  return Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(color, 0.4);
}

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/IndexCard/index.ts":
/*!********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/IndexCard/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: IndexCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexCard */ "../../node_modules/@join-uniform/components/src/IndexCard/IndexCard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexCard", function() { return _IndexCard__WEBPACK_IMPORTED_MODULE_0__["IndexCard"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LayoutDashboard/LayoutDashboard.tsx":
/*!*************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutDashboard/LayoutDashboard.tsx ***!
  \*************************************************************************************************************************/
/*! exports provided: LayoutDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDashboard", function() { return LayoutDashboard; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppDrawer */ "../../node_modules/@join-uniform/components/src/AppDrawer/index.ts");
/* harmony import */ var _ResponsiveAppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResponsiveAppBar */ "../../node_modules/@join-uniform/components/src/LayoutDashboard/ResponsiveAppBar.tsx");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutDashboard/LayoutDashboard.tsx";




function LayoutDashboard(props) {
  var title = props.title,
      buttons = props.buttons,
      onLogoutButtonClick = props.onLogoutButtonClick,
      drawerTheme = props.drawerTheme,
      drawerLinks = props.drawerLinks,
      drawerLogoSrc = props.drawerLogoSrc,
      DrawerLinkComponent = props.DrawerLinkComponent;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppDrawer__WEBPACK_IMPORTED_MODULE_2__["AppDrawerContextProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResponsiveAppBar__WEBPACK_IMPORTED_MODULE_3__["ResponsiveAppBar"], {
    title: title,
    buttons: buttons,
    onLogoutButtonClick: onLogoutButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppDrawer__WEBPACK_IMPORTED_MODULE_2__["AppDrawer"], {
    theme: drawerTheme,
    links: drawerLinks,
    LinkComponent: DrawerLinkComponent,
    logoSrc: drawerLogoSrc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppBarSpacer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, props.children));
}
var ContentWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].main.withConfig({
  displayName: "LayoutDashboard__ContentWrapper",
  componentId: "aprro1-0"
})(["padding:16px 0;", "{margin-left:", "px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.breakpoints.up("md");
}, _AppDrawer__WEBPACK_IMPORTED_MODULE_2__["drawerWidth"]);
var AppBarSpacer = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "LayoutDashboard__AppBarSpacer",
  componentId: "aprro1-1"
})(["", ";"], _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["mixins"].toolbar);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LayoutDashboard/ResponsiveAppBar.tsx":
/*!**************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutDashboard/ResponsiveAppBar.tsx ***!
  \**************************************************************************************************************************/
/*! exports provided: ResponsiveAppBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveAppBar", function() { return ResponsiveAppBar; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppBar */ "../../node_modules/@join-uniform/components/src/AppBar/index.ts");
/* harmony import */ var _AppDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AppDrawer */ "../../node_modules/@join-uniform/components/src/AppDrawer/index.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutDashboard/ResponsiveAppBar.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ResponsiveAppBar = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (props) {
  var _useAppDrawerContext = Object(_AppDrawer__WEBPACK_IMPORTED_MODULE_3__["useAppDrawerContext"])(),
      toggle = _useAppDrawerContext.toggle;

  var className = props.className,
      rest = _objectWithoutProperties(props, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AppBar__WEBPACK_IMPORTED_MODULE_2__["AppBar"], _extends({}, rest, {
    onDrawerToggleButtonClick: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
}).withConfig({
  displayName: "ResponsiveAppBar",
  componentId: "sc-1v3jinw-0"
})(["position:fixed;width:100%;z-index:", ";", "{width:calc(100% - ", "px);margin-left:", "px;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.zIndex.appBar;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.breakpoints.up("md");
}, _AppDrawer__WEBPACK_IMPORTED_MODULE_3__["drawerWidth"], _AppDrawer__WEBPACK_IMPORTED_MODULE_3__["drawerWidth"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LayoutDashboard/index.ts":
/*!**************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutDashboard/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LayoutDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutDashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutDashboard */ "../../node_modules/@join-uniform/components/src/LayoutDashboard/LayoutDashboard.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDashboard", function() { return _LayoutDashboard__WEBPACK_IMPORTED_MODULE_0__["LayoutDashboard"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LayoutLanding/LayoutLanding.tsx":
/*!*********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutLanding/LayoutLanding.tsx ***!
  \*********************************************************************************************************************/
/*! exports provided: LayoutLanding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutLanding", function() { return LayoutLanding; });
/* harmony import */ var _join_uniform_localization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/localization */ "../../node_modules/@join-uniform/localization/src/index.tsx");
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Grid */ "../../node_modules/@join-uniform/components/src/Grid/index.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutLanding/LayoutLanding.tsx";





function LayoutLanding(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PageContentsWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FooterWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["DarkTheme"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "caption",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, _join_uniform_localization__WEBPACK_IMPORTED_MODULE_0__["strings"].landingFooter))));
}
var Wrapper = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"]).attrs(function () {
  return {
    container: true,
    direction: "column",
    wrap: "nowrap"
  };
}).withConfig({
  displayName: "LayoutLanding__Wrapper",
  componentId: "sc-1w9dq5u-0"
})(["height:100%;"]);
var PageContentsWrapper = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"]).attrs(function () {
  return {
    item: true,
    xs: true
  };
}).withConfig({
  displayName: "LayoutLanding__PageContentsWrapper",
  componentId: "sc-1w9dq5u-1"
})([""]);
var FooterWrapper = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["styled"])(_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"]).attrs(function () {
  return {
    component: "footer",
    item: true,
    container: true,
    justify: "center",
    alignItems: "center"
  };
}).withConfig({
  displayName: "LayoutLanding__FooterWrapper",
  componentId: "sc-1w9dq5u-2"
})(["flex-shrink:0;height:40px;background-color:#333333;"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LayoutLanding/index.ts":
/*!************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LayoutLanding/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: LayoutLanding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutLanding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutLanding */ "../../node_modules/@join-uniform/components/src/LayoutLanding/LayoutLanding.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutLanding", function() { return _LayoutLanding__WEBPACK_IMPORTED_MODULE_0__["LayoutLanding"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LoadingSpinner/LoadingSpinner.tsx":
/*!***********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LoadingSpinner/LoadingSpinner.tsx ***!
  \***********************************************************************************************************************/
/*! exports provided: LoadingSpinnerProvider, LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerProvider", function() { return LoadingSpinnerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return LoadingSpinner; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LoadingSpinner/LoadingSpinner.tsx";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var LoadingSpinnerContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])(null);
/**
 * Provides the configuration for instances of LoadingSpinner.
 */

function LoadingSpinnerProvider(props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  var value = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return rest;
  }, [rest.transitionDelay, rest.src1_0x, rest.src1_5x, rest.src2_0x]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LoadingSpinnerContext.Provider, {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, children);
}

/**
 * Displays a loading spinner with the configured image and animation delay. The
 * spinner must be configured through the use of a LoadingSpinnerProvider. The
 * configuration is passed through the tree using React Context.
 */
function LoadingSpinner(props) {
  var noTransitionDelay = props.noTransitionDelay;
  var context = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(LoadingSpinnerContext);

  if (!context) {
    throw new Error("LoadingSpinner was used without a corresponding context provider.");
  }

  var transitionDelayContext = context.transitionDelay,
      src1_0x = context.src1_0x,
      src1_5x = context.src1_5x,
      src2_0x = context.src2_0x;
  var srcSet = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return "".concat(src1_0x, ", ").concat(src1_5x, " 1.5x, ").concat(src2_0x, " 2.0x");
  }, [src1_0x, src1_5x, src2_0x]);
  var transitionDelay = noTransitionDelay ? 0 : transitionDelayContext;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    in: true,
    unmountOnExit: true,
    style: {
      transitionDelay: "".concat(transitionDelay, "ms")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InnerWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(LogoImage, {
    alt: "",
    src: src1_0x,
    srcSet: srcSet,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledCircularProgress, {
    size: 120,
    thickness: 1.2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))));
}
var Wrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "LoadingSpinner__Wrapper",
  componentId: "sc-7x5uhg-0"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;"]);
var InnerWrapper = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "LoadingSpinner__InnerWrapper",
  componentId: "sc-7x5uhg-1"
})(["position:relative;width:120px;height:120px;"]);
var LogoImage = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "LoadingSpinner__LogoImage",
  componentId: "sc-7x5uhg-2"
})(["position:absolute;width:72px;height:72px;left:50%;top:50%;transform:translate(-50%,-50%);"]);
var StyledCircularProgress = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "LoadingSpinner__StyledCircularProgress",
  componentId: "sc-7x5uhg-3"
})(["width:120px;height:120px;"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LoadingSpinner/index.ts":
/*!*************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LoadingSpinner/index.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LoadingSpinnerProvider, LoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSpinner */ "../../node_modules/@join-uniform/components/src/LoadingSpinner/LoadingSpinner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerProvider", function() { return _LoadingSpinner__WEBPACK_IMPORTED_MODULE_0__["LoadingSpinnerProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return _LoadingSpinner__WEBPACK_IMPORTED_MODULE_0__["LoadingSpinner"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LogoText/LogoText.tsx":
/*!***********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LogoText/LogoText.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: LogoText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoText", function() { return LogoText; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LogoText/LogoText.tsx";



var LogoText = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"])(function (_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: className,
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Join\xA0"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Uniform"));
}).withConfig({
  displayName: "LogoText",
  componentId: "sc-16ycznx-0"
})(["font-size:22px;font-weight:700;line-height:27px;> span{color:", ";}", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.palette.secondary.main;
}, function (props) {
  return props.variant === "split-color" && Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["css"])(["> span:last-child{color:", ";}"], function (_ref3) {
    var theme = _ref3.theme;
    return theme.palette.primary.main;
  });
});

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/LogoText/index.ts":
/*!*******************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/LogoText/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LogoText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogoText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoText */ "../../node_modules/@join-uniform/components/src/LogoText/LogoText.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoText", function() { return _LogoText__WEBPACK_IMPORTED_MODULE_0__["LogoText"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/PendingChangesButton/PendingChangesButton.tsx":
/*!***********************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/PendingChangesButton/PendingChangesButton.tsx ***!
  \***********************************************************************************************************************************/
/*! exports provided: PendingChangesButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingChangesButton", function() { return PendingChangesButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_uniform_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/icons */ "../../node_modules/@join-uniform/icons/src/index.ts");
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "../../node_modules/@join-uniform/components/src/Button/index.ts");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Grid */ "../../node_modules/@join-uniform/components/src/Grid/index.ts");
/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Hidden */ "../../node_modules/@join-uniform/components/src/Hidden/index.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              margin-right: -8px;\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}


var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/PendingChangesButton/PendingChangesButton.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n              margin-right: -8px;\n            "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










/**
 * A pending changes button with discard and publish buttons for use in the
 * admin dashboard app bar.
 */
function PendingChangesButton(props) {
  var hasPublishableChanges = props.hasPublishableChanges,
      hasDiscardableChanges = props.hasDiscardableChanges,
      onPublishButtonClick = props.onPublishButtonClick,
      onDiscardButtonClick = props.onDiscardButtonClick;
  if (!hasDiscardableChanges) return null;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 8,
    alignItems: "center",
    wrap: "nowrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    xsDown: true,
    mdUp: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    variant: "caption",
    style: {
      whiteSpace: "nowrap"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Pending changes"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    smDown: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "contained",
    color: "primary",
    disabled: !hasPublishableChanges,
    onClick: onPublishButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Publish changes")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    mdUp: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_StyledIconButton, {
    color: "primary",
    disabled: !hasPublishableChanges,
    onClick: onPublishButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_1__["CheckboxMarkedCircleOutlineIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Grid__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    smDown: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    variant: "outlined",
    color: "primary",
    onClick: onDiscardButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Discard all")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_7__["Hidden"], {
    mdUp: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "primary",
    onClick: onDiscardButtonClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_join_uniform_icons__WEBPACK_IMPORTED_MODULE_1__["CloseCircleOutlineIcon"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })))));
}

var _StyledIconButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a)(_templateObject2());

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/PendingChangesButton/index.ts":
/*!*******************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/PendingChangesButton/index.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: PendingChangesButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PendingChangesButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PendingChangesButton */ "../../node_modules/@join-uniform/components/src/PendingChangesButton/PendingChangesButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PendingChangesButton", function() { return _PendingChangesButton__WEBPACK_IMPORTED_MODULE_0__["PendingChangesButton"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/ResponsiveIconTextButton/ResponsiveIconTextButton.tsx":
/*!*******************************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/ResponsiveIconTextButton/ResponsiveIconTextButton.tsx ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ResponsiveIconTextButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveIconTextButton", function() { return ResponsiveIconTextButton; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "../../node_modules/@join-uniform/components/src/Button/index.ts");
/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hidden */ "../../node_modules/@join-uniform/components/src/Hidden/index.ts");
/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/ResponsiveIconTextButton/ResponsiveIconTextButton.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







/**
 * A button for use on app-bars and toolbars. Its purpose is to provide a button
 * which contains an icon and description text. On mobile viewport, the
 * description text is hidden to preserve horizontal space. It provides a
 * tooltip on hover on viewports above "xs".
 *
 * Uses the "text" button variant by default.
 */
function ResponsiveIconTextButton(props) {
  var children = props.children,
      iconNode = props.iconNode,
      tooltipTitle = props.tooltipTitle,
      rest = _objectWithoutProperties(props, ["children", "iconNode", "tooltipTitle"]);

  var MaybeTooltip = tooltipTitle ? _muiComponents__WEBPACK_IMPORTED_MODULE_4__["Tooltip"] : react__WEBPACK_IMPORTED_MODULE_1__["Fragment"];

  var className = rest.className,
      color = rest.color,
      component = rest.component,
      iconProps = _objectWithoutProperties(rest, ["className", "color", "component"]);

  var buttonProps = rest;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    smUp: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_muiComponents__WEBPACK_IMPORTED_MODULE_4__["IconButton"], _extends({}, iconProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), iconNode)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Hidden__WEBPACK_IMPORTED_MODULE_3__["Hidden"], {
    xsDown: true,
    implementation: "css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MaybeTooltip, {
    title: tooltipTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({
    variant: "text"
  }, buttonProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), iconNode, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconRightMargin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), children))));
}
var IconRightMargin = _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["styled"].div.withConfig({
  displayName: "ResponsiveIconTextButton__IconRightMargin",
  componentId: "sc-1loegka-0"
})(["margin-right:8px;"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/ResponsiveIconTextButton/index.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/ResponsiveIconTextButton/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ResponsiveIconTextButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResponsiveIconTextButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveIconTextButton */ "../../node_modules/@join-uniform/components/src/ResponsiveIconTextButton/ResponsiveIconTextButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveIconTextButton", function() { return _ResponsiveIconTextButton__WEBPACK_IMPORTED_MODULE_0__["ResponsiveIconTextButton"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/SubmissionProgressDialog/SubmissionProgressDialog.tsx":
/*!*******************************************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/SubmissionProgressDialog/SubmissionProgressDialog.tsx ***!
  \*******************************************************************************************************************************************/
/*! exports provided: SubmissionProgressDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionProgressDialog", function() { return SubmissionProgressDialog; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LoadingSpinner */ "../../node_modules/@join-uniform/components/src/LoadingSpinner/index.ts");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          display: flex;\n          align-items: center;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}



var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/SubmissionProgressDialog/SubmissionProgressDialog.tsx";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          display: flex;\n          align-items: center;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        .paper {\n          width: 200px;\n          height: 200px;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






function SubmissionProgressDialog(props) {
  var open = props.open;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_StyledDialog, {
    open: open,
    classes: {
      paper: "paper"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_StyledDialogContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["LoadingSpinner"], {
    noTransitionDelay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
}

var _StyledDialog = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "SubmissionProgressDialog___StyledDialog",
  componentId: "sc-12pil5c-0"
})([".paper{width:200px;height:200px;}"]);

var _StyledDialogContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3___default.a)(_templateObject3());

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/SubmissionProgressDialog/index.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/SubmissionProgressDialog/index.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SubmissionProgressDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionProgressDialog */ "../../node_modules/@join-uniform/components/src/SubmissionProgressDialog/SubmissionProgressDialog.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionProgressDialog", function() { return _SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_0__["SubmissionProgressDialog"]; });



/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/adminTypography.ts":
/*!********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/adminTypography.ts ***!
  \********************************************************************************************************/
/*! exports provided: cardTitleStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitleStyle", function() { return cardTitleStyle; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");

var cardTitleStyle = Object(_join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["css"])(["font-size:18px;font-weight:500;"]);

/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/index.ts":
/*!**********************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/index.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../../node_modules/@join-uniform/components/src/Button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["colors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "../../node_modules/@join-uniform/components/src/Card/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_1__["Card"]; });

/* harmony import */ var _CardActionArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardActionArea */ "../../node_modules/@join-uniform/components/src/CardActionArea/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardActionArea", function() { return _CardActionArea__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"]; });

/* harmony import */ var _CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardHeader */ "../../node_modules/@join-uniform/components/src/CardHeader/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return _CardHeader__WEBPACK_IMPORTED_MODULE_3__["CardHeader"]; });

/* harmony import */ var _DashboardCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DashboardCard */ "../../node_modules/@join-uniform/components/src/DashboardCard/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DashboardCard__WEBPACK_IMPORTED_MODULE_4__) if(["colors","Button","Card","CardActionArea","CardHeader","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DashboardCard__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _DraggableList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DraggableList */ "../../node_modules/@join-uniform/components/src/DraggableList/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayMove", function() { return _DraggableList__WEBPACK_IMPORTED_MODULE_5__["arrayMove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DraggableList", function() { return _DraggableList__WEBPACK_IMPORTED_MODULE_5__["DraggableList"]; });

/* harmony import */ var _Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hidden */ "../../node_modules/@join-uniform/components/src/Hidden/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hidden", function() { return _Hidden__WEBPACK_IMPORTED_MODULE_6__["Hidden"]; });

/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Grid */ "../../node_modules/@join-uniform/components/src/Grid/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_7__["Grid"]; });

/* harmony import */ var _GridHideable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GridHideable */ "../../node_modules/@join-uniform/components/src/GridHideable/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridHideable", function() { return _GridHideable__WEBPACK_IMPORTED_MODULE_8__["GridHideable"]; });

/* harmony import */ var _ImagePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImagePicker */ "../../node_modules/@join-uniform/components/src/ImagePicker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return _ImagePicker__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"]; });

/* harmony import */ var _IndexCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IndexCard */ "../../node_modules/@join-uniform/components/src/IndexCard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexCard", function() { return _IndexCard__WEBPACK_IMPORTED_MODULE_10__["IndexCard"]; });

/* harmony import */ var _LayoutDashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LayoutDashboard */ "../../node_modules/@join-uniform/components/src/LayoutDashboard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDashboard", function() { return _LayoutDashboard__WEBPACK_IMPORTED_MODULE_11__["LayoutDashboard"]; });

/* harmony import */ var _LayoutLanding__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LayoutLanding */ "../../node_modules/@join-uniform/components/src/LayoutLanding/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutLanding", function() { return _LayoutLanding__WEBPACK_IMPORTED_MODULE_12__["LayoutLanding"]; });

/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoadingSpinner */ "../../node_modules/@join-uniform/components/src/LoadingSpinner/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerProvider", function() { return _LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__["LoadingSpinnerProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinner", function() { return _LoadingSpinner__WEBPACK_IMPORTED_MODULE_13__["LoadingSpinner"]; });

/* harmony import */ var _LogoText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LogoText */ "../../node_modules/@join-uniform/components/src/LogoText/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogoText", function() { return _LogoText__WEBPACK_IMPORTED_MODULE_14__["LogoText"]; });

/* harmony import */ var _PendingChangesButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PendingChangesButton */ "../../node_modules/@join-uniform/components/src/PendingChangesButton/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PendingChangesButton", function() { return _PendingChangesButton__WEBPACK_IMPORTED_MODULE_15__["PendingChangesButton"]; });

/* harmony import */ var _SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SubmissionProgressDialog */ "../../node_modules/@join-uniform/components/src/SubmissionProgressDialog/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionProgressDialog", function() { return _SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_16__["SubmissionProgressDialog"]; });

/* harmony import */ var _muiComponents__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./muiComponents */ "../../node_modules/@join-uniform/components/src/muiComponents.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardActions", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["CardActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["CardContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Checkbox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Divider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["FormControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControlLabel", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["FormControlLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["FormLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["IconButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["InputLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["MenuItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Paper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Popover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["RadioGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Switch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["TableBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableCell", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["TableCell"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableFooter", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["TableFooter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableHead", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["TableHead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TablePagination", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["TablePagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["TableRow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["TextField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return _muiComponents__WEBPACK_IMPORTED_MODULE_17__["Typography"]; });




















/***/ }),

/***/ "../../node_modules/@join-uniform/components/src/muiComponents.ts":
/*!******************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/components/src/muiComponents.ts ***!
  \******************************************************************************************************/
/*! exports provided: CardActions, CardContent, Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Icon, IconButton, Input, InputLabel, MenuItem, Paper, Popover, Radio, RadioGroup, Select, Switch, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow, TextField, Toolbar, Tooltip, Typography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CardActions", function() { return _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FormControlLabel", function() { return _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "@material-ui/core/FormLabel");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_9___default.a; });
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "InputLabel", function() { return _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_10___default.a; });
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_11___default.a; });
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_12___default.a; });
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_13___default.a; });
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Radio */ "@material-ui/core/Radio");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_14___default.a; });
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "@material-ui/core/RadioGroup");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_15___default.a; });
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_16___default.a; });
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_17___default.a; });
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_18___default.a; });
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TableBody", function() { return _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_19___default.a; });
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TableCell", function() { return _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_20___default.a; });
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "@material-ui/core/TableFooter");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_21__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TableFooter", function() { return _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_21___default.a; });
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_22__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TableHead", function() { return _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_22___default.a; });
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "@material-ui/core/TablePagination");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_23__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TablePagination", function() { return _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_23___default.a; });
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_24___default.a; });
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25___default.a; });
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_26__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_26___default.a; });
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_27__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_27___default.a; });
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28___default.a; });



























































/***/ }),

/***/ "../../node_modules/@join-uniform/icons/src/CheckboxMarkedCircleOutlineIcon.tsx":
/*!********************************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/icons/src/CheckboxMarkedCircleOutlineIcon.tsx ***!
  \********************************************************************************************************************/
/*! exports provided: CheckboxMarkedCircleOutlineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxMarkedCircleOutlineIcon", function() { return CheckboxMarkedCircleOutlineIcon; });
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/icons/src/CheckboxMarkedCircleOutlineIcon.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function CheckboxMarkedCircleOutlineIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/***/ }),

/***/ "../../node_modules/@join-uniform/icons/src/CloseCircleOutlineIcon.tsx":
/*!***********************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/icons/src/CloseCircleOutlineIcon.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: CloseCircleOutlineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseCircleOutlineIcon", function() { return CloseCircleOutlineIcon; });
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/icons/src/CloseCircleOutlineIcon.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function CloseCircleOutlineIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_0___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

/***/ }),

/***/ "../../node_modules/@join-uniform/icons/src/index.ts":
/*!*****************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/icons/src/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddIcon, CloudUploadIcon, CollectionsIcon, DashboardIcon, DeleteIcon, DoneIcon, DragHandleIcon, EditIcon, MenuIcon, PowerSettingsNewIcon, RemoveIcon, TextureIcon, CheckboxMarkedCircleOutlineIcon, CloseCircleOutlineIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "AddIcon", function() { return _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _CheckboxMarkedCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxMarkedCircleOutlineIcon */ "../../node_modules/@join-uniform/icons/src/CheckboxMarkedCircleOutlineIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxMarkedCircleOutlineIcon", function() { return _CheckboxMarkedCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_1__["CheckboxMarkedCircleOutlineIcon"]; });

/* harmony import */ var _CloseCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CloseCircleOutlineIcon */ "../../node_modules/@join-uniform/icons/src/CloseCircleOutlineIcon.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseCircleOutlineIcon", function() { return _CloseCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_2__["CloseCircleOutlineIcon"]; });

/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CloudUpload */ "@material-ui/icons/CloudUpload");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CloudUploadIcon", function() { return _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _material_ui_icons_Collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Collections */ "@material-ui/icons/Collections");
/* harmony import */ var _material_ui_icons_Collections__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Collections__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "CollectionsIcon", function() { return _material_ui_icons_Collections__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DashboardIcon", function() { return _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DeleteIcon", function() { return _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Done */ "@material-ui/icons/Done");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DoneIcon", function() { return _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/DragHandle */ "@material-ui/icons/DragHandle");
/* harmony import */ var _material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "DragHandleIcon", function() { return _material_ui_icons_DragHandle__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "EditIcon", function() { return _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_9___default.a; });
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a; });
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/PowerSettingsNew */ "@material-ui/icons/PowerSettingsNew");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PowerSettingsNewIcon", function() { return _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11___default.a; });
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Remove */ "@material-ui/icons/Remove");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "RemoveIcon", function() { return _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_12___default.a; });
/* harmony import */ var _material_ui_icons_Texture__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Texture */ "@material-ui/icons/Texture");
/* harmony import */ var _material_ui_icons_Texture__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Texture__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TextureIcon", function() { return _material_ui_icons_Texture__WEBPACK_IMPORTED_MODULE_13___default.a; });











 // prettier-ignore




/***/ }),

/***/ "../../node_modules/@join-uniform/localization/src/index.tsx":
/*!*************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/localization/src/index.tsx ***!
  \*************************************************************************************************/
/*! exports provided: strings, LocalizationContext, L */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationContext", function() { return LocalizationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-localization */ "react-localization");
/* harmony import */ var react_localization__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_localization__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations */ "../../node_modules/@join-uniform/localization/src/translations.ts");



var strings = new react_localization__WEBPACK_IMPORTED_MODULE_1___default.a(_translations__WEBPACK_IMPORTED_MODULE_2__["translations"]);
var LocalizationContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])("en"); // TODO: Subscribe to localization changes.

/**
 * Renders a localized string using the current localization language.
 */

function L(props) {
  var localizedString = props.localizedString;
  var language = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LocalizationContext);
  var text = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!localizedString.hi) return localizedString.en;
    return localizedString[language];
  }, [language]);
  return text;
}

/***/ }),

/***/ "../../node_modules/@join-uniform/localization/src/translations.ts":
/*!*******************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/localization/src/translations.ts ***!
  \*******************************************************************************************************/
/*! exports provided: translations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translations", function() { return translations; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// tslint:disable:no-object-literal-type-assertion
var localizedStrings = {
  landingFooter: {
    en: "Copyright : Eduphilic Consultancy Pvt Ltd 2018",
    hi: null
  }
};
var translations = Object.entries(localizedStrings).reduce(function (accumulator, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      localizedString = _ref2[1];

  var localizedStringKey = key;
  accumulator.en[localizedStringKey] = localizedString.en;

  if (localizedString.hi !== null) {
    accumulator.hi[localizedStringKey] = localizedString.hi;
  }

  return accumulator;
}, {
  en: {},
  hi: {}
});

/***/ }),

/***/ "../../node_modules/@join-uniform/theme/src/ThemeBaseline.tsx":
/*!**************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/ThemeBaseline.tsx ***!
  \**************************************************************************************************/
/*! exports provided: ThemeBaseline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeBaseline", function() { return ThemeBaseline; });
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ "../../node_modules/@join-uniform/theme/src/styledComponents.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/ThemeBaseline.tsx";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbody {\n  font-family: 'Montserrat', sans-serif;\n}\n\n/* Prevent iPhone page zoom on input selection. */\n@media screen and (-webkit-min-device-pixel-ratio: 0) and (max-device-width: 1024px) {\n  select,\n  textarea,\n  input {\n    font-size: 16px !important;\n  }\n}\n\n  html,\n  body {\n    height: 100%;\n  }\n\n  body,\n  #__next,\n  #root {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #__next,\n  #root {\n    flex: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ThemeBaseline = function ThemeBaseline(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RootGlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), children);
};
var RootGlobalStyle = Object(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/@join-uniform/theme/src/index.ts":
/*!*****************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/index.ts ***!
  \*****************************************************************************************/
/*! exports provided: lightTheme, LightTheme, DarkTheme, AdminAppDrawerTheme, UserAppDrawerTheme, styled, css, keyframes, ThemeProvider, createGlobalStyle, ServerStyleSheet, ThemeBaseline, mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeProviders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeProviders */ "../../node_modules/@join-uniform/theme/src/themeProviders.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return _themeProviders__WEBPACK_IMPORTED_MODULE_0__["lightTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightTheme", function() { return _themeProviders__WEBPACK_IMPORTED_MODULE_0__["LightTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkTheme", function() { return _themeProviders__WEBPACK_IMPORTED_MODULE_0__["DarkTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminAppDrawerTheme", function() { return _themeProviders__WEBPACK_IMPORTED_MODULE_0__["AdminAppDrawerTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAppDrawerTheme", function() { return _themeProviders__WEBPACK_IMPORTED_MODULE_0__["UserAppDrawerTheme"]; });

/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponents */ "../../node_modules/@join-uniform/theme/src/styledComponents.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styledComponents__WEBPACK_IMPORTED_MODULE_1__["styled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _styledComponents__WEBPACK_IMPORTED_MODULE_1__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return _styledComponents__WEBPACK_IMPORTED_MODULE_1__["keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _styledComponents__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return _styledComponents__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return _styledComponents__WEBPACK_IMPORTED_MODULE_1__["ServerStyleSheet"]; });

/* harmony import */ var _ThemeBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeBaseline */ "../../node_modules/@join-uniform/theme/src/ThemeBaseline.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeBaseline", function() { return _ThemeBaseline__WEBPACK_IMPORTED_MODULE_2__["ThemeBaseline"]; });

/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins */ "../../node_modules/@join-uniform/theme/src/mixins.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins__WEBPACK_IMPORTED_MODULE_3__["mixins"]; });






/***/ }),

/***/ "../../node_modules/@join-uniform/theme/src/mixins.ts":
/*!******************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/mixins.ts ***!
  \******************************************************************************************/
/*! exports provided: mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return mixins; });
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styledComponents */ "../../node_modules/@join-uniform/theme/src/styledComponents.ts");

var mixins = {
  gutters: function gutters() {
    var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object(_styledComponents__WEBPACK_IMPORTED_MODULE_0__["css"])(["padding-left:16px;padding-right:16px;", ";", "{padding-left:24px;padding-right:24px;", ";}"], styles.xs, function (_ref) {
      var theme = _ref.theme;
      return theme.breakpoints.up("sm");
    }, styles.sm);
  },
  toolbar: Object(_styledComponents__WEBPACK_IMPORTED_MODULE_0__["css"])(["min-height:56px;", " and (orientation:landscape){min-height:48px;}", "{min-height:64px;}"], function (_ref2) {
    var theme = _ref2.theme;
    return theme.breakpoints.up("xs");
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.breakpoints.up("sm");
  })
};

/***/ }),

/***/ "../../node_modules/@join-uniform/theme/src/styledComponents.ts":
/*!****************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/styledComponents.ts ***!
  \****************************************************************************************************/
/*! exports provided: styled, css, keyframes, ThemeProvider, createGlobalStyle, ServerStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return styled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This module re-exports Styled Components with our custom Material UI theme so
 * that autocompletion and typechecking works with TypeScript.
 *
 * @see https://www.styled-components.com/docs/api#define-a-theme-interface
 */
 // tslint:disable-next-line:no-duplicate-imports

var _ref = styled_components__WEBPACK_IMPORTED_MODULE_0__,
    styled = _ref.default,
    css = _ref.css,
    keyframes = _ref.keyframes,
    ThemeProvider = _ref.ThemeProvider,
    createGlobalStyle = _ref.createGlobalStyle,
    ServerStyleSheet = _ref.ServerStyleSheet;


/***/ }),

/***/ "../../node_modules/@join-uniform/theme/src/themeProviders.tsx":
/*!***************************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/themeProviders.tsx ***!
  \***************************************************************************************************/
/*! exports provided: lightTheme, LightTheme, DarkTheme, AdminAppDrawerTheme, UserAppDrawerTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightTheme", function() { return LightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkTheme", function() { return DarkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAppDrawerTheme", function() { return AdminAppDrawerTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAppDrawerTheme", function() { return UserAppDrawerTheme; });
/* harmony import */ var _material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/MuiThemeProvider */ "@material-ui/core/styles/MuiThemeProvider");
/* harmony import */ var _material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ "../../node_modules/@join-uniform/theme/src/styledComponents.ts");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes */ "../../node_modules/@join-uniform/theme/src/themes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return _themes__WEBPACK_IMPORTED_MODULE_3__["lightTheme"]; });

var _jsxFileName = "/home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/themeProviders.tsx";





var LightTheme = createTheme("light");
var DarkTheme = createTheme("dark");
var AdminAppDrawerTheme = createTheme("adminAppDrawer");
var UserAppDrawerTheme = createTheme("userAppDrawer");

function createTheme(themeType) {
  var theme;

  switch (themeType) {
    case "light":
      theme = _themes__WEBPACK_IMPORTED_MODULE_3__["lightTheme"];
      break;

    case "dark":
      theme = _themes__WEBPACK_IMPORTED_MODULE_3__["darkTheme"];
      break;

    case "adminAppDrawer":
      theme = _themes__WEBPACK_IMPORTED_MODULE_3__["adminAppDrawerTheme"];
      break;

    case "userAppDrawer":
      theme = _themes__WEBPACK_IMPORTED_MODULE_3__["userAppDrawerTheme"];
      break;
  }

  return function (_ref) {
    var children = _ref.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles_MuiThemeProvider__WEBPACK_IMPORTED_MODULE_0___default.a, {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: theme,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, children));
  };
}

/***/ }),

/***/ "../../node_modules/@join-uniform/theme/src/themes.ts":
/*!******************************************************************************************!*\
  !*** /home/jason/code/clients/bhartitest/node_modules/@join-uniform/theme/src/themes.ts ***!
  \******************************************************************************************/
/*! exports provided: lightTheme, darkTheme, adminAppDrawerTheme, userAppDrawerTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightTheme", function() { return lightTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminAppDrawerTheme", function() { return adminAppDrawerTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAppDrawerTheme", function() { return userAppDrawerTheme; });
/* harmony import */ var _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/createMuiTheme */ "@material-ui/core/styles/createMuiTheme");
/* harmony import */ var _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This module provides overrides to the default theme of Material UI.
 *
 * @see https://material-ui-next.com/customization/default-theme/
 */

var theme = {
  palette: {
    background: {// default: "#fff",
    },
    primary: {
      main: "#2f8d2b" // green

    },
    secondary: {
      main: "#f9d017" // yellow

    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Montserrat', sans-serif"
  }
};
var lightTheme = _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({}, theme));
var darkTheme = _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({}, theme, {
  palette: _objectSpread({}, theme.palette, {
    type: "dark"
  })
}));
var adminAppDrawerTheme = _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({}, theme, {
  palette: _objectSpread({}, theme.palette, {
    background: {
      default: "#4f4f4f"
    },
    type: "dark"
  })
}));
var userAppDrawerTheme = _material_ui_core_styles_createMuiTheme__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread({}, theme, {
  palette: _objectSpread({}, theme.palette, {
    background: {
      default: "#03285b"
    },
    type: "dark"
  }),
  // Make portaled bottom navigation app bars have the same background color
  // as the bottom navigation swipe interface.
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: "#03285b !important"
      }
    }
  }
}));

/***/ }),

/***/ "./lib/client/generated.tsx":
/*!**********************************!*\
  !*** ./lib/client/generated.tsx ***!
  \**********************************/
/*! exports provided: EntryManagerCategoryPartsFragmentDoc, EntryManagerEntryPartsFragmentDoc, AdminLayoutDashboardContainerLogoUrlDocument, AdminLayoutDashboardContainerLogoUrlComponent, AdminLayoutDashboardContainerLogoUrlHOC, EntryManagerCreateCategoryDocument, EntryManagerCreateCategoryComponent, EntryManagerCreateCategoryHOC, EntryManagerCreateEntryDocument, EntryManagerCreateEntryComponent, EntryManagerCreateEntryHOC, EntryManagerDeleteCategoriesDocument, EntryManagerDeleteCategoriesComponent, EntryManagerDeleteCategoriesHOC, EntryManagerDeleteEntriesDocument, EntryManagerDeleteEntriesComponent, EntryManagerDeleteEntriesHOC, EntryManagerGetCategoryDocument, EntryManagerGetCategoryComponent, EntryManagerGetCategoryHOC, EntryManagerGetEntriesDocument, EntryManagerGetEntriesComponent, EntryManagerGetEntriesHOC, EntryManagerGetEntryDocument, EntryManagerGetEntryComponent, EntryManagerGetEntryHOC, EntryManagerSetCategoryActivationStatusesDocument, EntryManagerSetCategoryActivationStatusesComponent, EntryManagerSetCategoryActivationStatusesHOC, EntryManagerUpdateCategoryDocument, EntryManagerUpdateCategoryComponent, EntryManagerUpdateCategoryHOC, EntryManagerUpdateEntryDocument, EntryManagerUpdateEntryComponent, EntryManagerUpdateEntryHOC, IndexManagerGetIndexPageConfigDocument, IndexManagerGetIndexPageConfigComponent, IndexManagerGetIndexPageConfigHOC, IndexManagerUpdateIndexPageDocument, IndexManagerUpdateIndexPageComponent, IndexManagerUpdateIndexPageHOC, LandingGetIndexPageConfigDocument, LandingGetIndexPageConfigComponent, LandingGetIndexPageConfigHOC, WithHtmlSeoDocumentHtmlConfigDocument, WithHtmlSeoDocumentHtmlConfigComponent, WithHtmlSeoDocumentHtmlConfigHOC, WithLoadingSpinnerAppLogoConfigDocument, WithLoadingSpinnerAppLogoConfigComponent, WithLoadingSpinnerAppLogoConfigHOC, CloudinaryConfigDocument, CloudinaryConfigComponent, CloudinaryConfigHOC, CloudinaryGenerateMediaLibraryAuthenticationTokenDocument, CloudinaryGenerateMediaLibraryAuthenticationTokenComponent, CloudinaryGenerateMediaLibraryAuthenticationTokenHOC, CloudinaryGenerateSignatureDocument, CloudinaryGenerateSignatureComponent, CloudinaryGenerateSignatureHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCategoryPartsFragmentDoc", function() { return EntryManagerCategoryPartsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerEntryPartsFragmentDoc", function() { return EntryManagerEntryPartsFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutDashboardContainerLogoUrlDocument", function() { return AdminLayoutDashboardContainerLogoUrlDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutDashboardContainerLogoUrlComponent", function() { return AdminLayoutDashboardContainerLogoUrlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutDashboardContainerLogoUrlHOC", function() { return AdminLayoutDashboardContainerLogoUrlHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateCategoryDocument", function() { return EntryManagerCreateCategoryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateCategoryComponent", function() { return EntryManagerCreateCategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateCategoryHOC", function() { return EntryManagerCreateCategoryHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateEntryDocument", function() { return EntryManagerCreateEntryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateEntryComponent", function() { return EntryManagerCreateEntryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateEntryHOC", function() { return EntryManagerCreateEntryHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteCategoriesDocument", function() { return EntryManagerDeleteCategoriesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteCategoriesComponent", function() { return EntryManagerDeleteCategoriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteCategoriesHOC", function() { return EntryManagerDeleteCategoriesHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteEntriesDocument", function() { return EntryManagerDeleteEntriesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteEntriesComponent", function() { return EntryManagerDeleteEntriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteEntriesHOC", function() { return EntryManagerDeleteEntriesHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetCategoryDocument", function() { return EntryManagerGetCategoryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetCategoryComponent", function() { return EntryManagerGetCategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetCategoryHOC", function() { return EntryManagerGetCategoryHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntriesDocument", function() { return EntryManagerGetEntriesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntriesComponent", function() { return EntryManagerGetEntriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntriesHOC", function() { return EntryManagerGetEntriesHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntryDocument", function() { return EntryManagerGetEntryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntryComponent", function() { return EntryManagerGetEntryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntryHOC", function() { return EntryManagerGetEntryHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerSetCategoryActivationStatusesDocument", function() { return EntryManagerSetCategoryActivationStatusesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerSetCategoryActivationStatusesComponent", function() { return EntryManagerSetCategoryActivationStatusesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerSetCategoryActivationStatusesHOC", function() { return EntryManagerSetCategoryActivationStatusesHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateCategoryDocument", function() { return EntryManagerUpdateCategoryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateCategoryComponent", function() { return EntryManagerUpdateCategoryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateCategoryHOC", function() { return EntryManagerUpdateCategoryHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateEntryDocument", function() { return EntryManagerUpdateEntryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateEntryComponent", function() { return EntryManagerUpdateEntryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateEntryHOC", function() { return EntryManagerUpdateEntryHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexManagerGetIndexPageConfigDocument", function() { return IndexManagerGetIndexPageConfigDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexManagerGetIndexPageConfigComponent", function() { return IndexManagerGetIndexPageConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexManagerGetIndexPageConfigHOC", function() { return IndexManagerGetIndexPageConfigHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexManagerUpdateIndexPageDocument", function() { return IndexManagerUpdateIndexPageDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexManagerUpdateIndexPageComponent", function() { return IndexManagerUpdateIndexPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexManagerUpdateIndexPageHOC", function() { return IndexManagerUpdateIndexPageHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingGetIndexPageConfigDocument", function() { return LandingGetIndexPageConfigDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingGetIndexPageConfigComponent", function() { return LandingGetIndexPageConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingGetIndexPageConfigHOC", function() { return LandingGetIndexPageConfigHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithHtmlSeoDocumentHtmlConfigDocument", function() { return WithHtmlSeoDocumentHtmlConfigDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithHtmlSeoDocumentHtmlConfigComponent", function() { return WithHtmlSeoDocumentHtmlConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithHtmlSeoDocumentHtmlConfigHOC", function() { return WithHtmlSeoDocumentHtmlConfigHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLoadingSpinnerAppLogoConfigDocument", function() { return WithLoadingSpinnerAppLogoConfigDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLoadingSpinnerAppLogoConfigComponent", function() { return WithLoadingSpinnerAppLogoConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLoadingSpinnerAppLogoConfigHOC", function() { return WithLoadingSpinnerAppLogoConfigHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryConfigDocument", function() { return CloudinaryConfigDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryConfigComponent", function() { return CloudinaryConfigComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryConfigHOC", function() { return CloudinaryConfigHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateMediaLibraryAuthenticationTokenDocument", function() { return CloudinaryGenerateMediaLibraryAuthenticationTokenDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateMediaLibraryAuthenticationTokenComponent", function() { return CloudinaryGenerateMediaLibraryAuthenticationTokenComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateMediaLibraryAuthenticationTokenHOC", function() { return CloudinaryGenerateMediaLibraryAuthenticationTokenHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateSignatureDocument", function() { return CloudinaryGenerateSignatureDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateSignatureComponent", function() { return CloudinaryGenerateSignatureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateSignatureHOC", function() { return CloudinaryGenerateSignatureHOC; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/client/generated.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _unique = function _unique(definitions) {
  var names = {};
  return definitions.filter(function (definition) {
    if (definition.kind !== 'FragmentDefinition') {
      return true;
    }

    var name = definition.name.value;

    if (names[name]) {
      return false;
    } else {
      names[name] = true;
      return true;
    }
  });
};



// ====================================================
// Fragments
// ====================================================
var EntryManagerCategoryPartsFragmentDoc = {
  "kind": "Document",
  "definitions": [{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "EntryManagerCategoryParts"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Category"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "id"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "name"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "education"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "pricePerPaperRs"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "activated"
        },
        "arguments": [],
        "directives": []
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 129,
    "source": {
      "body": "\n    fragment EntryManagerCategoryParts on Category {\n  id\n  name\n  education\n  pricePerPaperRs\n  activated\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerEntryPartsFragmentDoc = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "FragmentDefinition",
    "name": {
      "kind": "Name",
      "value": "EntryManagerEntryParts"
    },
    "typeCondition": {
      "kind": "NamedType",
      "name": {
        "kind": "Name",
        "value": "Entry"
      }
    },
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "id"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "name"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "logoUrl"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "description"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "categories"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerCategoryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerCategoryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 157,
    "source": {
      "body": "\n    fragment EntryManagerEntryParts on Entry {\n  id\n  name\n  logoUrl\n  description\n  categories {\n    ...EntryManagerCategoryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
}; // ====================================================
// Components
// ====================================================

var AdminLayoutDashboardContainerLogoUrlDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "AdminLayoutDashboardContainerLogoUrl"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "logoConfig"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "url"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 98,
    "source": {
      "body": "\n    query AdminLayoutDashboardContainerLogoUrl {\n  logoConfig {\n    url\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var AdminLayoutDashboardContainerLogoUrlComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminLayoutDashboardContainerLogoUrlComponent, _React$Component);

  function AdminLayoutDashboardContainerLogoUrlComponent() {
    _classCallCheck(this, AdminLayoutDashboardContainerLogoUrlComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(AdminLayoutDashboardContainerLogoUrlComponent).apply(this, arguments));
  }

  _createClass(AdminLayoutDashboardContainerLogoUrlComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: AdminLayoutDashboardContainerLogoUrlDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 653
        },
        __self: this
      }));
    }
  }]);

  return AdminLayoutDashboardContainerLogoUrlComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function AdminLayoutDashboardContainerLogoUrlHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](AdminLayoutDashboardContainerLogoUrlDocument, operationOptions);
}
;
var EntryManagerCreateCategoryDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "EntryManagerCreateCategory"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "request"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "CreateCategoryRequest"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "createCategory"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "request"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "request"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerCategoryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerCategoryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 173,
    "source": {
      "body": "\n    mutation EntryManagerCreateCategory($request: CreateCategoryRequest!) {\n  createCategory(request: $request) {\n    ...EntryManagerCategoryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerCreateCategoryComponent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(EntryManagerCreateCategoryComponent, _React$Component2);

  function EntryManagerCreateCategoryComponent() {
    _classCallCheck(this, EntryManagerCreateCategoryComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerCreateCategoryComponent).apply(this, arguments));
  }

  _createClass(EntryManagerCreateCategoryComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: EntryManagerCreateCategoryDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 693
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerCreateCategoryComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerCreateCategoryHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerCreateCategoryDocument, operationOptions);
}
;
var EntryManagerCreateEntryDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "EntryManagerCreateEntry"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "request"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "CreateEntryRequest"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "createEntry"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "request"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "request"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerEntryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerEntryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 161,
    "source": {
      "body": "\n    mutation EntryManagerCreateEntry($request: CreateEntryRequest!) {\n  createEntry(request: $request) {\n    ...EntryManagerEntryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerCreateEntryComponent =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(EntryManagerCreateEntryComponent, _React$Component3);

  function EntryManagerCreateEntryComponent() {
    _classCallCheck(this, EntryManagerCreateEntryComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerCreateEntryComponent).apply(this, arguments));
  }

  _createClass(EntryManagerCreateEntryComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: EntryManagerCreateEntryDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 734
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerCreateEntryComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerCreateEntryHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerCreateEntryDocument, operationOptions);
}
;
var EntryManagerDeleteCategoriesDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "EntryManagerDeleteCategories"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "categoryIds"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "deleteCategories"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "categoryIds"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "categoryIds"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerCategoryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerCategoryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 173,
    "source": {
      "body": "\n    mutation EntryManagerDeleteCategories($categoryIds: [ID!]!) {\n  deleteCategories(categoryIds: $categoryIds) {\n    ...EntryManagerCategoryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerDeleteCategoriesComponent =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(EntryManagerDeleteCategoriesComponent, _React$Component4);

  function EntryManagerDeleteCategoriesComponent() {
    _classCallCheck(this, EntryManagerDeleteCategoriesComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerDeleteCategoriesComponent).apply(this, arguments));
  }

  _createClass(EntryManagerDeleteCategoriesComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: EntryManagerDeleteCategoriesDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 775
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerDeleteCategoriesComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerDeleteCategoriesHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerDeleteCategoriesDocument, operationOptions);
}
;
var EntryManagerDeleteEntriesDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "EntryManagerDeleteEntries"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "entryIds"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "deleteEntries"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "entryIds"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "entryIds"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerEntryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerEntryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 155,
    "source": {
      "body": "\n    mutation EntryManagerDeleteEntries($entryIds: [ID!]!) {\n  deleteEntries(entryIds: $entryIds) {\n    ...EntryManagerEntryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerDeleteEntriesComponent =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(EntryManagerDeleteEntriesComponent, _React$Component5);

  function EntryManagerDeleteEntriesComponent() {
    _classCallCheck(this, EntryManagerDeleteEntriesComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerDeleteEntriesComponent).apply(this, arguments));
  }

  _createClass(EntryManagerDeleteEntriesComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: EntryManagerDeleteEntriesDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 816
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerDeleteEntriesComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerDeleteEntriesHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerDeleteEntriesDocument, operationOptions);
}
;
var EntryManagerGetCategoryDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "EntryManagerGetCategory"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "id"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ID"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "categoriesByIds"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "ids"
          },
          "value": {
            "kind": "ListValue",
            "values": [{
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "id"
              }
            }]
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerCategoryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerCategoryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 137,
    "source": {
      "body": "\n    query EntryManagerGetCategory($id: ID!) {\n  categoriesByIds(ids: [$id]) {\n    ...EntryManagerCategoryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerGetCategoryComponent =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(EntryManagerGetCategoryComponent, _React$Component6);

  function EntryManagerGetCategoryComponent() {
    _classCallCheck(this, EntryManagerGetCategoryComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerGetCategoryComponent).apply(this, arguments));
  }

  _createClass(EntryManagerGetCategoryComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: EntryManagerGetCategoryDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 857
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerGetCategoryComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerGetCategoryHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerGetCategoryDocument, operationOptions);
}
;
var EntryManagerGetEntriesDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "EntryManagerGetEntries"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "entries"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerEntryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerEntryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 103,
    "source": {
      "body": "\n    query EntryManagerGetEntries {\n  entries {\n    ...EntryManagerEntryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerGetEntriesComponent =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(EntryManagerGetEntriesComponent, _React$Component7);

  function EntryManagerGetEntriesComponent() {
    _classCallCheck(this, EntryManagerGetEntriesComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerGetEntriesComponent).apply(this, arguments));
  }

  _createClass(EntryManagerGetEntriesComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: EntryManagerGetEntriesDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 897
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerGetEntriesComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerGetEntriesHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerGetEntriesDocument, operationOptions);
}
;
var EntryManagerGetEntryDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "EntryManagerGetEntry"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "entryId"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ID"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "entriesByIds"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "ids"
          },
          "value": {
            "kind": "ListValue",
            "values": [{
              "kind": "Variable",
              "name": {
                "kind": "Name",
                "value": "entryId"
              }
            }]
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerEntryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerEntryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 138,
    "source": {
      "body": "\n    query EntryManagerGetEntry($entryId: ID!) {\n  entriesByIds(ids: [$entryId]) {\n    ...EntryManagerEntryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerGetEntryComponent =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(EntryManagerGetEntryComponent, _React$Component8);

  function EntryManagerGetEntryComponent() {
    _classCallCheck(this, EntryManagerGetEntryComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerGetEntryComponent).apply(this, arguments));
  }

  _createClass(EntryManagerGetEntryComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: EntryManagerGetEntryDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 937
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerGetEntryComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerGetEntryHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerGetEntryDocument, operationOptions);
}
;
var EntryManagerSetCategoryActivationStatusesDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "EntryManagerSetCategoryActivationStatuses"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "categoryIds"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "activationStatuses"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "setCategoryActivationStatuses"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "categoryIds"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "categoryIds"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "activatedStatuses"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "activationStatuses"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerCategoryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerCategoryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 273,
    "source": {
      "body": "\n    mutation EntryManagerSetCategoryActivationStatuses($categoryIds: [ID!]!, $activationStatuses: [Boolean!]!) {\n  setCategoryActivationStatuses(categoryIds: $categoryIds, activatedStatuses: $activationStatuses) {\n    ...EntryManagerCategoryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerSetCategoryActivationStatusesComponent =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(EntryManagerSetCategoryActivationStatusesComponent, _React$Component9);

  function EntryManagerSetCategoryActivationStatusesComponent() {
    _classCallCheck(this, EntryManagerSetCategoryActivationStatusesComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerSetCategoryActivationStatusesComponent).apply(this, arguments));
  }

  _createClass(EntryManagerSetCategoryActivationStatusesComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: EntryManagerSetCategoryActivationStatusesDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 977
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerSetCategoryActivationStatusesComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerSetCategoryActivationStatusesHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerSetCategoryActivationStatusesDocument, operationOptions);
}
;
var EntryManagerUpdateCategoryDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "EntryManagerUpdateCategory"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "categoryId"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ID"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "update"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "UpdateCategoryRequest"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "updateCategory"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "categoryId"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "categoryId"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "update"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerCategoryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerCategoryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 213,
    "source": {
      "body": "\n    mutation EntryManagerUpdateCategory($categoryId: ID!, $update: UpdateCategoryRequest!) {\n  updateCategory(categoryId: $categoryId, update: $update) {\n    ...EntryManagerCategoryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerUpdateCategoryComponent =
/*#__PURE__*/
function (_React$Component10) {
  _inherits(EntryManagerUpdateCategoryComponent, _React$Component10);

  function EntryManagerUpdateCategoryComponent() {
    _classCallCheck(this, EntryManagerUpdateCategoryComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerUpdateCategoryComponent).apply(this, arguments));
  }

  _createClass(EntryManagerUpdateCategoryComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: EntryManagerUpdateCategoryDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1018
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerUpdateCategoryComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerUpdateCategoryHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerUpdateCategoryDocument, operationOptions);
}
;
var EntryManagerUpdateEntryDocument = {
  "kind": "Document",
  "definitions": _unique([{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "EntryManagerUpdateEntry"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "entryId"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ID"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "update"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "UpdateEntryRequest"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "updateEntry"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "entryId"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "entryId"
            }
          }
        }, {
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "update"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "FragmentSpread",
            "name": {
              "kind": "Name",
              "value": "EntryManagerEntryParts"
            },
            "directives": []
          }]
        }
      }]
    }
  }].concat(EntryManagerEntryPartsFragmentDoc.definitions)),
  "loc": {
    "start": 0,
    "end": 192,
    "source": {
      "body": "\n    mutation EntryManagerUpdateEntry($entryId: ID!, $update: UpdateEntryRequest!) {\n  updateEntry(entryId: $entryId, update: $update) {\n    ...EntryManagerEntryParts\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var EntryManagerUpdateEntryComponent =
/*#__PURE__*/
function (_React$Component11) {
  _inherits(EntryManagerUpdateEntryComponent, _React$Component11);

  function EntryManagerUpdateEntryComponent() {
    _classCallCheck(this, EntryManagerUpdateEntryComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntryManagerUpdateEntryComponent).apply(this, arguments));
  }

  _createClass(EntryManagerUpdateEntryComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: EntryManagerUpdateEntryDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1059
        },
        __self: this
      }));
    }
  }]);

  return EntryManagerUpdateEntryComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function EntryManagerUpdateEntryHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](EntryManagerUpdateEntryDocument, operationOptions);
}
;
var IndexManagerGetIndexPageConfigDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "IndexManagerGetIndexPageConfig"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "logoConfig"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "url"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "indexPageConfig"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroBackgroundImageUrl"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroBackgroundAlpha"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroPrimaryText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroFeatures"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroFooterText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutTitle"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutImages"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "imageUrl"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "title"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "text"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 337,
    "source": {
      "body": "\n    query IndexManagerGetIndexPageConfig {\n  logoConfig {\n    id\n    url\n  }\n  indexPageConfig {\n    id\n    heroBackgroundImageUrl\n    heroBackgroundAlpha\n    heroPrimaryText\n    heroFeatures\n    heroFooterText\n    aboutTitle\n    aboutText\n    aboutImages {\n      id\n      imageUrl\n      title\n      text\n    }\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var IndexManagerGetIndexPageConfigComponent =
/*#__PURE__*/
function (_React$Component12) {
  _inherits(IndexManagerGetIndexPageConfigComponent, _React$Component12);

  function IndexManagerGetIndexPageConfigComponent() {
    _classCallCheck(this, IndexManagerGetIndexPageConfigComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexManagerGetIndexPageConfigComponent).apply(this, arguments));
  }

  _createClass(IndexManagerGetIndexPageConfigComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: IndexManagerGetIndexPageConfigDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1117
        },
        __self: this
      }));
    }
  }]);

  return IndexManagerGetIndexPageConfigComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function IndexManagerGetIndexPageConfigHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](IndexManagerGetIndexPageConfigDocument, operationOptions);
}
;
var IndexManagerUpdateIndexPageDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "IndexManagerUpdateIndexPage"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "logoUrl"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "indexPageUpdate"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "UpdateIndexPageRequest"
          }
        }
      }
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "indexCardsUpdate"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "ListType",
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "UpdateIndexCardsRequest"
              }
            }
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "updateLogoUrl"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "logoUrl"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "logoUrl"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "url"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "updateIndexPage"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "request"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "indexPageUpdate"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroBackgroundImageUrl"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroBackgroundAlpha"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroPrimaryText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroFeatures"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutTitle"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutImages"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "imageUrl"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "title"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "text"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "updateIndexCards"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "request"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "indexCardsUpdate"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "categories"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "visible"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "title"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorBlock"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorCategoryBackground"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorLogoBackground"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorTitle"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "entryLogoUrl"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 694,
    "source": {
      "body": "\n    mutation IndexManagerUpdateIndexPage($logoUrl: String!, $indexPageUpdate: UpdateIndexPageRequest!, $indexCardsUpdate: [UpdateIndexCardsRequest!]!) {\n  updateLogoUrl(logoUrl: $logoUrl) {\n    id\n    url\n  }\n  updateIndexPage(request: $indexPageUpdate) {\n    id\n    heroBackgroundImageUrl\n    heroBackgroundAlpha\n    heroPrimaryText\n    heroFeatures\n    aboutTitle\n    aboutText\n    aboutImages {\n      id\n      imageUrl\n      title\n      text\n    }\n  }\n  updateIndexCards(request: $indexCardsUpdate) {\n    id\n    categories {\n      id\n      visible\n      title\n    }\n    colorBlock\n    colorCategoryBackground\n    colorLogoBackground\n    colorTitle\n    entryLogoUrl\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var IndexManagerUpdateIndexPageComponent =
/*#__PURE__*/
function (_React$Component13) {
  _inherits(IndexManagerUpdateIndexPageComponent, _React$Component13);

  function IndexManagerUpdateIndexPageComponent() {
    _classCallCheck(this, IndexManagerUpdateIndexPageComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(IndexManagerUpdateIndexPageComponent).apply(this, arguments));
  }

  _createClass(IndexManagerUpdateIndexPageComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: IndexManagerUpdateIndexPageDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1186
        },
        __self: this
      }));
    }
  }]);

  return IndexManagerUpdateIndexPageComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function IndexManagerUpdateIndexPageHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](IndexManagerUpdateIndexPageDocument, operationOptions);
}
;
var LandingGetIndexPageConfigDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "LandingGetIndexPageConfig"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "indexPageConfig"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroBackgroundImageUrl"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroBackgroundAlpha"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroPrimaryText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroFeatures"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "heroFooterText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutTitle"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutText"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "aboutImages"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "title"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "text"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "imageUrl"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }]
        }
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "logoConfig"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "url"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "indexCards"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "id"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "title"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "entryLogoUrl"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "categories"
            },
            "arguments": [],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "id"
                },
                "arguments": [],
                "directives": []
              }, {
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "title"
                },
                "arguments": [],
                "directives": []
              }]
            }
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorBlock"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorCategoryBackground"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorLogoBackground"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "colorTitle"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 511,
    "source": {
      "body": "\n    query LandingGetIndexPageConfig {\n  indexPageConfig {\n    id\n    heroBackgroundImageUrl\n    heroBackgroundAlpha\n    heroPrimaryText\n    heroFeatures\n    heroFooterText\n    aboutTitle\n    aboutText\n    aboutImages {\n      id\n      title\n      text\n      imageUrl\n    }\n  }\n  logoConfig {\n    id\n    url\n  }\n  indexCards {\n    id\n    title\n    entryLogoUrl\n    categories {\n      id\n      title\n    }\n    colorBlock\n    colorCategoryBackground\n    colorLogoBackground\n    colorTitle\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var LandingGetIndexPageConfigComponent =
/*#__PURE__*/
function (_React$Component14) {
  _inherits(LandingGetIndexPageConfigComponent, _React$Component14);

  function LandingGetIndexPageConfigComponent() {
    _classCallCheck(this, LandingGetIndexPageConfigComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(LandingGetIndexPageConfigComponent).apply(this, arguments));
  }

  _createClass(LandingGetIndexPageConfigComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: LandingGetIndexPageConfigDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1257
        },
        __self: this
      }));
    }
  }]);

  return LandingGetIndexPageConfigComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function LandingGetIndexPageConfigHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](LandingGetIndexPageConfigDocument, operationOptions);
}
;
var WithHtmlSeoDocumentHtmlConfigDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "WithHtmlSeoDocumentHtmlConfig"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "htmlConfig"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "googleAnalyticsId"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "metaKeywords"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "metaDescription"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "metaAuthor"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "metaAbstract"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "metaCopyright"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 192,
    "source": {
      "body": "\n    query WithHtmlSeoDocumentHtmlConfig {\n  htmlConfig {\n    googleAnalyticsId\n    metaKeywords\n    metaDescription\n    metaAuthor\n    metaAbstract\n    metaCopyright\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var WithHtmlSeoDocumentHtmlConfigComponent =
/*#__PURE__*/
function (_React$Component15) {
  _inherits(WithHtmlSeoDocumentHtmlConfigComponent, _React$Component15);

  function WithHtmlSeoDocumentHtmlConfigComponent() {
    _classCallCheck(this, WithHtmlSeoDocumentHtmlConfigComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(WithHtmlSeoDocumentHtmlConfigComponent).apply(this, arguments));
  }

  _createClass(WithHtmlSeoDocumentHtmlConfigComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: WithHtmlSeoDocumentHtmlConfigDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1302
        },
        __self: this
      }));
    }
  }]);

  return WithHtmlSeoDocumentHtmlConfigComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function WithHtmlSeoDocumentHtmlConfigHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](WithHtmlSeoDocumentHtmlConfigDocument, operationOptions);
}
;
var WithLoadingSpinnerAppLogoConfigDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "WithLoadingSpinnerAppLogoConfig"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "logoConfig"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "url"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 93,
    "source": {
      "body": "\n    query WithLoadingSpinnerAppLogoConfig {\n  logoConfig {\n    url\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var WithLoadingSpinnerAppLogoConfigComponent =
/*#__PURE__*/
function (_React$Component16) {
  _inherits(WithLoadingSpinnerAppLogoConfigComponent, _React$Component16);

  function WithLoadingSpinnerAppLogoConfigComponent() {
    _classCallCheck(this, WithLoadingSpinnerAppLogoConfigComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(WithLoadingSpinnerAppLogoConfigComponent).apply(this, arguments));
  }

  _createClass(WithLoadingSpinnerAppLogoConfigComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: WithLoadingSpinnerAppLogoConfigDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1342
        },
        __self: this
      }));
    }
  }]);

  return WithLoadingSpinnerAppLogoConfigComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function WithLoadingSpinnerAppLogoConfigHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](WithLoadingSpinnerAppLogoConfigDocument, operationOptions);
}
;
var CloudinaryConfigDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "CloudinaryConfig"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "cloudinaryCloudName"
        },
        "arguments": [],
        "directives": []
      }, {
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "cloudinaryApiKey"
        },
        "arguments": [],
        "directives": []
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 92,
    "source": {
      "body": "\n    query CloudinaryConfig {\n  cloudinaryCloudName\n  cloudinaryApiKey\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var CloudinaryConfigComponent =
/*#__PURE__*/
function (_React$Component17) {
  _inherits(CloudinaryConfigComponent, _React$Component17);

  function CloudinaryConfigComponent() {
    _classCallCheck(this, CloudinaryConfigComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloudinaryConfigComponent).apply(this, arguments));
  }

  _createClass(CloudinaryConfigComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: CloudinaryConfigDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1381
        },
        __self: this
      }));
    }
  }]);

  return CloudinaryConfigComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function CloudinaryConfigHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](CloudinaryConfigDocument, operationOptions);
}
;
var CloudinaryGenerateMediaLibraryAuthenticationTokenDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "CloudinaryGenerateMediaLibraryAuthenticationToken"
    },
    "variableDefinitions": [],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "generateCloudinaryMediaLibraryAuthenticationToken"
        },
        "arguments": [],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "api_key"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "cloud_name"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "signature"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "timestamp"
            },
            "arguments": [],
            "directives": []
          }, {
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "username"
            },
            "arguments": [],
            "directives": []
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 213,
    "source": {
      "body": "\n    mutation CloudinaryGenerateMediaLibraryAuthenticationToken {\n  generateCloudinaryMediaLibraryAuthenticationToken {\n    api_key\n    cloud_name\n    signature\n    timestamp\n    username\n  }\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var CloudinaryGenerateMediaLibraryAuthenticationTokenComponent =
/*#__PURE__*/
function (_React$Component18) {
  _inherits(CloudinaryGenerateMediaLibraryAuthenticationTokenComponent, _React$Component18);

  function CloudinaryGenerateMediaLibraryAuthenticationTokenComponent() {
    _classCallCheck(this, CloudinaryGenerateMediaLibraryAuthenticationTokenComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloudinaryGenerateMediaLibraryAuthenticationTokenComponent).apply(this, arguments));
  }

  _createClass(CloudinaryGenerateMediaLibraryAuthenticationTokenComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: CloudinaryGenerateMediaLibraryAuthenticationTokenDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1425
        },
        __self: this
      }));
    }
  }]);

  return CloudinaryGenerateMediaLibraryAuthenticationTokenComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function CloudinaryGenerateMediaLibraryAuthenticationTokenHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](CloudinaryGenerateMediaLibraryAuthenticationTokenDocument, operationOptions);
}
;
var CloudinaryGenerateSignatureDocument = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "mutation",
    "name": {
      "kind": "Name",
      "value": "CloudinaryGenerateSignature"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "paramsToSign"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Json"
          }
        }
      }
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "generateCloudinarySignature"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "paramsToSign"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "paramsToSign"
            }
          }
        }],
        "directives": []
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 146,
    "source": {
      "body": "\n    mutation CloudinaryGenerateSignature($paramsToSign: Json!) {\n  generateCloudinarySignature(paramsToSign: $paramsToSign)\n}\n    \n      \n    \n  ",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};
var CloudinaryGenerateSignatureComponent =
/*#__PURE__*/
function (_React$Component19) {
  _inherits(CloudinaryGenerateSignatureComponent, _React$Component19);

  function CloudinaryGenerateSignatureComponent() {
    _classCallCheck(this, CloudinaryGenerateSignatureComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CloudinaryGenerateSignatureComponent).apply(this, arguments));
  }

  _createClass(CloudinaryGenerateSignatureComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: CloudinaryGenerateSignatureDocument
      }, this['props'], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1464
        },
        __self: this
      }));
    }
  }]);

  return CloudinaryGenerateSignatureComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function CloudinaryGenerateSignatureHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](CloudinaryGenerateSignatureDocument, operationOptions);
}
;

/***/ }),

/***/ "./lib/client/index.ts":
/*!*****************************!*\
  !*** ./lib/client/index.ts ***!
  \*****************************/
/*! exports provided: EntryManagerCategoryPartsFragmentDoc, EntryManagerEntryPartsFragmentDoc, AdminLayoutDashboardContainerLogoUrlDocument, AdminLayoutDashboardContainerLogoUrlComponent, AdminLayoutDashboardContainerLogoUrlHOC, EntryManagerCreateCategoryDocument, EntryManagerCreateCategoryComponent, EntryManagerCreateCategoryHOC, EntryManagerCreateEntryDocument, EntryManagerCreateEntryComponent, EntryManagerCreateEntryHOC, EntryManagerDeleteCategoriesDocument, EntryManagerDeleteCategoriesComponent, EntryManagerDeleteCategoriesHOC, EntryManagerDeleteEntriesDocument, EntryManagerDeleteEntriesComponent, EntryManagerDeleteEntriesHOC, EntryManagerGetCategoryDocument, EntryManagerGetCategoryComponent, EntryManagerGetCategoryHOC, EntryManagerGetEntriesDocument, EntryManagerGetEntriesComponent, EntryManagerGetEntriesHOC, EntryManagerGetEntryDocument, EntryManagerGetEntryComponent, EntryManagerGetEntryHOC, EntryManagerSetCategoryActivationStatusesDocument, EntryManagerSetCategoryActivationStatusesComponent, EntryManagerSetCategoryActivationStatusesHOC, EntryManagerUpdateCategoryDocument, EntryManagerUpdateCategoryComponent, EntryManagerUpdateCategoryHOC, EntryManagerUpdateEntryDocument, EntryManagerUpdateEntryComponent, EntryManagerUpdateEntryHOC, IndexManagerGetIndexPageConfigDocument, IndexManagerGetIndexPageConfigComponent, IndexManagerGetIndexPageConfigHOC, IndexManagerUpdateIndexPageDocument, IndexManagerUpdateIndexPageComponent, IndexManagerUpdateIndexPageHOC, LandingGetIndexPageConfigDocument, LandingGetIndexPageConfigComponent, LandingGetIndexPageConfigHOC, WithHtmlSeoDocumentHtmlConfigDocument, WithHtmlSeoDocumentHtmlConfigComponent, WithHtmlSeoDocumentHtmlConfigHOC, WithLoadingSpinnerAppLogoConfigDocument, WithLoadingSpinnerAppLogoConfigComponent, WithLoadingSpinnerAppLogoConfigHOC, CloudinaryConfigDocument, CloudinaryConfigComponent, CloudinaryConfigHOC, CloudinaryGenerateMediaLibraryAuthenticationTokenDocument, CloudinaryGenerateMediaLibraryAuthenticationTokenComponent, CloudinaryGenerateMediaLibraryAuthenticationTokenHOC, CloudinaryGenerateSignatureDocument, CloudinaryGenerateSignatureComponent, CloudinaryGenerateSignatureHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generated */ "./lib/client/generated.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCategoryPartsFragmentDoc", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerCategoryPartsFragmentDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerEntryPartsFragmentDoc", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerEntryPartsFragmentDoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutDashboardContainerLogoUrlDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutDashboardContainerLogoUrlDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutDashboardContainerLogoUrlComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutDashboardContainerLogoUrlComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutDashboardContainerLogoUrlHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutDashboardContainerLogoUrlHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateCategoryDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerCreateCategoryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateCategoryComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerCreateCategoryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateCategoryHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerCreateCategoryHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateEntryDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerCreateEntryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateEntryComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerCreateEntryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerCreateEntryHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerCreateEntryHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteCategoriesDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerDeleteCategoriesDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteCategoriesComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerDeleteCategoriesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteCategoriesHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerDeleteCategoriesHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteEntriesDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerDeleteEntriesDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteEntriesComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerDeleteEntriesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerDeleteEntriesHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerDeleteEntriesHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetCategoryDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetCategoryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetCategoryComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetCategoryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetCategoryHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetCategoryHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntriesDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetEntriesDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntriesComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetEntriesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntriesHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetEntriesHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntryDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetEntryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntryComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetEntryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerGetEntryHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerGetEntryHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerSetCategoryActivationStatusesDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerSetCategoryActivationStatusesDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerSetCategoryActivationStatusesComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerSetCategoryActivationStatusesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerSetCategoryActivationStatusesHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerSetCategoryActivationStatusesHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateCategoryDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerUpdateCategoryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateCategoryComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerUpdateCategoryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateCategoryHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerUpdateCategoryHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateEntryDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerUpdateEntryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateEntryComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerUpdateEntryComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntryManagerUpdateEntryHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["EntryManagerUpdateEntryHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexManagerGetIndexPageConfigDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["IndexManagerGetIndexPageConfigDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexManagerGetIndexPageConfigComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["IndexManagerGetIndexPageConfigComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexManagerGetIndexPageConfigHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["IndexManagerGetIndexPageConfigHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexManagerUpdateIndexPageDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["IndexManagerUpdateIndexPageDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexManagerUpdateIndexPageComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["IndexManagerUpdateIndexPageComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexManagerUpdateIndexPageHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["IndexManagerUpdateIndexPageHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingGetIndexPageConfigDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["LandingGetIndexPageConfigDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingGetIndexPageConfigComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["LandingGetIndexPageConfigComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingGetIndexPageConfigHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["LandingGetIndexPageConfigHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithHtmlSeoDocumentHtmlConfigDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["WithHtmlSeoDocumentHtmlConfigDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithHtmlSeoDocumentHtmlConfigComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["WithHtmlSeoDocumentHtmlConfigComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithHtmlSeoDocumentHtmlConfigHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["WithHtmlSeoDocumentHtmlConfigHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithLoadingSpinnerAppLogoConfigDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["WithLoadingSpinnerAppLogoConfigDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithLoadingSpinnerAppLogoConfigComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["WithLoadingSpinnerAppLogoConfigComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WithLoadingSpinnerAppLogoConfigHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["WithLoadingSpinnerAppLogoConfigHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryConfigDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryConfigDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryConfigComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryConfigComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryConfigHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryConfigHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateMediaLibraryAuthenticationTokenDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryGenerateMediaLibraryAuthenticationTokenDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateMediaLibraryAuthenticationTokenComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryGenerateMediaLibraryAuthenticationTokenComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateMediaLibraryAuthenticationTokenHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryGenerateMediaLibraryAuthenticationTokenHOC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateSignatureDocument", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryGenerateSignatureDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateSignatureComponent", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryGenerateSignatureComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryGenerateSignatureHOC", function() { return _generated__WEBPACK_IMPORTED_MODULE_0__["CloudinaryGenerateSignatureHOC"]; });



/***/ }),

/***/ "./lib/rendering/RenderingAppProps.ts":
/*!********************************************!*\
  !*** ./lib/rendering/RenderingAppProps.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/rendering/SubmissionProgressDialog.tsx":
/*!****************************************************!*\
  !*** ./lib/rendering/SubmissionProgressDialog.tsx ***!
  \****************************************************/
/*! exports provided: mutationCounterIncrement, mutationCounterDecrement, SubmissionProgressDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutationCounterIncrement", function() { return mutationCounterIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutationCounterDecrement", function() { return mutationCounterDecrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionProgressDialog", function() { return SubmissionProgressDialog; });
/* harmony import */ var _join_uniform_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/components */ "../../node_modules/@join-uniform/components/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/SubmissionProgressDialog.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/**
 * Current count of inflight Apollo mutation operations.
 */

var mutationsInProgressCounter = 0;
/**
 * Memoized status value to prevent unnecessary re-renders.
 */

var lastMutationsInFlight = false;
/**
 * Observers of the mutations operation counter.
 */

var subscribers = [];
/**
 * Increments the count of current inflight Apollo mutation operations. This is
 * used by the SubmissionProgressDialog component to display a submission dialog
 * while mutations are in progress.
 */

function mutationCounterIncrement() {
  mutationsInProgressCounter += 1;
  if (mutationsInProgressCounter > 0 === lastMutationsInFlight) return;
  lastMutationsInFlight = mutationsInProgressCounter > 0;
  subscribers.forEach(function (s) {
    return s(true);
  });
}
/**
 * Decrements the count of current inflight Apollo mutation operations. This is
 * used by the SubmissionProgressDialog component to display a submission dialog
 * while mutations are in progress.
 */

function mutationCounterDecrement() {
  mutationsInProgressCounter -= 1;
  if (mutationsInProgressCounter > 0 === lastMutationsInFlight) return;
  lastMutationsInFlight = mutationsInProgressCounter > 0;
  subscribers.forEach(function (s) {
    return s(mutationsInProgressCounter > 0);
  });
}
/**
 * Subscribes to the status of current Apollo mutations currently inflight.
 *
 * @param cb
 * Callback called when inflight Apollo mutations are in progress or when they
 * have all completed.
 */

function mutationCounterSubscribe(cb) {
  subscribers.push(cb);
  return unsubscribe;

  function unsubscribe() {
    subscribers = subscribers.filter(function (s) {
      return s !== cb;
    });
  }
}

if (true) {
  mutationCounterSubscribe(function (mutationsInFlight) {
    /* tslint:disable-next-line:no-console */
    console.log("Mutations inflight:", mutationsInFlight);
    /* tslint:disable-next-line:no-console */

    console.log("Subscriber count:", subscribers.length);
  });
}
/**
 * Displays the LoadingSpinner component in a non-dismissible dialog while
 * Apollo mutation operations are currently in progress.
 */


function SubmissionProgressDialog(props) {
  var children = props.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (_state, action) {
    return action;
  }, false),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      open = _useReducer2[0],
      setOpen = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var dispose = mutationCounterSubscribe(handleMutationCounterChange);
    return function () {
      dispose();
    };

    function handleMutationCounterChange(mutationsInFlight) {
      setOpen(mutationsInFlight);
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "none"
    },
    suppressHydrationWarning: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  },  false ? undefined : null));
}

/***/ }),

/***/ "./lib/rendering/apollo/index.ts":
/*!***************************************!*\
  !*** ./lib/rendering/apollo/index.ts ***!
  \***************************************/
/*! exports provided: initializeApollo, withApolloApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initializeApollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initializeApollo */ "./lib/rendering/apollo/initializeApollo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return _initializeApollo__WEBPACK_IMPORTED_MODULE_0__["initializeApollo"]; });

/* harmony import */ var _withApolloApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withApolloApp */ "./lib/rendering/apollo/withApolloApp.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApolloApp", function() { return _withApolloApp__WEBPACK_IMPORTED_MODULE_1__["withApolloApp"]; });




/***/ }),

/***/ "./lib/rendering/apollo/initializeApollo.ts":
/*!**************************************************!*\
  !*** ./lib/rendering/apollo/initializeApollo.ts ***!
  \**************************************************/
/*! exports provided: initializeApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./lib/rendering/apollo/link.ts");



var apolloClient = null;
function initializeApollo(initialState) {
  // Reuse Apollo client on browser. Don't reuse on server because data should
  // be unique between web requests.
  if (apolloClient && false) {
    return apolloClient;
  }

  apolloClient = new apollo_client__WEBPACK_IMPORTED_MODULE_1___default.a({
    connectToDevTools: false && "development" === "development",
    ssrMode: !false,
    link: _link__WEBPACK_IMPORTED_MODULE_2__["link"],
    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
  return apolloClient;
}

/***/ }),

/***/ "./lib/rendering/apollo/link.ts":
/*!**************************************!*\
  !*** ./lib/rendering/apollo/link.ts ***!
  \**************************************/
/*! exports provided: link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-error */ "apollo-link-error");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mutationCounterLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mutationCounterLink */ "./lib/rendering/apollo/mutationCounterLink.ts");






var errorLink = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_1__["onError"])(function (_ref) {
  var graphQLErrors = _ref.graphQLErrors,
      networkError = _ref.networkError;

  if (graphQLErrors) {
    graphQLErrors.map(function (_ref2) {
      var message = _ref2.message,
          locations = _ref2.locations,
          path = _ref2.path;
      return (// tslint:disable-next-line:no-console
        console.error("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path))
      );
    });
  } // tslint:disable-next-line:no-console


  if (networkError) console.error("[Network error]: ".concat(networkError));
});
var httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
  uri: next_config__WEBPACK_IMPORTED_MODULE_4___default()().publicRuntimeConfig.graphQLUri,
  credentials: "same-origin",
  fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default.a
}); // TODO: Add CSRF Link

var link = apollo_link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from([errorLink, _mutationCounterLink__WEBPACK_IMPORTED_MODULE_5__["mutationCounterLink"],
/* csrfLink */
httpLink]);

/***/ }),

/***/ "./lib/rendering/apollo/mutationCounterLink.ts":
/*!*****************************************************!*\
  !*** ./lib/rendering/apollo/mutationCounterLink.ts ***!
  \*****************************************************/
/*! exports provided: mutationCounterLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutationCounterLink", function() { return mutationCounterLink; });
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SubmissionProgressDialog */ "./lib/rendering/SubmissionProgressDialog.tsx");


/**
 * Updates the count of currently inflight Apollo mutation operations. This is
 * used by the SubmissionProgressDialog component to display a dialog while
 * operations are in progress.
 */

var mutationCounterLink = new apollo_link__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"](function (operation, forward) {
  var isMutation = isMutationOperation(operation);
  if (isMutation) Object(_SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_1__["mutationCounterIncrement"])();
  return forward ? forward(operation).map(function (fetchResult) {
    Object(_SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_1__["mutationCounterDecrement"])();
    return fetchResult;
  }) : null;
});
/**
 * Returns whether or not the current operation is performing a mutation.
 *
 * @param operation Apollo operation.
 */

function isMutationOperation(operation) {
  if (operation.query.kind === "Document" && operation.query.definitions.find(function (d) {
    return d.kind === "OperationDefinition" && d.operation === "mutation";
  })) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./lib/rendering/apollo/withApolloApp.tsx":
/*!************************************************!*\
  !*** ./lib/rendering/apollo/withApolloApp.tsx ***!
  \************************************************/
/*! exports provided: withApolloApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApolloApp", function() { return withApolloApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _initializeApollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initializeApollo */ "./lib/rendering/apollo/initializeApollo.ts");

var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/apollo/withApolloApp.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function withApolloApp(App) {
  var _class, _temp;

  var WithApolloApp = (_temp = _class =
  /*#__PURE__*/
  function (_ReactComponent) {
    _inherits(WithApolloApp, _ReactComponent);

    _createClass(WithApolloApp, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
          var Component, router, initialProps, client;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Component = context.Component, router = context.router; // tslint:disable-next-line:no-object-literal-type-assertion

                  initialProps = {};

                  if (!App.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return App.getInitialProps(context);

                case 5:
                  initialProps = _context.sent;

                case 6:
                  client = Object(_initializeApollo__WEBPACK_IMPORTED_MODULE_4__["initializeApollo"])(); // Run all GraphQL queries in the component tree and extract the resulting
                  // data.

                  if (false) {}

                  _context.prev = 8;
                  _context.next = 11;
                  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["getDataFromTree"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WithApolloApp, _extends({}, initialProps, {
                    Component: Component,
                    router: router,
                    serverSideApolloClient: client,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    },
                    __self: this
                  })));

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](8);
                  // Prevent Apollo Client GraphQL errors from crashing SSR. Handle them
                  // in components via the data.error prop:
                  // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                  // tslint:disable-next-line:no-console
                  console.error('Error while running "getDataFromTree"', _context.t0);

                case 16:
                  // getDataFromTree does not call componentWillUnmount.
                  // Head side effect therefore need to be cleared manually.
                  next_head__WEBPACK_IMPORTED_MODULE_1___default.a.rewind();

                case 17:
                  // Extract query data from Apollo store.
                  initialProps.apolloState = client.cache.extract();
                  return _context.abrupt("return", initialProps);

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function WithApolloApp(props) {
      var _this;

      _classCallCheck(this, WithApolloApp);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WithApolloApp).call(this, props));
      _this.client = props.serverSideApolloClient || Object(_initializeApollo__WEBPACK_IMPORTED_MODULE_4__["initializeApollo"])(props.apolloState);
      return _this;
    }

    _createClass(WithApolloApp, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, _extends({}, this.props, {
          apolloClient: this.client,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }));
      }
    }]);

    return WithApolloApp;
  }(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), _defineProperty(_class, "displayName", "WithApolloApp(App)"), _temp);
  return WithApolloApp;
}

/***/ }),

/***/ "./lib/rendering/bootstrapMaterialUiStyles.ts":
/*!****************************************************!*\
  !*** ./lib/rendering/bootstrapMaterialUiStyles.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__);

Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["install"])();

/***/ }),

/***/ "./lib/rendering/index.ts":
/*!********************************!*\
  !*** ./lib/rendering/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apollo */ "./lib/rendering/apollo/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withApolloApp", function() { return _apollo__WEBPACK_IMPORTED_MODULE_0__["withApolloApp"]; });

/* harmony import */ var _material_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material-ui */ "./lib/rendering/material-ui/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaterialUIDocument", function() { return _material_ui__WEBPACK_IMPORTED_MODULE_1__["withMaterialUIDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialUIThemeProvider", function() { return _material_ui__WEBPACK_IMPORTED_MODULE_1__["MaterialUIThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaterialUIApp", function() { return _material_ui__WEBPACK_IMPORTED_MODULE_1__["withMaterialUIApp"]; });

/* harmony import */ var _seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seo */ "./lib/rendering/seo/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withHtmlSeoDocument", function() { return _seo__WEBPACK_IMPORTED_MODULE_2__["withHtmlSeoDocument"]; });

/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled-components */ "./lib/rendering/styled-components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyledComponentsDocument", function() { return _styled_components__WEBPACK_IMPORTED_MODULE_3__["withStyledComponentsDocument"]; });

/* harmony import */ var _RenderingAppProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RenderingAppProps */ "./lib/rendering/RenderingAppProps.ts");
/* harmony import */ var _RenderingAppProps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_RenderingAppProps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _RenderingAppProps__WEBPACK_IMPORTED_MODULE_4__) if(["withApolloApp","withMaterialUIDocument","MaterialUIThemeProvider","withMaterialUIApp","withHtmlSeoDocument","withStyledComponentsDocument","SubmissionProgressDialog","withLoadingSpinnerApp","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _RenderingAppProps__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubmissionProgressDialog */ "./lib/rendering/SubmissionProgressDialog.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmissionProgressDialog", function() { return _SubmissionProgressDialog__WEBPACK_IMPORTED_MODULE_5__["SubmissionProgressDialog"]; });

/* harmony import */ var _withLoadingSpinnerApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withLoadingSpinnerApp */ "./lib/rendering/withLoadingSpinnerApp.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLoadingSpinnerApp", function() { return _withLoadingSpinnerApp__WEBPACK_IMPORTED_MODULE_6__["withLoadingSpinnerApp"]; });









/***/ }),

/***/ "./lib/rendering/material-ui/MaterialUIThemeProvider.tsx":
/*!***************************************************************!*\
  !*** ./lib/rendering/material-ui/MaterialUIThemeProvider.tsx ***!
  \***************************************************************/
/*! exports provided: MaterialUIThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialUIThemeProvider", function() { return MaterialUIThemeProvider; });
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jss/lib/JssProvider */ "react-jss/lib/JssProvider");
/* harmony import */ var react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/material-ui/MaterialUIThemeProvider.tsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MaterialUIThemeProvider(props) {
  var children = props.children,
      _props$muiCssContext = props.muiCssContext,
      sheetsRegistry = _props$muiCssContext.sheetsRegistry,
      sheetsManager = _props$muiCssContext.sheetsManager,
      generateClassName = _props$muiCssContext.generateClassName;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (false) { var jssStyles; }
  }, []);
  var jss = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    // Ensure Material Design styles are added before those from Styled
    // Components so that Styled Components can override default styles.
    if (false) {}

    return undefined;
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_jss_lib_JssProvider__WEBPACK_IMPORTED_MODULE_4___default.a, {
    jss: jss,
    registry: sheetsRegistry,
    generateClassName: generateClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["MuiThemeProvider"], {
    theme: _join_uniform_theme__WEBPACK_IMPORTED_MODULE_0__["lightTheme"],
    sheetsManager: sheetsManager,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, children));
}

/***/ }),

/***/ "./lib/rendering/material-ui/createMUICssContext.ts":
/*!**********************************************************!*\
  !*** ./lib/rendering/material-ui/createMUICssContext.ts ***!
  \**********************************************************/
/*! exports provided: createMuiCssContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMuiCssContext", function() { return createMuiCssContext; });
/* harmony import */ var _material_ui_core_styles_createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/createGenerateClassName */ "@material-ui/core/styles/createGenerateClassName");
/* harmony import */ var _material_ui_core_styles_createGenerateClassName__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_createGenerateClassName__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_1__);


var cachedCssContext = null;
function createMuiCssContext() {
  // Make sure to create a new context for every server-side request so that
  // data isn't shared between connections (which would be bad).
  if (true) return createContext(); // Reuse context on the client-side.

  if (!cachedCssContext) {
    cachedCssContext = createContext();
  }

  return cachedCssContext;

  function createContext() {
    return {
      sheetsManager: new Map(),
      sheetsRegistry: new jss__WEBPACK_IMPORTED_MODULE_1__["SheetsRegistry"](),
      generateClassName: _material_ui_core_styles_createGenerateClassName__WEBPACK_IMPORTED_MODULE_0___default()()
    };
  }
}

/***/ }),

/***/ "./lib/rendering/material-ui/index.ts":
/*!********************************************!*\
  !*** ./lib/rendering/material-ui/index.ts ***!
  \********************************************/
/*! exports provided: createMuiCssContext, MaterialUIThemeProvider, withMaterialUIApp, withMaterialUIDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createMUICssContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMUICssContext */ "./lib/rendering/material-ui/createMUICssContext.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMuiCssContext", function() { return _createMUICssContext__WEBPACK_IMPORTED_MODULE_0__["createMuiCssContext"]; });

/* harmony import */ var _MaterialUIThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MaterialUIThemeProvider */ "./lib/rendering/material-ui/MaterialUIThemeProvider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialUIThemeProvider", function() { return _MaterialUIThemeProvider__WEBPACK_IMPORTED_MODULE_1__["MaterialUIThemeProvider"]; });

/* harmony import */ var _withMaterialUIApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withMaterialUIApp */ "./lib/rendering/material-ui/withMaterialUIApp.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaterialUIApp", function() { return _withMaterialUIApp__WEBPACK_IMPORTED_MODULE_2__["withMaterialUIApp"]; });

/* harmony import */ var _withMaterialUIDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withMaterialUIDocument */ "./lib/rendering/material-ui/withMaterialUIDocument.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMaterialUIDocument", function() { return _withMaterialUIDocument__WEBPACK_IMPORTED_MODULE_3__["withMaterialUIDocument"]; });






/***/ }),

/***/ "./lib/rendering/material-ui/withMaterialUIApp.tsx":
/*!*********************************************************!*\
  !*** ./lib/rendering/material-ui/withMaterialUIApp.tsx ***!
  \*********************************************************/
/*! exports provided: withMaterialUIApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMaterialUIApp", function() { return withMaterialUIApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _createMUICssContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMUICssContext */ "./lib/rendering/material-ui/createMUICssContext.ts");

var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/material-ui/withMaterialUIApp.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function withMaterialUIApp(App) {
  var _class, _temp;

  var WithMaterialUIApp = (_temp = _class =
  /*#__PURE__*/
  function (_ReactComponent) {
    _inherits(WithMaterialUIApp, _ReactComponent);

    function WithMaterialUIApp() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, WithMaterialUIApp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithMaterialUIApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "muiCssContext", Object(_createMUICssContext__WEBPACK_IMPORTED_MODULE_2__["createMuiCssContext"])());

      return _this;
    }

    _createClass(WithMaterialUIApp, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, this.props, {
          muiCssContext: this.muiCssContext,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
          var initialProps;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // tslint:disable-next-line:no-object-literal-type-assertion
                  initialProps = {};

                  if (!App.getInitialProps) {
                    _context.next = 5;
                    break;
                  }

                  _context.next = 4;
                  return App.getInitialProps(context);

                case 4:
                  initialProps = _context.sent;

                case 5:
                  return _context.abrupt("return", initialProps);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithMaterialUIApp;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _defineProperty(_class, "displayName", "WithMaterialUIApp(App)"), _temp);
  return WithMaterialUIApp;
}

/***/ }),

/***/ "./lib/rendering/material-ui/withMaterialUIDocument.tsx":
/*!**************************************************************!*\
  !*** ./lib/rendering/material-ui/withMaterialUIDocument.tsx ***!
  \**************************************************************/
/*! exports provided: withMaterialUIDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMaterialUIDocument", function() { return withMaterialUIDocument; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/material-ui/withMaterialUIDocument.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function withMaterialUIDocument(Document) {
  var _class, _temp;

  var WithMaterialUIDocument = (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithMaterialUIDocument, _Component);

    function WithMaterialUIDocument() {
      _classCallCheck(this, WithMaterialUIDocument);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithMaterialUIDocument).apply(this, arguments));
    }

    _createClass(WithMaterialUIDocument, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Document, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
          var originalRenderPage, muiCssContext, initialProps;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  originalRenderPage = context.renderPage;

                  context.renderPage = function (enhancer) {
                    var typedEnhancer = enhancer;
                    var renderPageResponse = originalRenderPage(function (App) {
                      return function (props) {
                        var EnhancedApp = typedEnhancer ? typedEnhancer(App) : App;
                        muiCssContext = props.muiCssContext;
                        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EnhancedApp, _extends({}, props, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        }));
                      };
                    });
                    return renderPageResponse;
                  }; // tslint:disable-next-line:no-object-literal-type-assertion


                  initialProps = {};

                  if (!Document.getInitialProps) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return Document.getInitialProps(context);

                case 6:
                  initialProps = _context.sent;

                case 7:
                  if (muiCssContext) {
                    _context.next = 9;
                    break;
                  }

                  throw new Error("_app must be decorated with withMaterialUIApp and use MaterialUIThemeProvider.");

                case 9:
                  initialProps.styles = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: this
                  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
                    id: "jss-server-side",
                    dangerouslySetInnerHTML: {
                      __html: muiCssContext.sheetsRegistry.toString()
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    },
                    __self: this
                  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("noscript", {
                    id: "jss-insertion-point",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    },
                    __self: this
                  }), initialProps.styles);
                  return _context.abrupt("return", initialProps);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithMaterialUIDocument;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _defineProperty(_class, "displayName", "WithMaterialUIDocumentDocument(Document)"), _temp);
  return WithMaterialUIDocument;
}

/***/ }),

/***/ "./lib/rendering/seo/GoogleAnalyticsTag.tsx":
/*!**************************************************!*\
  !*** ./lib/rendering/seo/GoogleAnalyticsTag.tsx ***!
  \**************************************************/
/*! exports provided: GoogleAnalyticsTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsTags", function() { return GoogleAnalyticsTags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/seo/GoogleAnalyticsTag.tsx";

function GoogleAnalyticsTags(props) {
  var googleAnalyticsId = props.googleAnalyticsId;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "development" === "production" && googleAnalyticsId && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    key: "googleTagManager",
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(googleAnalyticsId),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    key: "googleAnalytics",
    dangerouslySetInnerHTML: {
      __html: generateGoogleAnalyticsScriptContents(googleAnalyticsId)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })));
}

function generateGoogleAnalyticsScriptContents(googleAnalyticsId) {
  return "window.dataLayer = window.dataLayer || [];\nfunction gtag() { dataLayer.push(arguments); }\ngtag('js', new Date());\ngtag('config', '".concat(googleAnalyticsId, "');").split("\n").join("");
}

/***/ }),

/***/ "./lib/rendering/seo/SeoTags.tsx":
/*!***************************************!*\
  !*** ./lib/rendering/seo/SeoTags.tsx ***!
  \***************************************/
/*! exports provided: SeoTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeoTags", function() { return SeoTags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/seo/SeoTags.tsx";

var publicPath = "/static";
function SeoTags(props) {
  var _props$htmlConfig = props.htmlConfig,
      metaKeywords = _props$htmlConfig.metaKeywords,
      metaDescription = _props$htmlConfig.metaDescription,
      metaAuthor = _props$htmlConfig.metaAuthor,
      metaAbstract = _props$htmlConfig.metaAbstract,
      metaCopyright = _props$htmlConfig.metaCopyright;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "57x57",
    href: "".concat(publicPath, "/favicons/apple-icon-57x57.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "".concat(publicPath, "/favicons/apple-icon-60x60.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "".concat(publicPath, "/favicons/apple-icon-72x72.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "".concat(publicPath, "/favicons/apple-icon-76x76.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "".concat(publicPath, "/favicons/apple-icon-114x114.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "".concat(publicPath, "/favicons/apple-icon-120x120.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "".concat(publicPath, "/favicons/apple-icon-144x144.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "".concat(publicPath, "/favicons/apple-icon-152x152.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "".concat(publicPath, "/favicons/apple-icon-180x180.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "".concat(publicPath, "/favicons/android-icon-192x192.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "".concat(publicPath, "/favicons/favicon-32x32.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "".concat(publicPath, "/favicons/favicon-96x96.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "".concat(publicPath, "/favicons/favicon-16x16.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "shortcut icon",
    href: "".concat(publicPath, "/favicon.ico"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "msapplication-TileImage",
    content: "".concat(publicPath, "/favicons/ms-icon-144x144.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "manifest",
    href: "".concat(publicPath, "/manifest.json"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), metaKeywords && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: metaKeywords,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), metaDescription && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: metaDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), metaAuthor && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "author",
    content: metaAuthor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), metaAbstract && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "abstract",
    content: metaAbstract,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), metaCopyright && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "copyright",
    content: metaCopyright,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }));
}

/***/ }),

/***/ "./lib/rendering/seo/index.ts":
/*!************************************!*\
  !*** ./lib/rendering/seo/index.ts ***!
  \************************************/
/*! exports provided: withHtmlSeoDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withHtmlSeoDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withHtmlSeoDocument */ "./lib/rendering/seo/withHtmlSeoDocument.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withHtmlSeoDocument", function() { return _withHtmlSeoDocument__WEBPACK_IMPORTED_MODULE_0__["withHtmlSeoDocument"]; });



/***/ }),

/***/ "./lib/rendering/seo/withHtmlSeoDocument.tsx":
/*!***************************************************!*\
  !*** ./lib/rendering/seo/withHtmlSeoDocument.tsx ***!
  \***************************************************/
/*! exports provided: withHtmlSeoDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHtmlSeoDocument", function() { return withHtmlSeoDocument; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/lib/client */ "./lib/client/index.ts");
/* harmony import */ var _apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apollo */ "./lib/rendering/apollo/index.ts");
/* harmony import */ var _GoogleAnalyticsTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GoogleAnalyticsTag */ "./lib/rendering/seo/GoogleAnalyticsTag.tsx");
/* harmony import */ var _SeoTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SeoTags */ "./lib/rendering/seo/SeoTags.tsx");

var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/seo/withHtmlSeoDocument.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function withHtmlSeoDocument(Document) {
  var _class, _temp;

  var WithHtmlSeoDocument = (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithHtmlSeoDocument, _Component);

    function WithHtmlSeoDocument() {
      _classCallCheck(this, WithHtmlSeoDocument);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithHtmlSeoDocument).apply(this, arguments));
    }

    _createClass(WithHtmlSeoDocument, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Document, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
          var apolloClient, htmlConfigQueryResult, htmlConfig, initialProps;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  apolloClient = Object(_apollo__WEBPACK_IMPORTED_MODULE_3__["initializeApollo"])();
                  _context.next = 3;
                  return apolloClient.query({
                    query: _lib_client__WEBPACK_IMPORTED_MODULE_2__["WithHtmlSeoDocumentHtmlConfigDocument"]
                  });

                case 3:
                  htmlConfigQueryResult = _context.sent;
                  htmlConfig = htmlConfigQueryResult.data.htmlConfig; // tslint:disable-next-line:no-object-literal-type-assertion

                  initialProps = {};

                  if (!Document.getInitialProps) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 9;
                  return Document.getInitialProps(context);

                case 9:
                  initialProps = _context.sent;

                case 10:
                  initialProps.styles = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GoogleAnalyticsTag__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalyticsTags"], {
                    googleAnalyticsId: htmlConfig.googleAnalyticsId,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: this
                  }), !/^\/a(dmin)?/.test(context.pathname) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SeoTags__WEBPACK_IMPORTED_MODULE_5__["SeoTags"], {
                    htmlConfig: htmlConfig,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  }), initialProps.styles);
                  return _context.abrupt("return", initialProps);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithHtmlSeoDocument;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _defineProperty(_class, "displayName", "WithHtmlSeoDocument(Document)"), _temp);
  return WithHtmlSeoDocument;
}

/***/ }),

/***/ "./lib/rendering/styled-components/index.ts":
/*!**************************************************!*\
  !*** ./lib/rendering/styled-components/index.ts ***!
  \**************************************************/
/*! exports provided: withStyledComponentsDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withStyledComponentsDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withStyledComponentsDocument */ "./lib/rendering/styled-components/withStyledComponentsDocument.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyledComponentsDocument", function() { return _withStyledComponentsDocument__WEBPACK_IMPORTED_MODULE_0__["withStyledComponentsDocument"]; });



/***/ }),

/***/ "./lib/rendering/styled-components/withStyledComponentsDocument.tsx":
/*!**************************************************************************!*\
  !*** ./lib/rendering/styled-components/withStyledComponentsDocument.tsx ***!
  \**************************************************************************/
/*! exports provided: withStyledComponentsDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyledComponentsDocument", function() { return withStyledComponentsDocument; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/theme */ "../../node_modules/@join-uniform/theme/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/styled-components/withStyledComponentsDocument.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function withStyledComponentsDocument(Document) {
  var _class, _temp;

  var WithStyledComponentsDocument = (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithStyledComponentsDocument, _Component);

    function WithStyledComponentsDocument() {
      _classCallCheck(this, WithStyledComponentsDocument);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithStyledComponentsDocument).apply(this, arguments));
    }

    _createClass(WithStyledComponentsDocument, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Document, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
          var sheet, originalRenderPage, initialProps;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  sheet = new _join_uniform_theme__WEBPACK_IMPORTED_MODULE_1__["ServerStyleSheet"]();
                  originalRenderPage = context.renderPage;

                  context.renderPage = function (enhancer) {
                    var typedEnhancer = enhancer;
                    var renderPageResponse = originalRenderPage(function (App) {
                      return function (props) {
                        var EnhancedApp = typedEnhancer ? typedEnhancer(App) : App;
                        return sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(EnhancedApp, _extends({}, props, {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                          },
                          __self: this
                        })));
                      };
                    });
                    return renderPageResponse;
                  }; // tslint:disable-next-line:no-object-literal-type-assertion


                  initialProps = {};

                  if (!Document.getInitialProps) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 7;
                  return Document.getInitialProps(context);

                case 7:
                  initialProps = _context.sent;

                case 8:
                  initialProps.styles = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, initialProps.styles, sheet.getStyleElement());
                  return _context.abrupt("return", initialProps);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithStyledComponentsDocument;
  }(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), _defineProperty(_class, "displayName", "WithStyledComponentsDocument(Document)"), _temp);
  return WithStyledComponentsDocument;
}

/***/ }),

/***/ "./lib/rendering/withLoadingSpinnerApp.tsx":
/*!*************************************************!*\
  !*** ./lib/rendering/withLoadingSpinnerApp.tsx ***!
  \*************************************************/
/*! exports provided: withLoadingSpinnerApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLoadingSpinnerApp", function() { return withLoadingSpinnerApp; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/lib/client */ "./lib/client/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./lib/utils/index.ts");

var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/rendering/withLoadingSpinnerApp.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function withLoadingSpinnerApp(App) {
  var _class, _temp;

  var WithLoadingSpinnerApp = (_temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits(WithLoadingSpinnerApp, _Component);

    function WithLoadingSpinnerApp() {
      _classCallCheck(this, WithLoadingSpinnerApp);

      return _possibleConstructorReturn(this, _getPrototypeOf(WithLoadingSpinnerApp).apply(this, arguments));
    }

    _createClass(WithLoadingSpinnerApp, [{
      key: "render",
      value: function render() {
        var _this = this;

        var client = this.props.apolloClient || this.props.serverSideApolloClient;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_client__WEBPACK_IMPORTED_MODULE_2__["WithLoadingSpinnerAppLogoConfigComponent"], {
          client: client,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, function (result) {
          var logoUrl = !result.loading && !result.error ? result.data.logoConfig.url : "";
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, _this.props, {
            loadingSpinnerConfig: createLoadingSpinnerConfig(logoUrl),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }));
        });
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", App.getInitialProps ? App.getInitialProps(context) : // tslint:disable-next-line:no-object-literal-type-assertion
                  {});

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    return WithLoadingSpinnerApp;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _defineProperty(_class, "displayName", "WithLoadingSpinnerApp(App)"), _temp);
  return WithLoadingSpinnerApp;
}

function createLoadingSpinnerConfig(logoUrl) {
  return {
    src1_0x: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createResponsiveImageUrl"])(logoUrl, {
      w: "72",
      h: "72",
      format: "png"
    }),
    src1_5x: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createResponsiveImageUrl"])(logoUrl, {
      w: "105",
      h: "105",
      format: "png"
    }),
    src2_0x: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createResponsiveImageUrl"])(logoUrl, {
      w: "144",
      h: "144",
      format: "png"
    }),
    transitionDelay: 2000
  };
}

/***/ }),

/***/ "./lib/utils/Cloudinary.tsx":
/*!**********************************!*\
  !*** ./lib/utils/Cloudinary.tsx ***!
  \**********************************/
/*! exports provided: useCloudinary, CloudinaryProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCloudinary", function() { return useCloudinary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryProvider", function() { return CloudinaryProvider; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _join_uniform_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @join-uniform/components */ "../../node_modules/@join-uniform/components/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/lib/client */ "./lib/client/index.ts");

var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/utils/Cloudinary.tsx";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var initializationStatus;
var CloudinaryContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])(null);
function useCloudinary() {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(CloudinaryContext);
}

/**
 * Initializes the Cloudinary client library if it has not already been
 * initialized. If rendered on the server, the client library is not
 * initialized.
 */
var CloudinaryProvider = Object(_lib_client__WEBPACK_IMPORTED_MODULE_3__["CloudinaryGenerateMediaLibraryAuthenticationTokenHOC"])({
  name: "generateCloudinaryMediaLibraryAuthenticationToken"
})(Object(_lib_client__WEBPACK_IMPORTED_MODULE_3__["CloudinaryGenerateSignatureHOC"])({
  name: "generateCloudinarySignature"
})(Object(_lib_client__WEBPACK_IMPORTED_MODULE_3__["CloudinaryConfigHOC"])(undefined)(CloudinaryProviderBase)));

function CloudinaryProviderBase(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      cloudinary = _useState2[0],
      setCloudinary = _useState2[1]; // Load the Cloudinary client libraries if it hasn't already been loaded.


  if (false) { var mediaLibraryWidgetScript, uploadWidgetScript; } // Initialize state to the currently loaded Cloudinary client instance if it
  // exists or undefined otherwise. The state will be updated by the effect
  // below to indicate that the client has been loaded.


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])( false ? undefined : undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      cloudinaryClient = _useState4[0],
      setCloudinaryClient = _useState4[1]; // Wait for the Cloudinary client script to load and then issue a state
  // update.


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (true) return; // tslint:disable-next-line:no-floating-promises

    initializationStatus.then(function (_ref) {
      var success = _ref.success;
      if (!success) throw new Error("Failed to load Cloudinary client.");
      if (!cloudinaryClient) setCloudinaryClient(window.cloudinary);
    });
  }, []);
  var data = props.data,
      generateCloudinarySignature = props.generateCloudinarySignature,
      generateCloudinaryMediaLibraryAuthenticationToken = props.generateCloudinaryMediaLibraryAuthenticationToken;

  if (!data || data.loading || data.error || !data.cloudinaryCloudName || !data.cloudinaryApiKey) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_join_uniform_components__WEBPACK_IMPORTED_MODULE_1__["LoadingSpinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    });
  }

  var cloudinaryCloudName = data.cloudinaryCloudName,
      cloudinaryApiKey = data.cloudinaryApiKey; // Get the Cloudinary "cloudName" and render the provider.

  if (cloudinaryClient) {
    cloudinaryClient.setCloudName(cloudinaryCloudName);

    if (!cloudinary) {
      var _generateSignature =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(cb, paramsToSign) {
          var fetchResult;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return generateCloudinarySignature({
                    variables: {
                      paramsToSign: paramsToSign
                    }
                  });

                case 2:
                  fetchResult = _context.sent;

                  if (!(!fetchResult || fetchResult.errors)) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  cb(fetchResult.data.generateCloudinarySignature);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function _generateSignature(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      setCloudinary({
        client: cloudinaryClient,
        apiKey: cloudinaryApiKey,
        cloudName: cloudinaryCloudName,
        generateSignature: _generateSignature,
        getDefaultUploadWidgetOptions: function getDefaultUploadWidgetOptions() {
          return {
            // Required:
            cloudName: cloudinaryCloudName,
            // Widget behavior:
            sources: ["local", "url", "camera"],
            multiple: false,
            cropping: true,
            croppingAspectRatio: 1,
            // square
            // Upload parameters:
            folder: "Assets",
            resourceType: "image",
            uploadSignature: _generateSignature,
            apiKey: cloudinaryApiKey
          };
        },
        getDefaultMediaLibraryWidgetOptions: function () {
          var _getDefaultMediaLibraryWidgetOptions = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
            var fetchResult, credentials;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return generateCloudinaryMediaLibraryAuthenticationToken();

                  case 2:
                    fetchResult = _context2.sent;

                    if (!(!fetchResult || fetchResult.errors || !fetchResult.data)) {
                      _context2.next = 5;
                      break;
                    }

                    throw new Error("Failed to retrieve Cloudinary Media Widget authentication token.");

                  case 5:
                    credentials = _objectSpread({}, fetchResult.data.generateCloudinaryMediaLibraryAuthenticationToken); // Remove Apollo specific fields.

                    delete credentials.__typename;
                    return _context2.abrupt("return", _objectSpread({}, credentials, {
                      // Media library behavior:
                      max_files: 1,
                      multiple: false
                    }));

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function getDefaultMediaLibraryWidgetOptions() {
            return _getDefaultMediaLibraryWidgetOptions.apply(this, arguments);
          };
        }()
      });
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CloudinaryContext.Provider, {
    value: cloudinary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, props.children);
}

/***/ }),

/***/ "./lib/utils/createResponsiveImageUrl.ts":
/*!***********************************************!*\
  !*** ./lib/utils/createResponsiveImageUrl.ts ***!
  \***********************************************/
/*! exports provided: createResponsiveImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResponsiveImageUrl", function() { return createResponsiveImageUrl; });
/**
 * Adds the requested transformations to the provided Cloudinary image url.
 *
 * @see https://cloudinary.com/documentation/image_transformations#resizing_and_cropping_images
 */
function createResponsiveImageUrl(imageUrl, options) {
  var computedImageUrl = imageUrl;
  var params = Object.keys(options).filter(function (key) {
    return key !== "format";
  }).map(function (key) {
    return "".concat(key, "_").concat(options[key]);
  }); // Insert the transformation fragment after the "upload" fragment.

  if (params.length > 0) {
    var computedParams = params.join(",");
    var fragments = computedImageUrl.split("/");
    computedImageUrl = fragments.reduce(function (accumulator, fragment, index) {
      return "".concat(accumulator).concat(fragment).concat(fragment === "upload" ? "/".concat(computedParams) : "").concat(index === fragments.length - 1 ? "" : "/"); // prettier-ignore
    }, "");
  } // Swap out the trailing file extension.


  if (options.format) {
    var fileExtension = computedImageUrl.split(".").pop();
    computedImageUrl = computedImageUrl.replace(new RegExp("".concat(fileExtension, "$")), "").concat(options.format);
  }

  return computedImageUrl;
}

/***/ }),

/***/ "./lib/utils/index.ts":
/*!****************************!*\
  !*** ./lib/utils/index.ts ***!
  \****************************/
/*! exports provided: useCloudinary, CloudinaryProvider, createResponsiveImageUrl, withQueryLoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cloudinary */ "./lib/utils/Cloudinary.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCloudinary", function() { return _Cloudinary__WEBPACK_IMPORTED_MODULE_0__["useCloudinary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloudinaryProvider", function() { return _Cloudinary__WEBPACK_IMPORTED_MODULE_0__["CloudinaryProvider"]; });

/* harmony import */ var _createResponsiveImageUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createResponsiveImageUrl */ "./lib/utils/createResponsiveImageUrl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createResponsiveImageUrl", function() { return _createResponsiveImageUrl__WEBPACK_IMPORTED_MODULE_1__["createResponsiveImageUrl"]; });

/* harmony import */ var _withQueryLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withQueryLoadingSpinner */ "./lib/utils/withQueryLoadingSpinner.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withQueryLoadingSpinner", function() { return _withQueryLoadingSpinner__WEBPACK_IMPORTED_MODULE_2__["withQueryLoadingSpinner"]; });





/***/ }),

/***/ "./lib/utils/withQueryLoadingSpinner.tsx":
/*!***********************************************!*\
  !*** ./lib/utils/withQueryLoadingSpinner.tsx ***!
  \***********************************************/
/*! exports provided: withQueryLoadingSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withQueryLoadingSpinner", function() { return withQueryLoadingSpinner; });
/* harmony import */ var _join_uniform_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @join-uniform/components */ "../../node_modules/@join-uniform/components/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/lib/utils/withQueryLoadingSpinner.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withQueryLoadingSpinner(QueryComponent, optionsOrChildren, maybeChildren) {
  var children = maybeChildren || optionsOrChildren;
  var options = maybeChildren ? optionsOrChildren : {};
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(QueryComponent, _extends({}, options, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), function (result) {
    if (result.loading || result.error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_join_uniform_components__WEBPACK_IMPORTED_MODULE_0__["LoadingSpinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    });
    return children(result);
  });
}

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_rendering_bootstrapMaterialUiStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/rendering/bootstrapMaterialUiStyles */ "./lib/rendering/bootstrapMaterialUiStyles.ts");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_rendering__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/rendering */ "./lib/rendering/index.ts");
var _jsxFileName = "/home/jason/code/clients/bhartitest/packages/join-uniform-app/pages/_document.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// This is imported here to ensure the new Material UI styling engine is
// initialized first.
// Ref: https://material-ui.com/css-in-js/basics/#migration-for-material-ui-core-users





var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("html", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })));
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_rendering__WEBPACK_IMPORTED_MODULE_3__["withHtmlSeoDocument"])(Object(_lib_rendering__WEBPACK_IMPORTED_MODULE_3__["withMaterialUIDocument"])(Object(_lib_rendering__WEBPACK_IMPORTED_MODULE_3__["withStyledComponentsDocument"])(MyDocument))));

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./pages/_document.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.tsx */"./pages/_document.tsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/FormLabel":
/*!**********************************************!*\
  !*** external "@material-ui/core/FormLabel" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/Radio":
/*!******************************************!*\
  !*** external "@material-ui/core/Radio" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Radio");

/***/ }),

/***/ "@material-ui/core/RadioGroup":
/*!***********************************************!*\
  !*** external "@material-ui/core/RadioGroup" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/RadioGroup");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/*!********************************************!*\
  !*** external "@material-ui/core/SvgIcon" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableFooter":
/*!************************************************!*\
  !*** external "@material-ui/core/TableFooter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableFooter");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TablePagination":
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/MuiThemeProvider":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/MuiThemeProvider" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/MuiThemeProvider");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/core/styles/createBreakpoints":
/*!*************************************************************!*\
  !*** external "@material-ui/core/styles/createBreakpoints" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createBreakpoints");

/***/ }),

/***/ "@material-ui/core/styles/createGenerateClassName":
/*!*******************************************************************!*\
  !*** external "@material-ui/core/styles/createGenerateClassName" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createGenerateClassName");

/***/ }),

/***/ "@material-ui/core/styles/createMuiTheme":
/*!**********************************************************!*\
  !*** external "@material-ui/core/styles/createMuiTheme" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/createMuiTheme");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/CloudUpload":
/*!*************************************************!*\
  !*** external "@material-ui/icons/CloudUpload" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CloudUpload");

/***/ }),

/***/ "@material-ui/icons/Collections":
/*!*************************************************!*\
  !*** external "@material-ui/icons/Collections" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Collections");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "@material-ui/icons/DragHandle":
/*!************************************************!*\
  !*** external "@material-ui/icons/DragHandle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DragHandle");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/PowerSettingsNew":
/*!******************************************************!*\
  !*** external "@material-ui/icons/PowerSettingsNew" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PowerSettingsNew");

/***/ }),

/***/ "@material-ui/icons/Remove":
/*!********************************************!*\
  !*** external "@material-ui/icons/Remove" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "@material-ui/icons/Texture":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Texture" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Texture");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-error":
/*!************************************!*\
  !*** external "apollo-link-error" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-jss/lib/JssProvider");

/***/ }),

/***/ "react-localization":
/*!*************************************!*\
  !*** external "react-localization" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-localization");

/***/ }),

/***/ "react-sortable-hoc":
/*!*************************************!*\
  !*** external "react-sortable-hoc" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map