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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    width: 600,\n    bgcolor: \"grey\",\n    color: \"white\",\n    border: \"5px solid #000\",\n    boxShadow: 24,\n    p: 4,\n    textAlign: \"center\"\n};\nfunction Thehome() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var handleOpen = function() {\n        return setOpen(true);\n    };\n    var handleClose = function() {\n        return setOpen(false);\n    };\n    var constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    width: \"70vw\",\n                    backgroundColor: \"grey\",\n                    color: \"white\",\n                    p: 5,\n                    borderRadius: 10,\n                    textAlign: \"center\",\n                    border: \"5px solid #000\",\n                    mb: 10\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    item: true,\n                    xs: 12,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                        direction: \"row\",\n                        spacing: 10,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                className: \"container2\",\n                                ref: constraintsRef,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"item2\",\n                                    drag: true,\n                                    dragConstraints: constraintsRef,\n                                    children: \"Drag me around!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 9\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                children: \"This\"\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                lineNumber: 35,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    width: \"70vw\",\n                    backgroundColor: \"grey\",\n                    color: \"white\",\n                    p: 5,\n                    borderRadius: 10,\n                    textAlign: \"center\",\n                    border: \"5px solid #000\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                    container: true,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                sx: {\n                                    pb: 4\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        className: \"container\",\n                                        whileHover: {\n                                            scale: 1.2,\n                                            rotate: 10\n                                        },\n                                        whileTap: {\n                                            scale: 0.8,\n                                            rotate: -10,\n                                            borderRadius: \"100%\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            variant: \"h4\",\n                                            align: \"center\",\n                                            children: \"Welcome\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        className: \"container\",\n                                        whileHover: {\n                                            scale: 1.2,\n                                            rotate: -10\n                                        },\n                                        whileTap: {\n                                            scale: 0.8,\n                                            rotate: 10,\n                                            borderRadius: \"100%\"\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            variant: \"body1\",\n                                            align: \"center\",\n                                            children: \"hello\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 25\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                            item: true,\n                            xs: 12,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                    sx: {\n                                        cursor: \"pointer\",\n                                        border: \"2px solid #000\",\n                                        width: \"50%\",\n                                        ml: \"25%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/bonsai.jpg\",\n                                        width: \"100%\",\n                                        alt: \"error\",\n                                        onClick: handleOpen\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                                    open: open,\n                                    onClose: handleClose,\n                                    \"aria-labelledby\": \"modal-modal-title\",\n                                    \"aria-describedby\": \"modal-modal-description\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                        sx: style,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                                id: \"modal-modal-title\",\n                                                variant: \"h6\",\n                                                component: \"h2\",\n                                                children: \"Hexdump to find data\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/final.mp3\",\n                                                controls: true\n                                            }, void 0, false, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Thehome, \"7F0Vcd/F1jnK2x+BP3U9pfT5Ce4=\");\n_c = Thehome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thehome);\nvar _c;\n$RefreshReg$(_c, \"Thehome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixXQUFXO29DQUNwQjhCLGlCQUFlLEVBQUMsbUJBQW1CO29DQUNuQ0Msa0JBQWdCLEVBQUMseUJBQXlCOzhDQUUxQyw0RUFBQ3pELDRDQUFHO3dDQUFDNkIsRUFBRSxFQUFFcEIsS0FBSzs7MERBQ2QsOERBQUNSLHFEQUFVO2dEQUFDeUQsRUFBRSxFQUFDLG1CQUFtQjtnREFBQ1gsT0FBTyxFQUFDLElBQUk7Z0RBQUNZLFNBQVMsRUFBQyxJQUFJOzBEQUFDLHNCQUUvRDs7Ozs7b0RBQWE7MERBQ2IsOERBQUNuRCwyREFBZ0I7Z0RBQ2I0QyxHQUFHLEVBQUMsWUFBWTtnREFDaEJRLFFBQVE7Ozs7O29EQUNOOzs7Ozs7NENBQ0E7Ozs7O3dDQUNGOzs7Ozs7Z0NBQ0w7Ozs7Ozt3QkFDSjs7Ozs7b0JBQ0w7Ozs7OztZQUNKLENBQ047Q0FDSDtHQTFFU3ZDLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQTRFakIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4uanM/NjhlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCB7IFR5cG9ncmFwaHksIEdyaWQgLCBCdXR0b24sIE1vZGFsLCBTdGFja30gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCBSZWFjdEF1ZGlvUGxheWVyIGZyb20gJ3JlYWN0LWF1ZGlvLXBsYXllcic7XG5cblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiA2MDAsXG4gICAgYmdjb2xvcjogJ2dyZXknLFxuICAgIGNvbG9yOlwid2hpdGVcIixcbiAgICBib3JkZXI6ICc1cHggc29saWQgIzAwMCcsXG4gICAgYm94U2hhZG93OiAyNCxcbiAgICBwOiA0LFxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiXG4gIH07XG5cbiBmdW5jdGlvbiBUaGVob21lKCkge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0T3Blbih0cnVlKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuXG4gICAgY29uc3QgY29uc3RyYWludHNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbjxCb3ggc3g9e3t3aWR0aDogXCI3MHZ3XCIsIGJhY2tncm91bmRDb2xvcjpcImdyZXlcIiwgY29sb3I6XCJ3aGl0ZVwiLCBwOjUsIGJvcmRlclJhZGl1czogMTAsIHRleHRBbGlnbjpcImNlbnRlclwiLCBib3JkZXI6ICc1cHggc29saWQgIzAwMCcsIG1iOjEwfX0+XG4gICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPXtcInJvd1wifSBzcGFjaW5nPXsxMH0+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcjJcIiByZWY9e2NvbnN0cmFpbnRzUmVmfT5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiaXRlbTJcIiBkcmFnIGRyYWdDb25zdHJhaW50cz17Y29uc3RyYWludHNSZWZ9ID5cbiAgICAgICAgICAgIERyYWcgbWUgYXJvdW5kIVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICBUaGlzXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9TdGFjaz5cbiAgICA8L0dyaWQ+XG48L0JveD5cblxuICAgICAgICA8Qm94IHN4PXt7d2lkdGg6IFwiNzB2d1wiLCBiYWNrZ3JvdW5kQ29sb3I6XCJncmV5XCIsIGNvbG9yOlwid2hpdGVcIiwgcDo1LCBib3JkZXJSYWRpdXM6IDEwLCB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgYm9yZGVyOiAnNXB4IHNvbGlkICMwMDAnfX0+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7cGI6NH19PlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIsIHJvdGF0ZTogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOCwgcm90YXRlOiAtMTAsIGJvcmRlclJhZGl1czogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLCByb3RhdGU6IC0xMCB9fVxuICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC44LCByb3RhdGU6IDEwLCBib3JkZXJSYWRpdXM6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7Y3Vyc29yOlwicG9pbnRlclwiLCAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLCB3aWR0aDogXCI1MCVcIiwgbWw6XCIyNSVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYm9uc2FpLmpwZ1wiIHdpZHRoPVwiMTAwJVwiIGFsdD1cImVycm9yXCIgb25DbGljaz17aGFuZGxlT3Blbn0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhleGR1bXAgdG8gZmluZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9maW5hbC5tcDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZWhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIkJ1dHRvbiIsIk1vZGFsIiwiU3RhY2siLCJtb3Rpb24iLCJ1c2VSZWYiLCJSZWFjdEF1ZGlvUGxheWVyIiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJjb2xvciIsImJvcmRlciIsImJveFNoYWRvdyIsInAiLCJ0ZXh0QWxpZ24iLCJUaGVob21lIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZU9wZW4iLCJoYW5kbGVDbG9zZSIsImNvbnN0cmFpbnRzUmVmIiwiZGl2Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYiIsIml0ZW0iLCJ4cyIsImRpcmVjdGlvbiIsInNwYWNpbmciLCJjbGFzc05hbWUiLCJyZWYiLCJkcmFnIiwiZHJhZ0NvbnN0cmFpbnRzIiwiY29udGFpbmVyIiwicGIiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJyb3RhdGUiLCJ3aGlsZVRhcCIsInZhcmlhbnQiLCJhbGlnbiIsImN1cnNvciIsIm1sIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsIm9uQ2xvc2UiLCJhcmlhLWxhYmVsbGVkYnkiLCJhcmlhLWRlc2NyaWJlZGJ5IiwiaWQiLCJjb21wb25lbnQiLCJjb250cm9scyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

});