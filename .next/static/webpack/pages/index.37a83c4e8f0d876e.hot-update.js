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

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    width: 600,\n    bgcolor: \"grey\",\n    color: \"white\",\n    border: \"5px solid #000\",\n    boxShadow: 24,\n    p: 4,\n    textAlign: \"center\"\n};\nfunction Thehome() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var handleOpen = function() {\n        return setOpen(true);\n    };\n    var handleClose = function() {\n        return setOpen(false);\n    };\n    var constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    width: \"70vw\",\n                    backgroundColor: \"grey\",\n                    color: \"white\",\n                    p: 5,\n                    borderRadius: 10,\n                    textAlign: \"center\",\n                    border: \"5px solid #000\",\n                    mb: 10\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    item: true,\n                    xs: 12,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        direction: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: \"container2\",\n                                ref: constraintsRef,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"item2\",\n                                    drag: true,\n                                    dragConstraints: constraintsRef,\n                                    children: \"Drag me around!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                children: \"This\"\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                lineNumber: 35,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    width: \"70vw\",\n                    backgroundColor: \"grey\",\n                    color: \"white\",\n                    p: 5,\n                    borderRadius: 10,\n                    textAlign: \"center\",\n                    border: \"5px solid #000\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                sx: {\n                                    pb: 4\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        className: \"container\",\n                                        whileHover: {\n                                            scale: 1.2,\n                                            rotate: 10\n                                        },\n                                        whileTap: {\n                                            scale: 0.8,\n                                            rotate: -10,\n                                            borderRadius: \"100%\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            variant: \"h4\",\n                                            align: \"center\",\n                                            children: \"Welcome\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        className: \"container\",\n                                        whileHover: {\n                                            scale: 1.2,\n                                            rotate: -10\n                                        },\n                                        whileTap: {\n                                            scale: 0.8,\n                                            rotate: 10,\n                                            borderRadius: \"100%\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            variant: \"body1\",\n                                            align: \"center\",\n                                            children: \"hello\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                    sx: {\n                                        cursor: \"pointer\",\n                                        border: \"2px solid #000\",\n                                        width: \"50%\",\n                                        ml: \"25%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/bonsai.jpg\",\n                                        width: \"100%\",\n                                        alt: \"error\",\n                                        onClick: handleOpen\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                                    open: open,\n                                    onClose: handleClose,\n                                    \"aria-labelledby\": \"modal-modal-title\",\n                                    \"aria-describedby\": \"modal-modal-description\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                        sx: style,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                id: \"modal-modal-title\",\n                                                variant: \"h6\",\n                                                component: \"h2\",\n                                                children: \"Hexdump to find data\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/final.mp3\",\n                                                controls: true\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Thehome, \"7F0Vcd/F1jnK2x+BP3U9pfT5Ce4=\");\n_c = Thehome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thehome);\nvar _c;\n$RefreshReg$(_c, \"Thehome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxtQkFBbUI7b0NBQ25DQyxrQkFBZ0IsRUFBQyx5QkFBeUI7OENBRTFDLDRFQUFDeEQsNENBQUc7d0NBQUM2QixFQUFFLEVBQUVwQixLQUFLOzswREFDZCw4REFBQ1IscURBQVU7Z0RBQUN3RCxFQUFFLEVBQUMsbUJBQW1CO2dEQUFDWCxPQUFPLEVBQUMsSUFBSTtnREFBQ1ksU0FBUyxFQUFDLElBQUk7MERBQUMsc0JBRS9EOzs7OztvREFBYTswREFDYiw4REFBQ2xELDJEQUFnQjtnREFDYjJDLEdBQUcsRUFBQyxZQUFZO2dEQUNoQlEsUUFBUTs7Ozs7b0RBQ047Ozs7Ozs0Q0FDQTs7Ozs7d0NBQ0Y7Ozs7OztnQ0FDTDs7Ozs7O3dCQUNKOzs7OztvQkFDTDs7Ozs7O1lBQ0osQ0FDTjtDQUNIO0dBMUVTdEMsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBNEVqQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbi5qcz82OGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCAsIEJ1dHRvbiwgTW9kYWwsIFN0YWNrfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSAncmVhY3QtYXVkaW8tcGxheWVyJztcblxuXG5jb25zdCBzdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgd2lkdGg6IDYwMCxcbiAgICBiZ2NvbG9yOiAnZ3JleScsXG4gICAgY29sb3I6XCJ3aGl0ZVwiLFxuICAgIGJvcmRlcjogJzVweCBzb2xpZCAjMDAwJyxcbiAgICBib3hTaGFkb3c6IDI0LFxuICAgIHA6IDQsXG4gICAgdGV4dEFsaWduOlwiY2VudGVyXCJcbiAgfTtcblxuIGZ1bmN0aW9uIFRoZWhvbWUoKSB7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiBzZXRPcGVuKHRydWUpO1xuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4gc2V0T3BlbihmYWxzZSk7XG5cbiAgICBjb25zdCBjb25zdHJhaW50c1JlZiA9IHVzZVJlZihudWxsKTtcblxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuPEJveCBzeD17e3dpZHRoOiBcIjcwdndcIiwgYmFja2dyb3VuZENvbG9yOlwiZ3JleVwiLCBjb2xvcjpcIndoaXRlXCIsIHA6NSwgYm9yZGVyUmFkaXVzOiAxMCwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGJvcmRlcjogJzVweCBzb2xpZCAjMDAwJywgbWI6MTB9fT5cbiAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9PlxuICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjb250YWluZXIyXCIgcmVmPXtjb25zdHJhaW50c1JlZn0+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIml0ZW0yXCIgZHJhZyBkcmFnQ29uc3RyYWludHM9e2NvbnN0cmFpbnRzUmVmfSA+XG4gICAgICAgICAgICBEcmFnIG1lIGFyb3VuZCFcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgVGhpc1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvU3RhY2s+XG4gICAgPC9HcmlkPlxuPC9Cb3g+XG5cbiAgICAgICAgPEJveCBzeD17e3dpZHRoOiBcIjcwdndcIiwgYmFja2dyb3VuZENvbG9yOlwiZ3JleVwiLCBjb2xvcjpcIndoaXRlXCIsIHA6NSwgYm9yZGVyUmFkaXVzOiAxMCwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGJvcmRlcjogJzVweCBzb2xpZCAjMDAwJ319PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17e3BiOjR9fT5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLCByb3RhdGU6IDEwIH19XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjgsIHJvdGF0ZTogLTEwLCBib3JkZXJSYWRpdXM6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiwgcm90YXRlOiAtMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOCwgcm90YXRlOiAxMCwgYm9yZGVyUmFkaXVzOiBcIjEwMCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17e2N1cnNvcjpcInBvaW50ZXJcIiwgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJywgd2lkdGg6IFwiNTAlXCIsIG1sOlwiMjUlXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2JvbnNhaS5qcGdcIiB3aWR0aD1cIjEwMCVcIiBhbHQ9XCJlcnJvclwiIG9uQ2xpY2s9e2hhbmRsZU9wZW59PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIZXhkdW1wIHRvIGZpbmQgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvZmluYWwubXAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQm94PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVob21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJCdXR0b24iLCJNb2RhbCIsIlN0YWNrIiwibW90aW9uIiwidXNlUmVmIiwiUmVhY3RBdWRpb1BsYXllciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJwIiwidGV4dEFsaWduIiwiVGhlaG9tZSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJjb25zdHJhaW50c1JlZiIsImRpdiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWIiLCJpdGVtIiwieHMiLCJkaXJlY3Rpb24iLCJjbGFzc05hbWUiLCJyZWYiLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwiY29udGFpbmVyIiwicGIiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJyb3RhdGUiLCJ3aGlsZVRhcCIsInZhcmlhbnQiLCJhbGlnbiIsImN1cnNvciIsIm1sIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsIm9uQ2xvc2UiLCJhcmlhLWxhYmVsbGVkYnkiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiaWQiLCJjb21wb25lbnQiLCJjb250cm9scyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

});