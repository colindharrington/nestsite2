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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar squrrel = \"shit\";\nfunction Fighter() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(0), 2), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedFighter1 = ref1[0], setSelectedFighter = ref1[1];\n    console.log(value);\n    var onChangeStatus = function(selectedFighter) {\n        setSelectedFighter(selectedFighter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedFighter(selectedFighter1);\n    }, [\n        selectedFighter1\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: \"90%\",\n                ml: \"5%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                whileHover: {\n                                    scale: 1.2\n                                },\n                                whileTap: {\n                                    scale: 0.8\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    width: \"100%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        value: value,\n                                        onClick: setValue,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/circleFighter.gif\",\n                                            width: \"100%\",\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                whileHover: {\n                                    scale: 1.2\n                                },\n                                whileTap: {\n                                    scale: 0.8\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    width: \"100%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        onClick: setValue,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/squareFighter.gif\",\n                                            width: \"100%\",\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        item: true,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                            sx: {\n                                width: \"100%\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                sx: {\n                                    width: 300,\n                                    padding: 2\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigation, {\n                                    sx: {\n                                        bgcolor: \"#000000\",\n                                        color: \"#ffffff\",\n                                        borderRadius: 10\n                                    },\n                                    showLabels: true,\n                                    value: value,\n                                    onChange: function(event, newValue) {\n                                        setValue(newValue);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: value\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: value\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Fighter, \"tM1advjSSDYSVvb1zH6QIwOMaVQ=\");\n_c = Fighter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fighter);\nvar _c;\n$RefreshReg$(_c, \"Fighter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07Z0NBQ2JjLGNBQWMsRUFBRSxRQUFRO2dDQUN4QkMsVUFBVSxFQUFFLFFBQVE7NkJBQ3JCO3NDQUVELDRFQUFDNUMsOENBQUc7Z0NBQUM0QixFQUFFLEVBQUU7b0NBQUVDLEtBQUssRUFBRSxHQUFHO29DQUFFZ0IsT0FBTyxFQUFFLENBQUM7aUNBQUU7MENBQ2pDLDRFQUFDbEMsMkRBQWdCO29DQUNmaUIsRUFBRSxFQUFFO3dDQUNGa0IsT0FBTyxFQUFFLFNBQVM7d0NBQ2xCQyxLQUFLLEVBQUUsU0FBUzt3Q0FDaEJDLFlBQVksRUFBRSxFQUFFO3FDQUNqQjtvQ0FDREMsVUFBVTtvQ0FDVjdCLEtBQUssRUFBRUEsS0FBSztvQ0FDWjhCLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBSzt3Q0FDN0IvQixRQUFRLENBQUMrQixRQUFRLENBQUMsQ0FBQztxQ0FDcEI7O3NEQUVELDhEQUFDeEMsaUVBQXNCOzRDQUFDeUMsS0FBSyxFQUFFakMsS0FBSzs7Ozs7Z0RBQUk7c0RBQ3hDLDhEQUFDUixpRUFBc0I7NENBQUN5QyxLQUFLLEVBQUVqQyxLQUFLOzs7OztnREFBSTs7Ozs7O3dDQUN2Qjs7Ozs7b0NBRWY7Ozs7O2dDQUNBOzs7Ozs0QkFDSDs7Ozs7d0JBQ0Y7Ozs7OztnQkFDSDs7Ozs7WUFDRixDQUNOO0NBQ0g7R0EvRVFELE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQWlGaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpZ2h0ZXIuanM/MDAzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIERyYXdlcixcbiAgQnV0dG9uLFxuICBMaXN0LFxuICBEaXZpZGVyLFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1CdXR0b24sXG4gIExpc3RJdGVtSWNvbixcbiAgTGlzdEl0ZW1UZXh0LFxuICBCb3R0b21OYXZpZ2F0aW9uLFxuICBCb3R0b21OYXZpZ2F0aW9uQWN0aW9uLFxuICBTdGFjayxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxubGV0IHNxdXJyZWwgPSBcInNoaXRcIjtcblxuZnVuY3Rpb24gRmlnaHRlcigpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NlbGVjdGVkRmlnaHRlciwgc2V0U2VsZWN0ZWRGaWdodGVyXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc29sZS5sb2codmFsdWUpO1xuICBjb25zdCBvbkNoYW5nZVN0YXR1cyA9IChzZWxlY3RlZEZpZ2h0ZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpZ2h0ZXIoc2VsZWN0ZWRGaWdodGVyKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlnaHRlcihzZWxlY3RlZEZpZ2h0ZXIpO1xuICB9LCBbc2VsZWN0ZWRGaWdodGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCI5MCVcIiwgbWw6IFwiNSVcIiB9fT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICBzY2FsZTogMC44LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YWx1ZT17dmFsdWV9IG9uQ2xpY2s9e3NldFZhbHVlfT5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NpcmNsZUZpZ2h0ZXIuZ2lmXCIgd2lkdGg9XCIxMDAlXCIgYWx0PVwiZXJyb3JcIj48L2ltZz5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICBzY2FsZTogMC44LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzZXRWYWx1ZX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zcXVhcmVGaWdodGVyLmdpZlwiIHdpZHRoPVwiMTAwJVwiIGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPFN0YWNrXG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IDMwMCwgcGFkZGluZzogMiB9fT5cbiAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvblxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzaG93TGFiZWxzXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIGxhYmVsPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgICAgICAgICAgey8qIDxUeXBvZ3JhcGh5PntzZWxlY3RlZEZpZ2h0ZXJ9PC9UeXBvZ3JhcGh5PiAqL31cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ2h0ZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJEcmF3ZXIiLCJCdXR0b24iLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJCb3R0b21OYXZpZ2F0aW9uIiwiQm90dG9tTmF2aWdhdGlvbkFjdGlvbiIsIlN0YWNrIiwiUmVhY3QiLCJtb3Rpb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNxdXJyZWwiLCJGaWdodGVyIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNlbGVjdGVkRmlnaHRlciIsInNldFNlbGVjdGVkRmlnaHRlciIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZVN0YXR1cyIsImRpdiIsInN4Iiwid2lkdGgiLCJtbCIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJtZCIsIndoaWxlSG92ZXIiLCJzY2FsZSIsIndoaWxlVGFwIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJiZ2NvbG9yIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJzaG93TGFiZWxzIiwib25DaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Fighter.js\n");

/***/ })

});