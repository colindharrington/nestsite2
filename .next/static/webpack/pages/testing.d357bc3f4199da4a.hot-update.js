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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar squrrel = \"shit\";\nfunction Fighter() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(0), 2), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedFighter1 = ref1[0], setSelectedFighter = ref1[1];\n    var onChangeStatus = function(selectedFighter) {\n        setSelectedFighter(selectedFighter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedFighter(selectedFighter1);\n    }, [\n        selectedFighter1\n    ]);\n    if (value == 1) {\n        var size1 = \"100%\";\n        var size2 = \"80%\";\n        var descript1 = \"\";\n        var descript2 = \"Squar\\u2211\";\n    }\n    if (value == 0) {\n        var size1 = \"80%\";\n        var size2 = \"100%\";\n        var descript1 = \"Circle\";\n        var descript2 = \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: \"90%\",\n                ml: \"5%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/circleFighter.gif\",\n                                        width: size1,\n                                        alt: \"error\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/squareFighter.gif\",\n                                        width: size2,\n                                        alt: \"error\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        item: true,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                            sx: {\n                                width: \"100%\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                sx: {\n                                    width: 300,\n                                    padding: 2\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigation, {\n                                    sx: {\n                                        // bgcolor: \"#000000\",\n                                        // color: \"#ffffff\",\n                                        borderRadius: 10\n                                    },\n                                    showLabels: true,\n                                    value: value,\n                                    onChange: function(event, newValue) {\n                                        setValue(newValue);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: \"circle\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: \"square\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Fighter, \"tM1advjSSDYSVvb1zH6QIwOMaVQ=\");\n_c = Fighter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fighter);\nvar _c;\n$RefreshReg$(_c, \"Fighter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07Z0NBQ2JXLGNBQWMsRUFBRSxRQUFRO2dDQUN4QkMsVUFBVSxFQUFFLFFBQVE7NkJBQ3JCO3NDQUVELDRFQUFDM0MsOENBQUc7Z0NBQUM4QixFQUFFLEVBQUU7b0NBQUVDLEtBQUssRUFBRSxHQUFHO29DQUFFYSxPQUFPLEVBQUUsQ0FBQztpQ0FBRTswQ0FDakMsNEVBQUNqQywyREFBZ0I7b0NBQ2ZtQixFQUFFLEVBQUU7d0NBQ0Ysc0JBQXNCO3dDQUN0QixvQkFBb0I7d0NBQ3BCZSxZQUFZLEVBQUUsRUFBRTtxQ0FDakI7b0NBQ0RDLFVBQVU7b0NBQ1YxQixLQUFLLEVBQUVBLEtBQUs7b0NBQ1oyQixRQUFRLEVBQUUsU0FBQ0MsS0FBSyxFQUFFQyxRQUFRLEVBQUs7d0NBQzdCNUIsUUFBUSxDQUFDNEIsUUFBUSxDQUFDLENBQUM7cUNBQ3BCOztzREFFRCw4REFBQ3JDLGlFQUFzQjs0Q0FBQ3NDLEtBQUssRUFBQyxRQUFROzs7OztnREFBRztzREFDekMsOERBQUN0QyxpRUFBc0I7NENBQUNzQyxLQUFLLEVBQUMsUUFBUTs7Ozs7Z0RBQUc7Ozs7Ozt3Q0FDeEI7Ozs7O29DQUVmOzs7OztnQ0FDQTs7Ozs7NEJBQ0g7Ozs7O3dCQUNGOzs7Ozs7Z0JBQ0g7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBekZRL0IsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBMkZoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmlnaHRlci5qcz8wMDMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgR3JpZCxcbiAgVHlwb2dyYXBoeSxcbiAgRHJhd2VyLFxuICBCdXR0b24sXG4gIExpc3QsXG4gIERpdmlkZXIsXG4gIExpc3RJdGVtLFxuICBMaXN0SXRlbUJ1dHRvbixcbiAgTGlzdEl0ZW1JY29uLFxuICBMaXN0SXRlbVRleHQsXG4gIEJvdHRvbU5hdmlnYXRpb24sXG4gIEJvdHRvbU5hdmlnYXRpb25BY3Rpb24sXG4gIFN0YWNrLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5sZXQgc3F1cnJlbCA9IFwic2hpdFwiO1xuXG5mdW5jdGlvbiBGaWdodGVyKCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbc2VsZWN0ZWRGaWdodGVyLCBzZXRTZWxlY3RlZEZpZ2h0ZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvbkNoYW5nZVN0YXR1cyA9IChzZWxlY3RlZEZpZ2h0ZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZEZpZ2h0ZXIoc2VsZWN0ZWRGaWdodGVyKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlnaHRlcihzZWxlY3RlZEZpZ2h0ZXIpO1xuICB9LCBbc2VsZWN0ZWRGaWdodGVyXSk7XG5cbiAgaWYgKHZhbHVlID09IDEpIHtcbiAgICB2YXIgc2l6ZTEgPSBcIjEwMCVcIjtcbiAgICB2YXIgc2l6ZTIgPSBcIjgwJVwiO1xuICAgIHZhciBkZXNjcmlwdDEgPSBcIlwiO1xuICAgIHZhciBkZXNjcmlwdDIgPSBcIlNxdWFy4oiRXCI7XG4gIH1cbiAgaWYgKHZhbHVlID09IDApIHtcbiAgICB2YXIgc2l6ZTEgPSBcIjgwJVwiO1xuICAgIHZhciBzaXplMiA9IFwiMTAwJVwiO1xuICAgIHZhciBkZXNjcmlwdDEgPSBcIkNpcmNsZVwiO1xuICAgIHZhciBkZXNjcmlwdDIgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCI5MCVcIiwgbWw6IFwiNSVcIiB9fT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuOCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2NpcmNsZUZpZ2h0ZXIuZ2lmXCIgd2lkdGg9e3NpemUxfSBhbHQ9XCJlcnJvclwiPjwvaW1nPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57ZGVzY3JpcHQxfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICB7LyogPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19XG4gICAgICAgICAgICAgIHdoaWxlVGFwPXt7XG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuOCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICA8Qm94IHdpZHRoPXtcIjEwMCVcIn0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3NxdWFyZUZpZ2h0ZXIuZ2lmXCIgd2lkdGg9e3NpemUyfSBhbHQ9XCJlcnJvclwiPjwvaW1nPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57ZGVzY3JpcHQyfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgey8qIDwvbW90aW9uLmRpdj4gKi99XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8U3RhY2tcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveCBzeD17eyB3aWR0aDogMzAwLCBwYWRkaW5nOiAyIH19PlxuICAgICAgICAgICAgICAgIDxCb3R0b21OYXZpZ2F0aW9uXG4gICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAvLyBiZ2NvbG9yOiBcIiMwMDAwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHNob3dMYWJlbHNcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJjaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25BY3Rpb24gbGFiZWw9XCJzcXVhcmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvQm90dG9tTmF2aWdhdGlvbj5cbiAgICAgICAgICAgICAgICB7LyogPFR5cG9ncmFwaHk+e3NlbGVjdGVkRmlnaHRlcn08L1R5cG9ncmFwaHk+ICovfVxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlnaHRlcjtcbiJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwiVHlwb2dyYXBoeSIsIkRyYXdlciIsIkJ1dHRvbiIsIkxpc3QiLCJEaXZpZGVyIiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIkJvdHRvbU5hdmlnYXRpb24iLCJCb3R0b21OYXZpZ2F0aW9uQWN0aW9uIiwiU3RhY2siLCJSZWFjdCIsIm1vdGlvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3F1cnJlbCIsIkZpZ2h0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwic2VsZWN0ZWRGaWdodGVyIiwic2V0U2VsZWN0ZWRGaWdodGVyIiwib25DaGFuZ2VTdGF0dXMiLCJzaXplMSIsInNpemUyIiwiZGVzY3JpcHQxIiwiZGVzY3JpcHQyIiwiZGl2Iiwic3giLCJ3aWR0aCIsIm1sIiwiY29udGFpbmVyIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsIm1kIiwiaW1nIiwic3JjIiwiYWx0IiwidmFyaWFudCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJzaG93TGFiZWxzIiwib25DaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Fighter.js\n");

/***/ })

});