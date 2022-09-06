"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_VisualTool_js",{

/***/ "./src/AppWrapper.js":
/*!***************************!*\
  !*** ./src/AppWrapper.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\n\nvar darkTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n    palette: {\n        mode: \"dark\"\n    }\n});\nvar lightTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.createTheme)({\n    palette: {\n        mode: \"light\"\n    }\n});\nfunction AppWrapper(props) {\n    var chartOptions = props.chartOptions;\n    var theme = chartOptions.darkMode ? darkTheme : lightTheme;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.StyledEngineProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: theme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/chunfu/WebstormProjects/Spatial-Trans-Visual-Tool/src/AppWrapper.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/chunfu/WebstormProjects/Spatial-Trans-Visual-Tool/src/AppWrapper.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/chunfu/WebstormProjects/Spatial-Trans-Visual-Tool/src/AppWrapper.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = AppWrapper;\nvar mapStateToProps = function(state) {\n    return {\n        chartOptions: state.chartOptions\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {})(AppWrapper));\nvar _c;\n$RefreshReg$(_c, \"AppWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwV3JhcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBeUU7QUFDL0I7QUFDTjtBQUNaO0FBRXhCLElBQU1LLFNBQVMsR0FBR0gsMERBQVcsQ0FBQztJQUFDSSxPQUFPLEVBQUU7UUFBQ0MsSUFBSSxFQUFFLE1BQU07S0FBQztDQUFDLENBQUM7QUFDeEQsSUFBTUMsVUFBVSxHQUFHTiwwREFBVyxDQUFDO0lBQUNJLE9BQU8sRUFBRTtRQUFDQyxJQUFJLEVBQUUsT0FBTztLQUFDO0NBQUMsQ0FBQztBQUUxRCxTQUFTRSxVQUFVLENBQUNDLEtBQUssRUFBRTtJQUN6QixJQUFNQyxZQUFZLEdBQUdELEtBQUssQ0FBQ0MsWUFBWTtJQUN2QyxJQUFNQyxLQUFLLEdBQUdELFlBQVksQ0FBQ0UsUUFBUSxHQUFHUixTQUFTLEdBQUdHLFVBQVU7SUFFNUQscUJBQ0UsOERBQUNSLHNFQUFvQjtrQkFDbkIsNEVBQUNDLCtEQUFhO1lBQUNXLEtBQUssRUFBRUEsS0FBSztzQkFDekIsNEVBQUNSLDRDQUFHOzs7O29CQUFFOzs7OztnQkFDUTs7Ozs7WUFDSyxDQUN2QjtDQUNIO0FBWFFLLEtBQUFBLFVBQVU7QUFhbkIsSUFBTUssZUFBZSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUNqQyxPQUFPO1FBQ0xKLFlBQVksRUFBRUksS0FBSyxDQUFDSixZQUFZO0tBQ2pDLENBQUM7Q0FDSDtBQUVELCtEQUFlUixvREFBTyxDQUFDVyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUNMLFVBQVUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9BcHBXcmFwcGVyLmpzPzQ0MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdHlsZWRFbmdpbmVQcm92aWRlciwgVGhlbWVQcm92aWRlcn0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuaW1wb3J0IHtjcmVhdGVUaGVtZX0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG5jb25zdCBkYXJrVGhlbWUgPSBjcmVhdGVUaGVtZSh7cGFsZXR0ZToge21vZGU6ICdkYXJrJ319KTtcbmNvbnN0IGxpZ2h0VGhlbWUgPSBjcmVhdGVUaGVtZSh7cGFsZXR0ZToge21vZGU6ICdsaWdodCd9fSk7XG5cbmZ1bmN0aW9uIEFwcFdyYXBwZXIocHJvcHMpIHtcbiAgY29uc3QgY2hhcnRPcHRpb25zID0gcHJvcHMuY2hhcnRPcHRpb25zO1xuICBjb25zdCB0aGVtZSA9IGNoYXJ0T3B0aW9ucy5kYXJrTW9kZSA/IGRhcmtUaGVtZSA6IGxpZ2h0VGhlbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkRW5naW5lUHJvdmlkZXI+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8QXBwLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L1N0eWxlZEVuZ2luZVByb3ZpZGVyPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjaGFydE9wdGlvbnM6IHN0YXRlLmNoYXJ0T3B0aW9ucyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7fSkoQXBwV3JhcHBlcik7XG4iXSwibmFtZXMiOlsiU3R5bGVkRW5naW5lUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiY3JlYXRlVGhlbWUiLCJjb25uZWN0IiwiQXBwIiwiZGFya1RoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJsaWdodFRoZW1lIiwiQXBwV3JhcHBlciIsInByb3BzIiwiY2hhcnRPcHRpb25zIiwidGhlbWUiLCJkYXJrTW9kZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/AppWrapper.js\n"));

/***/ }),

/***/ "./src/VisualTool.js":
/*!***************************!*\
  !*** ./src/VisualTool.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"VisualTool\": function() { return /* binding */ VisualTool; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./src/reducers/index.js\");\n/* harmony import */ var _AppWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AppWrapper */ \"./src/AppWrapper.js\");\n/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mixpanel-browser */ \"./node_modules/mixpanel-browser/dist/mixpanel.cjs.js\");\n/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_6__);\n\n\n//import { ScrollView } from 'react-native';\n\n\n\n\n\n\n// import * as serviceWorker from './serviceWorker';\n\nvar useMixPanel = false;\nvar logger = function(store) {\n    return function(next) {\n        return function(action) {\n            if (action.type === _actions__WEBPACK_IMPORTED_MODULE_3__.SET_SERVER_INFO) {\n                if (action.payload.mixpanel) {\n                    mixpanel_browser__WEBPACK_IMPORTED_MODULE_6___default().init(action.payload.mixpanel);\n                    useMixPanel = true;\n                }\n            }\n            if (useMixPanel) {\n                if (action.type === _actions__WEBPACK_IMPORTED_MODULE_3__.SET_DATASET) {\n                    mixpanel_browser__WEBPACK_IMPORTED_MODULE_6___default().track(\"Open Dataset\", {\n                        name: action.payload.name,\n                        id: action.payload.id\n                    });\n                } else if (action.type === _actions__WEBPACK_IMPORTED_MODULE_3__.SET_EMAIL) {\n                    mixpanel_browser__WEBPACK_IMPORTED_MODULE_6___default().identify(action.payload);\n                }\n            }\n            return next(action);\n        };\n    };\n};\nvar store = (0,redux__WEBPACK_IMPORTED_MODULE_7__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,redux__WEBPACK_IMPORTED_MODULE_7__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_8__[\"default\"], logger));\nstore.dispatch((0,_actions__WEBPACK_IMPORTED_MODULE_3__.initAuth)());\nfunction VisualTool() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"scroll-wrapper\",\n            style: {\n                transform: \"translate3d(0, 0, 0)\",\n                width: \"100%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: {\n                    overflow: \"scroll\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/chunfu/WebstormProjects/Spatial-Trans-Visual-Tool/src/VisualTool.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/chunfu/WebstormProjects/Spatial-Trans-Visual-Tool/src/VisualTool.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/chunfu/WebstormProjects/Spatial-Trans-Visual-Tool/src/VisualTool.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_c = VisualTool;\nvar _c;\n$RefreshReg$(_c, \"VisualTool\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVmlzdWFsVG9vbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDMUIsNENBQTRDO0FBQ1A7QUFDYztBQUNUO0FBQ2tDO0FBQ3ZDO0FBQ0M7QUFDdEMsb0RBQW9EO0FBQ1o7QUFFeEMsSUFBSVksV0FBVyxHQUFHLEtBQUs7QUFFdkIsSUFBTUMsTUFBTSxHQUFHLFNBQUNDLEtBQUs7V0FBSyxTQUFDQyxJQUFJO2VBQUssU0FBQ0MsTUFBTSxFQUFLO1lBQzlDLElBQUlBLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLVCxxREFBZSxFQUFFO2dCQUNuQyxJQUFJUSxNQUFNLENBQUNFLE9BQU8sQ0FBQ1AsUUFBUSxFQUFFO29CQUMzQkEsNERBQWEsQ0FBQ0ssTUFBTSxDQUFDRSxPQUFPLENBQUNQLFFBQVEsQ0FBQyxDQUFDO29CQUN2Q0MsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDcEI7YUFDRjtZQUNELElBQUlBLFdBQVcsRUFBRTtnQkFDZixJQUFJSSxNQUFNLENBQUNDLElBQUksS0FBS1gsaURBQVcsRUFBRTtvQkFDL0JLLDZEQUFjLENBQUMsY0FBYyxFQUFFO3dCQUM3QlUsSUFBSSxFQUFFTCxNQUFNLENBQUNFLE9BQU8sQ0FBQ0csSUFBSTt3QkFDekJDLEVBQUUsRUFBRU4sTUFBTSxDQUFDRSxPQUFPLENBQUNJLEVBQUU7cUJBQ3RCLENBQUMsQ0FBQztpQkFDSixNQUFNLElBQUlOLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLViwrQ0FBUyxFQUFFO29CQUNwQ0ksZ0VBQWlCLENBQUNLLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLENBQUM7aUJBQ25DO2FBQ0Y7WUFDRCxPQUFPSCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JCO0tBQUE7Q0FBQTtBQUVELElBQU1GLEtBQUssR0FBR1gsa0RBQVcsQ0FDdkJNLGlEQUFXLEVBQ1hQLHNEQUFlLENBQUNFLG1EQUFlLEVBQUVTLE1BQU0sQ0FBQyxDQUN6QztBQUVEQyxLQUFLLENBQUNVLFFBQVEsQ0FBQ25CLGtEQUFRLEVBQUUsQ0FBQyxDQUFDO0FBRXBCLFNBQVNvQixVQUFVLEdBQUc7SUFDM0IscUJBQ0UsOERBQUN4QixpREFBUTtRQUFDYSxLQUFLLEVBQUVBLEtBQUs7a0JBRXBCLDRFQUFDWSxLQUFHO1lBQUNDLFNBQVMsRUFBRSxnQkFBZ0I7WUFBRUMsS0FBSyxFQUFFO2dCQUFDQyxTQUFTLEVBQUMsc0JBQXNCO2dCQUFDQyxLQUFLLEVBQUMsTUFBTTthQUFDO3NCQUN0Riw0RUFBQ3BCLG1EQUFVO2dCQUFDa0IsS0FBSyxFQUFFO29CQUFDRyxRQUFRLEVBQUMsUUFBUTtpQkFBQzs7Ozs7b0JBQUc7Ozs7O2dCQUNyQzs7Ozs7WUFFRyxDQUNYO0NBQ0g7QUFWZU4sS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvVmlzdWFsVG9vbC5qcz82MTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7aW5pdEF1dGgsIFNFVF9EQVRBU0VULCBTRVRfRU1BSUwsIFNFVF9TRVJWRVJfSU5GT30gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcbmltcG9ydCBBcHBXcmFwcGVyIGZyb20gJy4vQXBwV3JhcHBlcic7XG4vLyBpbXBvcnQgKiBhcyBzZXJ2aWNlV29ya2VyIGZyb20gJy4vc2VydmljZVdvcmtlcic7XG5pbXBvcnQgbWl4cGFuZWwgZnJvbSAnbWl4cGFuZWwtYnJvd3Nlcic7XG5cbmxldCB1c2VNaXhQYW5lbCA9IGZhbHNlO1xuXG5jb25zdCBsb2dnZXIgPSAoc3RvcmUpID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gU0VUX1NFUlZFUl9JTkZPKSB7XG4gICAgaWYgKGFjdGlvbi5wYXlsb2FkLm1peHBhbmVsKSB7XG4gICAgICBtaXhwYW5lbC5pbml0KGFjdGlvbi5wYXlsb2FkLm1peHBhbmVsKTtcbiAgICAgIHVzZU1peFBhbmVsID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgaWYgKHVzZU1peFBhbmVsKSB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBTRVRfREFUQVNFVCkge1xuICAgICAgbWl4cGFuZWwudHJhY2soJ09wZW4gRGF0YXNldCcsIHtcbiAgICAgICAgbmFtZTogYWN0aW9uLnBheWxvYWQubmFtZSxcbiAgICAgICAgaWQ6IGFjdGlvbi5wYXlsb2FkLmlkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24udHlwZSA9PT0gU0VUX0VNQUlMKSB7XG4gICAgICBtaXhwYW5lbC5pZGVudGlmeShhY3Rpb24ucGF5bG9hZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXh0KGFjdGlvbik7XG59O1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByb290UmVkdWNlcixcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSwgbG9nZ2VyKVxuKTtcblxuc3RvcmUuZGlzcGF0Y2goaW5pdEF1dGgoKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBWaXN1YWxUb29sKCkge1xuICByZXR1cm4oXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICB7Lyo8UmVhY3QuU3RyaWN0TW9kZT4qL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNjcm9sbC13cmFwcGVyXCJ9IHN0eWxlPXt7dHJhbnNmb3JtOlwidHJhbnNsYXRlM2QoMCwgMCwgMClcIix3aWR0aDpcIjEwMCVcIn19PlxuICAgICAgICA8QXBwV3JhcHBlciBzdHlsZT17e292ZXJmbG93Olwic2Nyb2xsXCJ9fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKjwvUmVhY3QuU3RyaWN0TW9kZT4qL31cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rTWlkZGxld2FyZSIsImluaXRBdXRoIiwiU0VUX0RBVEFTRVQiLCJTRVRfRU1BSUwiLCJTRVRfU0VSVkVSX0lORk8iLCJyb290UmVkdWNlciIsIkFwcFdyYXBwZXIiLCJtaXhwYW5lbCIsInVzZU1peFBhbmVsIiwibG9nZ2VyIiwic3RvcmUiLCJuZXh0IiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJpbml0IiwidHJhY2siLCJuYW1lIiwiaWQiLCJpZGVudGlmeSIsImRpc3BhdGNoIiwiVmlzdWFsVG9vbCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwid2lkdGgiLCJvdmVyZmxvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/VisualTool.js\n"));

/***/ })

});