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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar squrrel = \"shit\";\nfunction Fighter() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(0), 2), value = ref[0], setValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), selectedFighter1 = ref1[0], setSelectedFighter = ref1[1];\n    var onChangeStatus = function(selectedFighter) {\n        setSelectedFighter(selectedFighter);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setSelectedFighter(selectedFighter1);\n    }, [\n        selectedFighter1\n    ]);\n    if (value == 1) {\n        var size1 = \"100%\";\n        var size2 = \"80%\";\n        var descript1 = \"\";\n        var descript2 = \"Squ\\u2206r\\u2211\";\n    }\n    if (value == 0) {\n        var size1 = \"80%\";\n        var size2 = \"100%\";\n        var descript1 = \"\\xa9\\u0131r\\xc7\\u222B\\u2211\";\n        var descript2 = \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            sx: {\n                width: \"90%\",\n                ml: \"5%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    spacing: 1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/circleFighter.gif\",\n                                        width: size1,\n                                        alt: \"error\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript1\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                            item: true,\n                            xs: 12,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                width: \"100%\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/squareFighter.gif\",\n                                        width: size2,\n                                        alt: \"error\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        variant: \"h6\",\n                                        children: descript2\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                    container: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        item: true,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                            sx: {\n                                width: \"100%\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                                sx: {\n                                    width: 300,\n                                    padding: 2\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigation, {\n                                    sx: {\n                                        // bgcolor: \"#000000\",\n                                        // color: \"#ffffff\",\n                                        borderRadius: 10\n                                    },\n                                    showLabels: true,\n                                    value: value,\n                                    onChange: function(event, newValue) {\n                                        setValue(newValue);\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: \"circle\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 101,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.BottomNavigationAction, {\n                                            label: \"square\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Fighter.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Fighter, \"tM1advjSSDYSVvb1zH6QIwOMaVQ=\");\n_c = Fighter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fighter);\nvar _c;\n$RefreshReg$(_c, \"Fighter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpZ2h0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXVCO0FBQ1E7QUFDUTtBQUNLOztBQUU1QyxJQUFJa0IsT0FBTyxHQUFHLE1BQU07QUFFcEIsU0FBU0MsT0FBTyxHQUFHOztJQUNqQixJQUEwQkwsR0FBaUIsa0JBQWpCQSwyQ0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFwQ00sS0FBSyxHQUFjTixHQUFpQixHQUEvQixFQUFFTyxRQUFRLEdBQUlQLEdBQWlCLEdBQXJCO0lBQ3RCLElBQThDRyxJQUFVLEdBQVZBLCtDQUFRLEVBQUUsRUF4QjFELGdCQXdCd0IsR0FBd0JBLElBQVUsR0FBbEMsRUF4QnhCLGtCQXdCNEMsR0FBSUEsSUFBVSxHQUFkO0lBRTFDLElBQU1PLGNBQWMsR0FBRyxTQUFDRixlQUFlLEVBQUs7UUFDMUNDLGtCQUFrQixDQUFDRCxlQUFlLENBQUMsQ0FBQztLQUNyQztJQUVETixnREFBUyxDQUFDLFdBQU07UUFDZE8sa0JBQWtCLENBQUNELGdCQUFlLENBQUMsQ0FBQztLQUNyQyxFQUFFO1FBQUNBLGdCQUFlO0tBQUMsQ0FBQyxDQUFDO0lBRXRCLElBQUlGLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDZCxJQUFJSyxLQUFLLEdBQUcsTUFBTTtRQUNsQixJQUFJQyxLQUFLLEdBQUcsS0FBSztRQUNqQixJQUFJQyxTQUFTLEdBQUcsRUFBRTtRQUNsQixJQUFJQyxTQUFTLEdBQUcsa0JBQVE7S0FDckI7SUFDTCxJQUFJUixLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ2QsSUFBSUssS0FBSyxHQUFHLEtBQUs7UUFDakIsSUFBSUMsS0FBSyxHQUFHLE1BQU07UUFDbEIsSUFBSUMsU0FBUyxHQUFHLDZCQUFRO1FBQ3hCLElBQUlDLFNBQVMsR0FBRyxFQUFFO0tBQ25CO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUM3Qiw4Q0FBRztZQUFDOEIsRUFBRSxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsS0FBSztnQkFBRUMsRUFBRSxFQUFFLElBQUk7YUFBRTs7OEJBQ2pDLDhEQUFDL0IsK0NBQUk7b0JBQUNnQyxTQUFTO29CQUFDQyxPQUFPLEVBQUUsQ0FBQzs7c0NBQ3hCLDhEQUFDakMsK0NBQUk7NEJBQUNrQyxJQUFJOzRCQUFDQyxFQUFFLEVBQUUsRUFBRTs0QkFBRUMsRUFBRSxFQUFFLENBQUM7c0NBT3RCLDRFQUFDckMsOENBQUc7Z0NBQUMrQixLQUFLLEVBQUUsTUFBTTs7a0RBQ2hCLDhEQUFDTyxLQUFHO3dDQUFDQyxHQUFHLEVBQUMsb0JBQW9CO3dDQUFDUixLQUFLLEVBQUVOLEtBQUs7d0NBQUVlLEdBQUcsRUFBQyxPQUFPOzs7Ozs0Q0FBTztrREFDOUQsOERBQUN0QyxxREFBVTt3Q0FBQ3VDLE9BQU8sRUFBQyxJQUFJO2tEQUFFZCxTQUFTOzs7Ozs0Q0FBYzs7Ozs7O29DQUM3Qzs7Ozs7Z0NBRUQ7c0NBQ1AsOERBQUMxQiwrQ0FBSTs0QkFBQ2tDLElBQUk7NEJBQUNDLEVBQUUsRUFBRSxFQUFFOzRCQUFFQyxFQUFFLEVBQUUsQ0FBQztzQ0FPdEIsNEVBQUNyQyw4Q0FBRztnQ0FBQytCLEtBQUssRUFBRSxNQUFNOztrREFDaEIsOERBQUNPLEtBQUc7d0NBQUNDLEdBQUcsRUFBQyxvQkFBb0I7d0NBQUNSLEtBQUssRUFBRUwsS0FBSzt3Q0FBRWMsR0FBRyxFQUFDLE9BQU87Ozs7OzRDQUFPO2tEQUM5RCw4REFBQ3RDLHFEQUFVO3dDQUFDdUMsT0FBTyxFQUFDLElBQUk7a0RBQUViLFNBQVM7Ozs7OzRDQUFjOzs7Ozs7b0NBQzdDOzs7OztnQ0FFRDs7Ozs7O3dCQUNGOzhCQUNQLDhEQUFDM0IsK0NBQUk7b0JBQUNnQyxTQUFTOzhCQUNiLDRFQUFDaEMsK0NBQUk7d0JBQUNrQyxJQUFJO3dCQUFDQyxFQUFFLEVBQUUsRUFBRTtrQ0FDZiw0RUFBQ3ZCLGdEQUFLOzRCQUNKaUIsRUFBRSxFQUFFO2dDQUNGQyxLQUFLLEVBQUUsTUFBTTtnQ0FDYlcsY0FBYyxFQUFFLFFBQVE7Z0NBQ3hCQyxVQUFVLEVBQUUsUUFBUTs2QkFDckI7c0NBRUQsNEVBQUMzQyw4Q0FBRztnQ0FBQzhCLEVBQUUsRUFBRTtvQ0FBRUMsS0FBSyxFQUFFLEdBQUc7b0NBQUVhLE9BQU8sRUFBRSxDQUFDO2lDQUFFOzBDQUNqQyw0RUFBQ2pDLDJEQUFnQjtvQ0FDZm1CLEVBQUUsRUFBRTt3Q0FDRixzQkFBc0I7d0NBQ3RCLG9CQUFvQjt3Q0FDcEJlLFlBQVksRUFBRSxFQUFFO3FDQUNqQjtvQ0FDREMsVUFBVTtvQ0FDVjFCLEtBQUssRUFBRUEsS0FBSztvQ0FDWjJCLFFBQVEsRUFBRSxTQUFDQyxLQUFLLEVBQUVDLFFBQVEsRUFBSzt3Q0FDN0I1QixRQUFRLENBQUM0QixRQUFRLENBQUMsQ0FBQztxQ0FDcEI7O3NEQUVELDhEQUFDckMsaUVBQXNCOzRDQUFDc0MsS0FBSyxFQUFDLFFBQVE7Ozs7O2dEQUFHO3NEQUN6Qyw4REFBQ3RDLGlFQUFzQjs0Q0FBQ3NDLEtBQUssRUFBQyxRQUFROzs7OztnREFBRzs7Ozs7O3dDQUN4Qjs7Ozs7b0NBRWY7Ozs7O2dDQUNBOzs7Ozs0QkFDSDs7Ozs7d0JBQ0Y7Ozs7OztnQkFDSDs7Ozs7WUFDRixDQUNOO0NBQ0g7R0F6RlEvQixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUEyRmhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWdodGVyLmpzPzAwMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxuICBEcmF3ZXIsXG4gIEJ1dHRvbixcbiAgTGlzdCxcbiAgRGl2aWRlcixcbiAgTGlzdEl0ZW0sXG4gIExpc3RJdGVtQnV0dG9uLFxuICBMaXN0SXRlbUljb24sXG4gIExpc3RJdGVtVGV4dCxcbiAgQm90dG9tTmF2aWdhdGlvbixcbiAgQm90dG9tTmF2aWdhdGlvbkFjdGlvbixcbiAgU3RhY2ssXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmxldCBzcXVycmVsID0gXCJzaGl0XCI7XG5cbmZ1bmN0aW9uIEZpZ2h0ZXIoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpZ2h0ZXIsIHNldFNlbGVjdGVkRmlnaHRlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlU3RhdHVzID0gKHNlbGVjdGVkRmlnaHRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkRmlnaHRlcihzZWxlY3RlZEZpZ2h0ZXIpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRGaWdodGVyKHNlbGVjdGVkRmlnaHRlcik7XG4gIH0sIFtzZWxlY3RlZEZpZ2h0ZXJdKTtcblxuICBpZiAodmFsdWUgPT0gMSkge1xuICAgIHZhciBzaXplMSA9IFwiMTAwJVwiO1xuICAgIHZhciBzaXplMiA9IFwiODAlXCI7XG4gICAgdmFyIGRlc2NyaXB0MSA9IFwiXCI7XG4gICAgdmFyIGRlc2NyaXB0MiA9IFwiU3F14oiGcuKIkVwiO1xuICB9XG4gIGlmICh2YWx1ZSA9PSAwKSB7XG4gICAgdmFyIHNpemUxID0gXCI4MCVcIjtcbiAgICB2YXIgc2l6ZTIgPSBcIjEwMCVcIjtcbiAgICB2YXIgZGVzY3JpcHQxID0gXCLCqcSxcsOH4oir4oiRXCI7XG4gICAgdmFyIGRlc2NyaXB0MiA9IFwiXCI7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiBcIjkwJVwiLCBtbDogXCI1JVwiIH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICBzY2FsZTogMC44LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPiAqL31cbiAgICAgICAgICAgIDxCb3ggd2lkdGg9e1wiMTAwJVwifT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY2lyY2xlRmlnaHRlci5naWZcIiB3aWR0aD17c2l6ZTF9IGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntkZXNjcmlwdDF9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgIHsvKiA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgICAgd2hpbGVUYXA9e3tcbiAgICAgICAgICAgICAgICBzY2FsZTogMC44LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPiAqL31cbiAgICAgICAgICAgIDxCb3ggd2lkdGg9e1wiMTAwJVwifT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3F1YXJlRmlnaHRlci5naWZcIiB3aWR0aD17c2l6ZTJ9IGFsdD1cImVycm9yXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntkZXNjcmlwdDJ9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICB7LyogPC9tb3Rpb24uZGl2PiAqL31cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgIDxTdGFja1xuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAzMDAsIHBhZGRpbmc6IDIgfX0+XG4gICAgICAgICAgICAgICAgPEJvdHRvbU5hdmlnYXRpb25cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJnY29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgc2hvd0xhYmVsc1xuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cImNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8Qm90dG9tTmF2aWdhdGlvbkFjdGlvbiBsYWJlbD1cInNxdWFyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3R0b21OYXZpZ2F0aW9uPlxuICAgICAgICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeT57c2VsZWN0ZWRGaWdodGVyfTwvVHlwb2dyYXBoeT4gKi99XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWdodGVyO1xuIl0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiRHJhd2VyIiwiQnV0dG9uIiwiTGlzdCIsIkRpdmlkZXIiLCJMaXN0SXRlbSIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiQm90dG9tTmF2aWdhdGlvbiIsIkJvdHRvbU5hdmlnYXRpb25BY3Rpb24iLCJTdGFjayIsIlJlYWN0IiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzcXVycmVsIiwiRmlnaHRlciIsInZhbHVlIiwic2V0VmFsdWUiLCJzZWxlY3RlZEZpZ2h0ZXIiLCJzZXRTZWxlY3RlZEZpZ2h0ZXIiLCJvbkNoYW5nZVN0YXR1cyIsInNpemUxIiwic2l6ZTIiLCJkZXNjcmlwdDEiLCJkZXNjcmlwdDIiLCJkaXYiLCJzeCIsIndpZHRoIiwibWwiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwibWQiLCJpbWciLCJzcmMiLCJhbHQiLCJ2YXJpYW50IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsInNob3dMYWJlbHMiLCJvbkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Fighter.js\n");

/***/ })

});