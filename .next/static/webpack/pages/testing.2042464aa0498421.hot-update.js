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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar squrrel = \"shit\";\nfunction Fighter() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(0), 2), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedFighter1 = ref1[0], setSelectedFighter = ref1[1];\n    var onChangeStatus = function(selectedFighter) {\n        setSelectedFighter(selectedFighter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedFighter(selectedFighter1);\n    }, [\n        selectedFighter1\n    ]);\n    if (value == 0) {\n        var size1 = \"90%\";\n        var size2 = \"80%\";\n        var descript1 = \"Squ\\u2206r\\u2211\";\n        var descript2 = \"\";\n    }\n    if (value == 1) {\n        var size1 = \"80%\";\n        var size2 = \"90%\";\n        var descript1 = \"\";\n        var descript2 = \"\\xa9\\u0131r\\xc7\\u222B\\u2211\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: \"90%\",\n                ml: \"5%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/cube_small.gif\",\n                                    width: \"5%\",\n                                    alt: \"error\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                sx: {\n                                    width: \"100%\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    sx: {\n                                        width: 300,\n                                        padding: 2\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigation, {\n                                        sx: {\n                                            bgcolor: \"#000000\",\n                                            color: \"#ffffff\",\n                                            borderRadius: 10\n                                        },\n                                        showLabels: true,\n                                        value: value,\n                                        onChange: function(event, newValue) {\n                                            setValue(newValue);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                                label: \"Magic\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                                label: \"Blade\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        disableRipple: true,\n                                        value: 1,\n                                        onClick: function(event, newValue) {\n                                            setValue(0);\n                                            console.log(value);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/crystal.gif\",\n                                            width: size1,\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        disableRipple: true,\n                                        value: 0,\n                                        onClick: function(event, newValue) {\n                                            setValue(1);\n                                            console.log(value);\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/dagger.gif\",\n                                            width: size2,\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Fighter, \"tM1advjSSDYSVvb1zH6QIwOMaVQ=\");\n_c = Fighter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fighter);\nvar _c;\n$RefreshReg$(_c, \"Fighter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7NENBQ1prQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3BDLEtBQUssQ0FBQyxDQUFDO3lDQUNwQjtrREFFRCw0RUFBQ2lCLEtBQUc7NENBQUNDLEdBQUcsRUFBQyxhQUFhOzRDQUFDUCxLQUFLLEVBQUVMLEtBQUs7NENBQUVhLEdBQUcsRUFBQyxPQUFPOzs7OztnREFBTzs7Ozs7NENBQ2hEO2tEQUNULDhEQUFDdEMscURBQVU7d0NBQUN3RCxPQUFPLEVBQUMsSUFBSTtrREFBRTdCLFNBQVM7Ozs7OzRDQUFjOzs7Ozs7b0NBQzdDOzs7OztnQ0FFRDs7Ozs7O3dCQUNGOzs7Ozs7Z0JBQ0g7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBckhRVCxPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUF1SGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWdodGVyLmpzPzAwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxuICBEcmF3ZXIsXG4gIEJ1dHRvbixcbiAgTGlzdCxcbiAgRGl2aWRlcixcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtQnV0dG9uLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbiAgQm90dG9tTmF2aWdhdGlvbixcbiAgQm90dG9tTmF2aWdhdGlvbkFjdGlvbixcbiAgU3RhY2ssXG4gIExpbmssXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmxldCBzcXVycmVsID0gXCJzaGl0XCI7XG5cbmZ1bmN0aW9uIEZpZ2h0ZXIoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpZ2h0ZXIsIHNldFNlbGVjdGVkRmlnaHRlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlU3RhdHVzID0gKHNlbGVjdGVkRmlnaHRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlnaHRlcihzZWxlY3RlZEZpZ2h0ZXIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWdodGVyKHNlbGVjdGVkRmlnaHRlcik7XG4gIH0sIFtzZWxlY3RlZEZpZ2h0ZXJdKTtcblxuICBpZiAodmFsdWUgPT0gMCkge1xuICAgIHZhciBzaXplMSA9IFwiOTAlXCI7XG4gICAgdmFyIHNpemUyID0gXCI4MCVcIjtcbiAgICB2YXIgZGVzY3JpcHQxID0gXCJTcXXiiIZy4oiRXCI7XG4gICAgdmFyIGRlc2NyaXB0MiA9IFwiXCI7XG4gIH1cbiAgaWYgKHZhbHVlID09IDEpIHtcbiAgICB2YXIgc2l6ZTEgPSBcIjgwJVwiO1xuICAgIHZhciBzaXplMiA9IFwiOTAlXCI7XG4gICAgdmFyIGRlc2NyaXB0MSA9IFwiXCI7XG4gICAgdmFyIGRlc2NyaXB0MiA9IFwiwqnEsXLDh+KIq+KIkVwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCI5MCVcIiwgbWw6IFwiNSVcIiB9fT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2N1YmVfc21hbGwuZ2lmXCIgd2lkdGg9XCI1JVwiIGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzaG93TGFiZWxzXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPVwiTWFnaWNcIiAvPlxuICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJCbGFkZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeT57c2VsZWN0ZWRGaWdodGVyfTwvVHlwb2dyYXBoeT4gKi99XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuOCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXG4gICAgICAgICAgICAgICAgdmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoMCk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NyeXN0YWwuZ2lmXCIgd2lkdGg9e3NpemUxfSBhbHQ9XCJlcnJvclwiPjwvaW1nPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2Rlc2NyaXB0MX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHsvKiA8L21vdGlvbi5kaXY+ICovfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgey8qIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fVxuICAgICAgICAgICAgICB3aGlsZVRhcD17e1xuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjgsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+ICovfVxuICAgICAgICAgICAgPEJveCB3aWR0aD17XCIxMDAlXCJ9PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAgIHZhbHVlPXswfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFZhbHVlKDEpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9kYWdnZXIuZ2lmXCIgd2lkdGg9e3NpemUyfSBhbHQ9XCJlcnJvclwiPjwvaW1nPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2Rlc2NyaXB0Mn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIHsvKiA8L21vdGlvbi5kaXY+ICovfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ2h0ZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJEcmF3ZXIiLCJCdXR0b24iLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJCb3R0b21OYXZpZ2F0aW9uIiwiQm90dG9tTmF2aWdhdGlvbkFjdGlvbiIsIlN0YWNrIiwiTGluayIsIlJlYWN0IiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzcXVycmVsIiwiRmlnaHRlciIsInZhbHVlIiwic2V0VmFsdWUiLCJzZWxlY3RlZEZpZ2h0ZXIiLCJzZXRTZWxlY3RlZEZpZ2h0ZXIiLCJvbkNoYW5nZVN0YXR1cyIsInNpemUxIiwic2l6ZTIiLCJkZXNjcmlwdDEiLCJkZXNjcmlwdDIiLCJkaXYiLCJzeCIsIndpZHRoIiwibWwiLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImJnY29sb3IiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInNob3dMYWJlbHMiLCJvbkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJsYWJlbCIsInNwYWNpbmciLCJtZCIsImRpc2FibGVSaXBwbGUiLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Fighter.js\n");

/***/ })

});