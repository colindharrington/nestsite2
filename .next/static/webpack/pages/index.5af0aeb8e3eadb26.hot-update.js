"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Newhome.js":
/*!*******************************!*\
  !*** ./components/Newhome.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"5%\",\n    // transform: 'translate(-50%, -50%)',\n    width: 400,\n    // bgcolor: 'grey',\n    color: \"white\",\n    // border: '2px solid #000',\n    // borderRadius: 10,\n    boxShadow: 24,\n    p: 4,\n    textAlign: \"center\"\n};\nfunction Thehome() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var handleOpen = function() {\n        return setOpen(true);\n    };\n    var handleClose = function() {\n        return setOpen(false);\n    };\n    var constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref1[0], setCount = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n            container: true,\n            spacing: 0,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    item: true,\n                    xs: 12,\n                    md: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        sx: {\n                            textAlign: \"center\",\n                            width: 400,\n                            bgcolor: \"red\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                animate: {\n                                    scale: [\n                                        1,\n                                        1,\n                                        1.1,\n                                        1,\n                                        1\n                                    ]\n                                },\n                                transition: {\n                                    duration: 4,\n                                    ease: \"easeInOut\",\n                                    times: [\n                                        0,\n                                        0.2,\n                                        0.5,\n                                        0.8,\n                                        1\n                                    ],\n                                    repeat: Infinity,\n                                    repeatDelay: 1\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    className: \"container\",\n                                    whileHover: {\n                                        scale: 1.2,\n                                        rotate: 10\n                                    },\n                                    whileTap: {\n                                        scale: 0.8,\n                                        rotate: -10,\n                                        borderRadius: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h2\",\n                                        align: \"center\",\n                                        children: \"Welcome\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/about\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    className: \"container\",\n                                    whileHover: {\n                                        scale: 1.2,\n                                        rotate: -10\n                                    },\n                                    whileTap: {\n                                        scale: 0.8,\n                                        rotate: 10,\n                                        borderRadius: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h4\",\n                                        align: \"center\",\n                                        children: \"click here\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    item: true,\n                    xs: 12,\n                    md: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        sx: {\n                            textAlign: \"center\",\n                            width: 30,\n                            ml: 10\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.MotionConfig, {\n                            reducedMotion: \"user\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"example-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    animate: {\n                                        scale: [\n                                            1,\n                                            1.1,\n                                            1.1,\n                                            1,\n                                            1\n                                        ]\n                                    },\n                                    transition: {\n                                        duration: 4,\n                                        ease: \"easeInOut\",\n                                        times: [\n                                            0,\n                                            0.2,\n                                            0.5,\n                                            0.8,\n                                            1\n                                        ],\n                                        repeat: Infinity,\n                                        repeatDelay: 1\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/cthru.png\",\n                                            width: \"100%\",\n                                            alt: \"error\",\n                                            onClick: handleOpen\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                                            open: open,\n                                            onClose: handleClose,\n                                            \"aria-labelledby\": \"modal-modal-title\",\n                                            \"aria-describedby\": \"modal-modal-description\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                                sx: style,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                                        id: \"modal-modal-title\",\n                                                        variant: \"h6\",\n                                                        component: \"h2\",\n                                                        children: \"Hexdump to find data\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                        src: \"/final.mp3\",\n                                                        controls: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Thehome, \"ZOLbwAAqhAp5T5LyLBAS3BUv3cc=\");\n_c = Thehome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thehome);\nvar _c;\n$RefreshReg$(_c, \"Thehome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ryw4REFBQ1csS0FBRzs0Q0FBQ0MsR0FBRyxFQUFDLFlBQVk7NENBQUN6QyxLQUFLLEVBQUMsTUFBTTs0Q0FBQzBDLEdBQUcsRUFBQyxPQUFPOzRDQUFDQyxPQUFPLEVBQUVuQyxVQUFVOzs7OztnREFBUTtzREFDMUUsOERBQUNyQixnREFBSzs0Q0FDRm1CLElBQUksRUFBRUEsSUFBSTs0Q0FDVnNDLE9BQU8sRUFBRW5DLFdBQVc7NENBQ3BCb0MsaUJBQWUsRUFBQyxtQkFBbUI7NENBQ25DQyxrQkFBZ0IsRUFBQyx5QkFBeUI7c0RBRTFDLDRFQUFDL0QsNENBQUc7Z0RBQUNvQyxFQUFFLEVBQUV2QixLQUFLOztrRUFDViw4REFBQ1oscURBQVU7d0RBQUMrRCxFQUFFLEVBQUMsbUJBQW1CO3dEQUFDWixPQUFPLEVBQUMsSUFBSTt3REFBQ2EsU0FBUyxFQUFDLElBQUk7a0VBQUMsc0JBRS9EOzs7Ozs0REFBYTtrRUFDYiw4REFBQ3JELDJEQUFnQjt3REFDYjhDLEdBQUcsRUFBQyxZQUFZO3dEQUNoQlEsUUFBUTs7Ozs7NERBQ047Ozs7OztvREFDSjs7Ozs7Z0RBQ0Y7Ozs7Ozt3Q0FDQzs7Ozs7b0NBQ1g7Ozs7O2dDQUNLOzs7Ozs0QkFDYjs7Ozs7d0JBQ1A7Ozs7OztnQkFDSjs7Ozs7WUFFTCxDQUNOO0NBQ0g7R0E1RlM1QyxPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUE4RmpCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdob21lLmpzPzg3MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkICwgQnV0dG9uLCBNb2RhbCwgU3RhY2t9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBtb3Rpb24sIE1vdGlvbkNvbmZpZyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tICdyZWFjdC1hdWRpby1wbGF5ZXInO1xuXG5cbmNvbnN0IHN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUlJyxcbiAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiA0MDAsXG4gICAgLy8gYmdjb2xvcjogJ2dyZXknLFxuICAgIGNvbG9yOlwid2hpdGVcIixcbiAgICAvLyBib3JkZXI6ICcycHggc29saWQgIzAwMCcsXG4gICAgLy8gYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBib3hTaGFkb3c6IDI0LFxuICAgIHA6IDQsXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCJcbiAgfTtcblxuIGZ1bmN0aW9uIFRoZWhvbWUoKSB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XG5cbiAgICBjb25zdCBjb25zdHJhaW50c1JlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17e3RleHRBbGlnbjpcImNlbnRlclwiLCB3aWR0aDo0MDAsIGJnY29sb3I6XCJyZWRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxLjEsIDEsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lczogWzAsIDAuMiwgMC41LCAwLjgsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdERlbGF5OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLCByb3RhdGU6IDEwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOCwgcm90YXRlOiAtMTAsIGJvcmRlclJhZGl1czogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLCByb3RhdGU6IC0xMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjgsIHJvdGF0ZTogMTAsIGJvcmRlclJhZGl1czogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljayBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIHdpZHRoOjMwLG1sOjEwfX0+XG4gICAgICAgICAgICAgICAgICAgIDxNb3Rpb25Db25maWcgcmVkdWNlZE1vdGlvbj1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogWzEsIDEuMSwgMS4xLCAxLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXM6IFswLCAwLjIsIDAuNSwgMC44LCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXREZWxheTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9jdGhydS5wbmdcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJlcnJvclwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGV4ZHVtcCB0byBmaW5kIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ZpbmFsLm1wM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW90aW9uQ29uZmlnPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZWhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIkJ1dHRvbiIsIk1vZGFsIiwiU3RhY2siLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInJlbmRlciIsIm1vdGlvbiIsIk1vdGlvbkNvbmZpZyIsIkxpbmsiLCJSZWFjdEF1ZGlvUGxheWVyIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImNvbG9yIiwiYm94U2hhZG93IiwicCIsInRleHRBbGlnbiIsIlRoZWhvbWUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImNvbnN0cmFpbnRzUmVmIiwiY291bnQiLCJzZXRDb3VudCIsImRpdiIsImNvbnRhaW5lciIsInNwYWNpbmciLCJpdGVtIiwieHMiLCJtZCIsInN4IiwiYmdjb2xvciIsImFuaW1hdGUiLCJzY2FsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ0aW1lcyIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0RGVsYXkiLCJjbGFzc05hbWUiLCJ3aGlsZUhvdmVyIiwicm90YXRlIiwid2hpbGVUYXAiLCJib3JkZXJSYWRpdXMiLCJ2YXJpYW50IiwiYWxpZ24iLCJocmVmIiwibWwiLCJyZWR1Y2VkTW90aW9uIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsIm9uQ2xvc2UiLCJhcmlhLWxhYmVsbGVkYnkiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiaWQiLCJjb21wb25lbnQiLCJjb250cm9scyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Newhome.js\n");

/***/ })

});