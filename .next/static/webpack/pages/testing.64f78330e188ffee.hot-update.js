"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/testing",{

/***/ "./components/Fighter.js":
/*!*******************************!*\
  !*** ./components/Fighter.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar squrrel = \"shit\";\nfunction Fighter() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(0), 2), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedFighter1 = ref1[0], setSelectedFighter = ref1[1];\n    var onChangeStatus = function(selectedFighter) {\n        setSelectedFighter(selectedFighter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedFighter(selectedFighter1);\n    }, [\n        selectedFighter1\n    ]);\n    if (value == 0) {\n        var size1 = \"90%\";\n        var size2 = \"80%\";\n        var descript1 = \"Squ\\u2206r\\u2211\";\n        var descript2 = \"\";\n    }\n    if (value == 1) {\n        var size1 = \"80%\";\n        var size2 = \"90%\";\n        var descript1 = \"\";\n        var descript2 = \"\\xa9\\u0131r\\xc7\\u222B\\u2211\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: \"90%\",\n                ml: \"5%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/cube_small.gif\",\n                            width: \"10%\",\n                            alt: \"error\"\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        item: true,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                            sx: {\n                                width: \"100%\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                sx: {\n                                    width: 300,\n                                    padding: 2\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigation, {\n                                    sx: {\n                                        // bgcolor: \"#000000\",\n                                        // color: \"#ffffff\",\n                                        borderRadius: 10\n                                    },\n                                    showLabels: true,\n                                    value: value,\n                                    onChange: function(event, newValue) {\n                                        setValue(newValue);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: \"circle\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: \"square\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        disableRipple: true,\n                                        value: 1,\n                                        onClick: function(event, newValue) {\n                                            setValue(0);\n                                            console.log(value);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/crystal.gif\",\n                                            width: size1,\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 104,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        disableRipple: true,\n                                        value: 0,\n                                        onClick: function(event, newValue) {\n                                            setValue(1);\n                                            console.log(value);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/squareFighter.gif\",\n                                            width: size2,\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 126,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 128,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Fighter, \"tM1advjSSDYSVvb1zH6QIwOMaVQ=\");\n_c = Fighter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fighter);\nvar _c;\n$RefreshReg$(_c, \"Fighter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUQsNEVBQUNjLEtBQUc7NENBQUNDLEdBQUcsRUFBQyxvQkFBb0I7NENBQUNKLEtBQUssRUFBRUwsS0FBSzs0Q0FBRVUsR0FBRyxFQUFDLE9BQU87Ozs7O2dEQUFPOzs7Ozs0Q0FDdkQ7a0RBQ1QsOERBQUNuQyxxREFBVTt3Q0FBQ3NELE9BQU8sRUFBQyxJQUFJO2tEQUFFM0IsU0FBUzs7Ozs7NENBQWM7Ozs7OztvQ0FDN0M7Ozs7O2dDQUVEOzs7Ozs7d0JBQ0Y7Ozs7OztnQkFDSDs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FoSFFULE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQWtIaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpZ2h0ZXIuanM/MDAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIERyYXdlcixcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBEaXZpZGVyLFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1CdXR0b24sXG4gIExpc3RJdGVtSWNvbixcbiAgTGlzdEl0ZW1UZXh0LFxuICBCb3R0b21OYXZpZ2F0aW9uLFxuICBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uLFxuICBTdGFjayxcbiAgTGluayxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxubGV0IHNxdXJyZWwgPSBcInNoaXRcIjtcblxuZnVuY3Rpb24gRmlnaHRlcigpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkRmlnaHRlciwgc2V0U2VsZWN0ZWRGaWdodGVyXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3Qgb25DaGFuZ2VTdGF0dXMgPSAoc2VsZWN0ZWRGaWdodGVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWdodGVyKHNlbGVjdGVkRmlnaHRlcik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpZ2h0ZXIoc2VsZWN0ZWRGaWdodGVyKTtcbiAgfSwgW3NlbGVjdGVkRmlnaHRlcl0pO1xuXG4gIGlmICh2YWx1ZSA9PSAwKSB7XG4gICAgdmFyIHNpemUxID0gXCI5MCVcIjtcbiAgICB2YXIgc2l6ZTIgPSBcIjgwJVwiO1xuICAgIHZhciBkZXNjcmlwdDEgPSBcIlNxdeKIhnLiiJFcIjtcbiAgICB2YXIgZGVzY3JpcHQyID0gXCJcIjtcbiAgfVxuICBpZiAodmFsdWUgPT0gMSkge1xuICAgIHZhciBzaXplMSA9IFwiODAlXCI7XG4gICAgdmFyIHNpemUyID0gXCI5MCVcIjtcbiAgICB2YXIgZGVzY3JpcHQxID0gXCJcIjtcbiAgICB2YXIgZGVzY3JpcHQyID0gXCLCqcSxcsOH4oir4oiRXCI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiBcIjkwJVwiLCBtbDogXCI1JVwiIH19PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9jdWJlX3NtYWxsLmdpZlwiIHdpZHRoPVwiMTAlXCIgYWx0PVwiZXJyb3JcIj48L2ltZz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IDMwMCwgcGFkZGluZzogMiB9fT5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgLy8gYmdjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzaG93TGFiZWxzXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwic3F1YXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5PntzZWxlY3RlZEZpZ2h0ZXJ9PC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICBzY2FsZTogMC44LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPiAqL31cbiAgICAgICAgICAgIDxCb3ggd2lkdGg9e1wiMTAwJVwifT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcbiAgICAgICAgICAgICAgICB2YWx1ZT17MX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRWYWx1ZSgwKTtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY3J5c3RhbC5naWZcIiB3aWR0aD17c2l6ZTF9IGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57ZGVzY3JpcHQxfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuOCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgICAgICAgICAgdmFsdWU9ezB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoMSk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NxdWFyZUZpZ2h0ZXIuZ2lmXCIgd2lkdGg9e3NpemUyfSBhbHQ9XCJlcnJvclwiPjwvaW1nPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2Rlc2NyaXB0Mn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHsvKiA8L21vdGlvbi5kaXY+ICovfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ2h0ZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJEcmF3ZXIiLCJCdXR0b24iLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJCb3R0b21OYXZpZ2F0aW9uIiwiQm90dG9tTmF2aWdhdGlvbkFjdGlvbiIsIlN0YWNrIiwiTGluayIsIlJlYWN0IiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzcXVycmVsIiwiRmlnaHRlciIsInZhbHVlIiwic2V0VmFsdWUiLCJzZWxlY3RlZEZpZ2h0ZXIiLCJzZXRTZWxlY3RlZEZpZ2h0ZXIiLCJvbkNoYW5nZVN0YXR1cyIsInNpemUxIiwic2l6ZTIiLCJkZXNjcmlwdDEiLCJkZXNjcmlwdDIiLCJkaXYiLCJzeCIsIndpZHRoIiwibWwiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwiY29udGFpbmVyIiwiaXRlbSIsInhzIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInNob3dMYWJlbHMiLCJvbkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJsYWJlbCIsInNwYWNpbmciLCJtZCIsImRpc2FibGVSaXBwbGUiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Fighter.js\n");

/***/ })

});