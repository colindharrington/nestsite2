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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"50%\",\n    transform: \"translate(-50%, -50%)\",\n    width: 600,\n    bgcolor: \"grey\",\n    color: \"white\",\n    border: \"5px solid #000\",\n    boxShadow: 24,\n    p: 4,\n    textAlign: \"center\"\n};\nfunction Thehome() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var handleOpen = function() {\n        return setOpen(true);\n    };\n    var handleClose = function() {\n        return setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            sx: {\n                width: \"70vw\",\n                backgroundColor: \"grey\",\n                color: \"white\",\n                p: 5,\n                borderRadius: 10,\n                textAlign: \"center\",\n                border: \"5px solid #000\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                container: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        item: true,\n                        xs: 12,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            sx: {\n                                pb: 4\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                    className: \"container\",\n                                    whileHover: {\n                                        scale: 1.2,\n                                        rotate: 10\n                                    },\n                                    whileTap: {\n                                        scale: 0.8,\n                                        rotate: -10,\n                                        borderRadius: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                        variant: \"h4\",\n                                        align: \"center\",\n                                        children: \"Welcome\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                    variant: \"body1\",\n                                    align: \"center\",\n                                    children: \"you're on the internet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                        item: true,\n                        xs: 12,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                sx: {\n                                    cursor: \"pointer\",\n                                    border: \"2px solid #000\",\n                                    width: \"90%\",\n                                    ml: \"5%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/bonsai.jpg\",\n                                    width: \"100%\",\n                                    alt: \"error\",\n                                    onClick: handleOpen\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Modal, {\n                                open: open,\n                                onClose: handleClose,\n                                \"aria-labelledby\": \"modal-modal-title\",\n                                \"aria-describedby\": \"modal-modal-description\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                    sx: style,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                                            id: \"modal-modal-title\",\n                                            variant: \"h6\",\n                                            component: \"h2\",\n                                            children: \"Hexdump to find data\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: \"/final.mp3\",\n                                            controls: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Main.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Thehome, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = Thehome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thehome);\nvar _c;\n$RefreshReg$(_c, \"Thehome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFBRUEsSUFBSTtnQ0FDVnlCLE9BQU8sRUFBRXRCLFdBQVc7Z0NBQ3BCdUIsaUJBQWUsRUFBQyxtQkFBbUI7Z0NBQ25DQyxrQkFBZ0IsRUFBQyx5QkFBeUI7MENBRTFDLDRFQUFDaEQsNENBQUc7b0NBQUMwQixFQUFFLEVBQUVuQixLQUFLOztzREFDZCw4REFBQ04scURBQVU7NENBQUNnRCxFQUFFLEVBQUMsbUJBQW1COzRDQUFDWCxPQUFPLEVBQUMsSUFBSTs0Q0FBQ1ksU0FBUyxFQUFDLElBQUk7c0RBQUMsc0JBRS9EOzs7OztnREFBYTtzREFDYiw4REFBQzVDLDJEQUFnQjs0Q0FDYnFDLEdBQUcsRUFBQyxZQUFZOzRDQUNoQlEsUUFBUTs7Ozs7Z0RBQ047Ozs7Ozt3Q0FDQTs7Ozs7b0NBQ0Y7Ozs7Ozs0QkFDTDs7Ozs7O29CQUNKOzs7OztnQkFDTDs7Ozs7WUFDSixDQUNOO0NBQ0g7R0FsRFNoQyxPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUFvRGpCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzY4ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvc3lzdGVtXCI7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkICwgQnV0dG9uLCBNb2RhbH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcblxuXG5pbXBvcnQgUmVhY3RBdWRpb1BsYXllciBmcm9tICdyZWFjdC1hdWRpby1wbGF5ZXInO1xuXG5cbmNvbnN0IHN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB3aWR0aDogNjAwLFxuICAgIGJnY29sb3I6ICdncmV5JyxcbiAgICBjb2xvcjpcIndoaXRlXCIsXG4gICAgYm9yZGVyOiAnNXB4IHNvbGlkICMwMDAnLFxuICAgIGJveFNoYWRvdzogMjQsXG4gICAgcDogNCxcbiAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIlxuICB9O1xuXG4gZnVuY3Rpb24gVGhlaG9tZSgpIHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHNldE9wZW4odHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiBzZXRPcGVuKGZhbHNlKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEJveCBzeD17e3dpZHRoOiBcIjcwdndcIiwgYmFja2dyb3VuZENvbG9yOlwiZ3JleVwiLCBjb2xvcjpcIndoaXRlXCIsIHA6NSwgYm9yZGVyUmFkaXVzOiAxMCwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGJvcmRlcjogJzVweCBzb2xpZCAjMDAwJ319PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17e3BiOjR9fT5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLCByb3RhdGU6IDEwIH19XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjgsIHJvdGF0ZTogLTEwLCBib3JkZXJSYWRpdXM6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2VsY29tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB5b3UncmUgb24gdGhlIGludGVybmV0XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17e2N1cnNvcjpcInBvaW50ZXJcIiwgIGJvcmRlcjogJzJweCBzb2xpZCAjMDAwJywgd2lkdGg6IFwiOTAlXCIsIG1sOlwiNSVcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYm9uc2FpLmpwZ1wiIHdpZHRoPVwiMTAwJVwiIGFsdD1cImVycm9yXCIgb25DbGljaz17aGFuZGxlT3Blbn0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhleGR1bXAgdG8gZmluZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RBdWRpb1BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9maW5hbC5tcDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZWhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJUeXBvZ3JhcGh5IiwiR3JpZCIsIkJ1dHRvbiIsIk1vZGFsIiwibW90aW9uIiwiUmVhY3RBdWRpb1BsYXllciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJib3hTaGFkb3ciLCJwIiwidGV4dEFsaWduIiwiVGhlaG9tZSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJkaXYiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyIsInBiIiwiY2xhc3NOYW1lIiwid2hpbGVIb3ZlciIsInNjYWxlIiwicm90YXRlIiwid2hpbGVUYXAiLCJ2YXJpYW50IiwiYWxpZ24iLCJjdXJzb3IiLCJtbCIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiYXJpYS1sYWJlbGxlZGJ5IiwiYXJpYS1kZXNjcmliZWRieSIsImlkIiwiY29tcG9uZW50IiwiY29udHJvbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.js\n");

/***/ })

});