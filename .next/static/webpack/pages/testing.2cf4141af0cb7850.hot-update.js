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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar squrrel = \"shit\";\nfunction Fighter() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(0), 2), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedFighter1 = ref1[0], setSelectedFighter = ref1[1];\n    var onChangeStatus = function(selectedFighter) {\n        setSelectedFighter(selectedFighter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedFighter(selectedFighter1);\n    }, [\n        selectedFighter1\n    ]);\n    if (value == 0) {\n        var size1 = \"80%\";\n        var size2 = \"50%\";\n        var descript1 = \"Squ\\u2206r\\u2211\";\n        var descript2 = \"\";\n    }\n    if (value == 1) {\n        var size1 = \"50%\";\n        var size2 = \"95%\";\n        var descript1 = \"\";\n        var descript2 = \"\\xa9\\u0131r\\xc7\\u222B\\u2211\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: \"100vw\",\n                height: \"100vh\",\n                background: \"linear-gradient( #222222,#000000, #222222)\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                    direction: \"column\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                        href: \"/\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/cube_small.gif\",\n                                            width: \"5%\",\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Chip, {\n                                    label: \"Select Your Style\",\n                                    color: \"info\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                                sx: {\n                                    width: \"100%\",\n                                    justifyContent: \"center\",\n                                    alignItems: \"center\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    sx: {\n                                        width: 300,\n                                        padding: 2\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigation, {\n                                        sx: {\n                                            bgcolor: \"#000000\",\n                                            borderRadius: 10\n                                        },\n                                        showLabels: true,\n                                        value: value,\n                                        onChange: function(event, newValue) {\n                                            setValue(newValue);\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                                label: \"Magic\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                                label: \"Blade\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 1,\n                    sx: {\n                        display: \"flex\",\n                        alignItems: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                initial: {\n                                    scale: 3\n                                },\n                                animate: {\n                                    scale: 1\n                                },\n                                transition: {\n                                    type: \"spring\",\n                                    stiffness: 150,\n                                    damping: 30\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                    width: \"100%\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                        disableRipple: true,\n                                        value: 1,\n                                        onClick: function(event, newValue) {\n                                            setValue(0);\n                                        },\n                                        style: {\n                                            backgroundColor: \"transparent\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/crystal.gif\",\n                                            width: size1,\n                                            alt: \"error\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 125,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    disableRipple: true,\n                                    value: 0,\n                                    onClick: function(event, newValue) {\n                                        setValue(1);\n                                    },\n                                    style: {\n                                        backgroundColor: \"transparent\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/dagger.gif\",\n                                        width: size2,\n                                        alt: \"error\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 131,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Fighter, \"tM1advjSSDYSVvb1zH6QIwOMaVQ=\");\n_c = Fighter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fighter);\nvar _c;\n$RefreshReg$(_c, \"Fighter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNULEtBQUssRUFBRU4sS0FBSzs0Q0FBRWdCLEdBQUcsRUFBQyxPQUFPOzs7OztnREFBTzs7Ozs7NENBQ2pEOzs7Ozt3Q0FDTDs7Ozs7b0NBQ0s7Ozs7O2dDQUNSO3NDQUNQLDhEQUFDMUMsK0NBQUk7NEJBQUNvQyxJQUFJOzRCQUFDQyxFQUFFLEVBQUUsRUFBRTs0QkFBRW1CLEVBQUUsRUFBRSxDQUFDO3NDQUN0Qiw0RUFBQ3pELDhDQUFHO2dDQUFDaUMsS0FBSyxFQUFFLE1BQU07MENBQ2hCLDRFQUFDN0IsaURBQU07b0NBQ0w2RCxhQUFhO29DQUNiM0MsS0FBSyxFQUFFLENBQUM7b0NBQ1I0QyxPQUFPLEVBQUUsU0FBQ2IsS0FBSyxFQUFFQyxRQUFRLEVBQUs7d0NBQzVCL0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FDQUNiO29DQUNENEMsS0FBSyxFQUFFO3dDQUFFQyxlQUFlLEVBQUUsYUFBYTtxQ0FBRTs4Q0FFekMsNEVBQUMzQixLQUFHO3dDQUFDQyxHQUFHLEVBQUMsYUFBYTt3Q0FBQ1QsS0FBSyxFQUFFTCxLQUFLO3dDQUFFZSxHQUFHLEVBQUMsT0FBTzs7Ozs7NENBQU87Ozs7O3dDQUNoRDs7Ozs7b0NBQ0w7Ozs7O2dDQUNEOzs7Ozs7d0JBQ0Y7Ozs7OztnQkFDSDs7Ozs7WUFFRixDQUNOO0NBQ0g7R0E1SFF0QixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUE4SGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWdodGVyLmpzPzAwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxuICBEcmF3ZXIsXG4gIEJ1dHRvbixcbiAgTGlzdCxcbiAgRGl2aWRlcixcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtQnV0dG9uLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbiAgQm90dG9tTmF2aWdhdGlvbixcbiAgQm90dG9tTmF2aWdhdGlvbkFjdGlvbixcbiAgU3RhY2ssXG4gIExpbmssXG4gIENoaXAsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmxldCBzcXVycmVsID0gXCJzaGl0XCI7XG5cbmZ1bmN0aW9uIEZpZ2h0ZXIoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpZ2h0ZXIsIHNldFNlbGVjdGVkRmlnaHRlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlU3RhdHVzID0gKHNlbGVjdGVkRmlnaHRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlnaHRlcihzZWxlY3RlZEZpZ2h0ZXIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWdodGVyKHNlbGVjdGVkRmlnaHRlcik7XG4gIH0sIFtzZWxlY3RlZEZpZ2h0ZXJdKTtcblxuICBpZiAodmFsdWUgPT0gMCkge1xuICAgIHZhciBzaXplMSA9IFwiODAlXCI7XG4gICAgdmFyIHNpemUyID0gXCI1MCVcIjtcbiAgICB2YXIgZGVzY3JpcHQxID0gXCJTcXXiiIZy4oiRXCI7XG4gICAgdmFyIGRlc2NyaXB0MiA9IFwiXCI7XG4gIH1cbiAgaWYgKHZhbHVlID09IDEpIHtcbiAgICB2YXIgc2l6ZTEgPSBcIjUwJVwiO1xuICAgIHZhciBzaXplMiA9IFwiOTUlXCI7XG4gICAgdmFyIGRlc2NyaXB0MSA9IFwiXCI7XG4gICAgdmFyIGRlc2NyaXB0MiA9IFwiwqnEsXLDh+KIq+KIkVwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoICMyMjIyMjIsIzAwMDAwMCwgIzIyMjIyMilcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wiY29sdW1uXCJ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2N1YmVfc21hbGwuZ2lmXCIgd2lkdGg9XCI1JVwiIGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8Q2hpcCBsYWJlbD1cIlNlbGVjdCBZb3VyIFN0eWxlXCIgY29sb3I9XCJpbmZvXCIgLz5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGJnY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHNob3dMYWJlbHNcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJNYWdpY1wiIC8+XG4gICAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cIkJsYWRlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0JvdHRvbU5hdmlnYXRpb24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBzcGFjaW5nPXsxfVxuICAgICAgICAgIHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH19XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMyB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgICAgIHN0aWZmbmVzczogMTUwLFxuICAgICAgICAgICAgICAgIGRhbXBpbmc6IDMwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAgICAgdmFsdWU9ezF9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKDApO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY3J5c3RhbC5naWZcIiB3aWR0aD17c2l6ZTF9IGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgPEJveCB3aWR0aD17XCIxMDAlXCJ9PlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxuICAgICAgICAgICAgICAgIHZhbHVlPXswfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldFZhbHVlKDEpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2RhZ2dlci5naWZcIiB3aWR0aD17c2l6ZTJ9IGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0JveD5cbiAgICAgIHsvKiA8L0JveD4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ2h0ZXI7XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJEcmF3ZXIiLCJCdXR0b24iLCJMaXN0IiwiRGl2aWRlciIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJCb3R0b21OYXZpZ2F0aW9uIiwiQm90dG9tTmF2aWdhdGlvbkFjdGlvbiIsIlN0YWNrIiwiTGluayIsIkNoaXAiLCJSZWFjdCIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3F1cnJlbCIsIkZpZ2h0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwic2VsZWN0ZWRGaWdodGVyIiwic2V0U2VsZWN0ZWRGaWdodGVyIiwib25DaGFuZ2VTdGF0dXMiLCJzaXplMSIsInNpemUyIiwiZGVzY3JpcHQxIiwiZGVzY3JpcHQyIiwiZGl2Iiwic3giLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJjb250YWluZXIiLCJpdGVtIiwieHMiLCJkaXJlY3Rpb24iLCJocmVmIiwiaW1nIiwic3JjIiwiYWx0IiwibGFiZWwiLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJiZ2NvbG9yIiwiYm9yZGVyUmFkaXVzIiwic2hvd0xhYmVscyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsInNwYWNpbmciLCJkaXNwbGF5IiwibWQiLCJpbml0aWFsIiwic2NhbGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZGlzYWJsZVJpcHBsZSIsIm9uQ2xpY2siLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Fighter.js\n");

/***/ })

});