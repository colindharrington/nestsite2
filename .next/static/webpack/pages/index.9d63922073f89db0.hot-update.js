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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-audio-player */ \"./node_modules/react-audio-player/dist/bundle.js\");\n/* harmony import */ var react_audio_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_audio_player__WEBPACK_IMPORTED_MODULE_4__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    position: \"absolute\",\n    top: \"50%\",\n    left: \"5%\",\n    // transform: 'translate(-50%, -50%)',\n    width: 400,\n    // bgcolor: 'grey',\n    color: \"white\",\n    // border: '2px solid #000',\n    // borderRadius: 10,\n    boxShadow: 24,\n    p: 4,\n    textAlign: \"center\"\n};\nfunction Thehome() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var handleOpen = function() {\n        return setOpen(true);\n    };\n    var handleClose = function() {\n        return setOpen(false);\n    };\n    var constraintsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref1[0], setCount = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n            container: true,\n            spacing: 0,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    item: true,\n                    xs: 12,\n                    md: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        sx: {\n                            textAlign: \"center\",\n                            width: \"100%\",\n                            bgcolor: \"red\",\n                            ml: 10\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                animate: {\n                                    scale: [\n                                        1,\n                                        1,\n                                        1.1,\n                                        1,\n                                        1\n                                    ]\n                                },\n                                transition: {\n                                    duration: 4,\n                                    ease: \"easeInOut\",\n                                    times: [\n                                        0,\n                                        0.2,\n                                        0.5,\n                                        0.8,\n                                        1\n                                    ],\n                                    repeat: Infinity,\n                                    repeatDelay: 1\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    className: \"container\",\n                                    whileHover: {\n                                        scale: 1.2,\n                                        rotate: 10\n                                    },\n                                    whileTap: {\n                                        scale: 0.8,\n                                        rotate: -10,\n                                        borderRadius: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h2\",\n                                        align: \"center\",\n                                        children: \"Welcome\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/about\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    className: \"container\",\n                                    whileHover: {\n                                        scale: 1.2,\n                                        rotate: -10\n                                    },\n                                    whileTap: {\n                                        scale: 0.8,\n                                        rotate: 10,\n                                        borderRadius: \"100%\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                        variant: \"h4\",\n                                        align: \"center\",\n                                        children: \"click here\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    item: true,\n                    xs: 12,\n                    md: 6,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        sx: {\n                            textAlign: \"center\",\n                            width: 500,\n                            ml: 10\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.MotionConfig, {\n                            reducedMotion: \"user\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"example-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                    animate: {\n                                        scale: [\n                                            1,\n                                            1.1,\n                                            1.1,\n                                            1,\n                                            1\n                                        ]\n                                    },\n                                    transition: {\n                                        duration: 4,\n                                        ease: \"easeInOut\",\n                                        times: [\n                                            0,\n                                            0.2,\n                                            0.5,\n                                            0.8,\n                                            1\n                                        ],\n                                        repeat: Infinity,\n                                        repeatDelay: 1\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/cthru.png\",\n                                            width: \"100%\",\n                                            alt: \"error\",\n                                            onClick: handleOpen\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                                            open: open,\n                                            onClose: handleClose,\n                                            \"aria-labelledby\": \"modal-modal-title\",\n                                            \"aria-describedby\": \"modal-modal-description\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_system__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                                sx: style,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                                        id: \"modal-modal-title\",\n                                                        variant: \"h6\",\n                                                        component: \"h2\",\n                                                        children: \"Hexdump to find data\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_audio_player__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                        src: \"/final.mp3\",\n                                                        controls: true\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                                        lineNumber: 105,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/afx/Documents/GitHub/nestsite2/components/Newhome.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Thehome, \"ZOLbwAAqhAp5T5LyLBAS3BUv3cc=\");\n_c = Thehome;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thehome);\nvar _c;\n$RefreshReg$(_c, \"Thehome\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld2hvbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUTtBQUNxQztBQUN4QztBQUNFO0FBQ0U7QUFDa0I7QUFDeEI7QUFFcUI7O0FBR2xELElBQU1jLEtBQUssR0FBRztJQUNWQyxRQUFRLEVBQUUsVUFBVTtJQUNwQkMsR0FBRyxFQUFFLEtBQUs7SUFDVkMsSUFBSSxFQUFFLElBQUk7SUFDVixzQ0FBc0M7SUFDdENDLEtBQUssRUFBRSxHQUFHO0lBQ1YsbUJBQW1CO0lBQ25CQyxLQUFLLEVBQUMsT0FBTztJQUNiLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEJDLFNBQVMsRUFBRSxFQUFFO0lBQ2JDLENBQUMsRUFBRSxDQUFDO0lBQ0pDLFNBQVMsRUFBQyxRQUFRO0NBQ25CO0FBRUYsU0FBU0MsT0FBTyxHQUFHOztJQUNoQixJQUF3QnZCLEdBQXFCLGtCQUFyQkEscURBQWMsQ0FBQyxLQUFLLENBQUMsTUFBdEN3QixJQUFJLEdBQWF4QixHQUFxQixHQUFsQyxFQUFFeUIsT0FBTyxHQUFJekIsR0FBcUIsR0FBekI7SUFDcEIsSUFBTTBCLFVBQVUsR0FBRztlQUFNRCxPQUFPLENBQUMsSUFBSSxDQUFDO0tBQUE7SUFDdEMsSUFBTUUsV0FBVyxHQUFHO2VBQU1GLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FBQTtJQUV4QyxJQUFNRyxjQUFjLEdBQUdyQiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUVuQyxJQUEwQkMsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQWxDekMsS0FrQ2dCLEdBQWNBLElBQVcsR0FBekIsRUFsQ2hCLFFBa0MwQixHQUFJQSxJQUFXLEdBQWY7SUFDeEIscUJBQ0UsOERBQUN1QixLQUFHO2tCQUNBLDRFQUFDNUIsK0NBQUk7WUFBQzZCLFNBQVM7WUFBQ0MsT0FBTyxFQUFFLENBQUM7OzhCQUN0Qiw4REFBQzlCLCtDQUFJO29CQUFDK0IsSUFBSTtvQkFBQ0MsRUFBRSxFQUFFLEVBQUU7b0JBQUVDLEVBQUUsRUFBRSxDQUFDOzhCQUNoQiw0RUFBQ25DLDRDQUFHO3dCQUFDb0MsRUFBRSxFQUFFOzRCQUFDZixTQUFTLEVBQUMsUUFBUTs0QkFBRUosS0FBSyxFQUFDLE1BQU07NEJBQUVvQixPQUFPLEVBQUMsS0FBSzs0QkFBQ0MsRUFBRSxFQUFDLEVBQUU7eUJBQUM7OzBDQUM1RCw4REFBQzdCLHFEQUFVO2dDQUNIOEIsT0FBTyxFQUFFO29DQUNMQyxLQUFLLEVBQUU7QUFBQyx5Q0FBQztBQUFFLHlDQUFDO0FBQUUsMkNBQUc7QUFBRSx5Q0FBQztBQUFFLHlDQUFDO3FDQUFDO2lDQUMzQjtnQ0FDREMsVUFBVSxFQUFFO29DQUNSQyxRQUFRLEVBQUUsQ0FBQztvQ0FDWEMsSUFBSSxFQUFFLFdBQVc7b0NBQ2pCQyxLQUFLLEVBQUU7QUFBQyx5Q0FBQztBQUFFLDJDQUFHO0FBQUUsMkNBQUc7QUFBRSwyQ0FBRztBQUFFLHlDQUFDO3FDQUFDO29DQUM1QkMsTUFBTSxFQUFFQyxRQUFRO29DQUNoQkMsV0FBVyxFQUFFLENBQUM7aUNBQ2pCOzBDQUVMLDRFQUFDdEMscURBQVU7b0NBQ1h1QyxTQUFTLEVBQUMsV0FBVztvQ0FDckJDLFVBQVUsRUFBRTt3Q0FBRVQsS0FBSyxFQUFFLEdBQUc7d0NBQUVVLE1BQU0sRUFBRSxFQUFFO3FDQUFFO29DQUN0Q0MsUUFBUSxFQUFFO3dDQUFFWCxLQUFLLEVBQUUsR0FBRzt3Q0FBRVUsTUFBTSxFQUFFLENBQUMsRUFBRTt3Q0FBRUUsWUFBWSxFQUFFLE1BQU07cUNBQUU7OENBRXZELDRFQUFDbkQscURBQVU7d0NBQUNvRCxPQUFPLEVBQUMsSUFBSTt3Q0FBQ0MsS0FBSyxFQUFDLFFBQVE7a0RBQUMsU0FFeEM7Ozs7OzRDQUFhOzs7Ozt3Q0FDSjs7Ozs7b0NBQ0o7MENBRWIsOERBQUMzQyxrREFBSTtnQ0FBQzRDLElBQUksRUFBQyxRQUFROzBDQUNmLDRFQUFDOUMscURBQVU7b0NBQ1h1QyxTQUFTLEVBQUMsV0FBVztvQ0FDckJDLFVBQVUsRUFBRTt3Q0FBRVQsS0FBSyxFQUFFLEdBQUc7d0NBQUVVLE1BQU0sRUFBRSxDQUFDLEVBQUU7cUNBQUU7b0NBQ3ZDQyxRQUFRLEVBQUU7d0NBQUVYLEtBQUssRUFBRSxHQUFHO3dDQUFFVSxNQUFNLEVBQUUsRUFBRTt3Q0FBRUUsWUFBWSxFQUFFLE1BQU07cUNBQUU7OENBRXRELDRFQUFDbkQscURBQVU7d0NBQUNvRCxPQUFPLEVBQUMsSUFBSTt3Q0FBQ0MsS0FBSyxFQUFDLFFBQVE7a0RBQUMsWUFFeEM7Ozs7OzRDQUFhOzs7Ozt3Q0FFSjs7Ozs7b0NBQ1Y7Ozs7Ozs0QkFDTDs7Ozs7d0JBQ1A7OEJBQ1AsOERBQUNwRCwrQ0FBSTtvQkFBQytCLElBQUk7b0JBQUNDLEVBQUUsRUFBRSxFQUFFO29CQUFFQyxFQUFFLEVBQUUsQ0FBQzs4QkFDcEIsNEVBQUNuQyw0Q0FBRzt3QkFBQ29DLEVBQUUsRUFBRTs0QkFBQ2YsU0FBUyxFQUFDLFFBQVE7NEJBQUVKLEtBQUssRUFBQyxHQUFHOzRCQUFDcUIsRUFBRSxFQUFDLEVBQUU7eUJBQUM7a0NBQzFDLDRFQUFDNUIsdURBQVk7NEJBQUM4QyxhQUFhLEVBQUMsTUFBTTtzQ0FDOUIsNEVBQUMxQixLQUFHO2dDQUFDa0IsU0FBUyxFQUFDLG1CQUFtQjswQ0FDOUIsNEVBQUN2QyxxREFBVTtvQ0FDUDhCLE9BQU8sRUFBRTt3Q0FDTEMsS0FBSyxFQUFFO0FBQUMsNkNBQUM7QUFBRSwrQ0FBRztBQUFFLCtDQUFHO0FBQUUsNkNBQUM7QUFBRSw2Q0FBQzt5Q0FBQztxQ0FDN0I7b0NBQ0RDLFVBQVUsRUFBRTt3Q0FDUkMsUUFBUSxFQUFFLENBQUM7d0NBQ1hDLElBQUksRUFBRSxXQUFXO3dDQUNqQkMsS0FBSyxFQUFFO0FBQUMsNkNBQUM7QUFBRSwrQ0FBRztBQUFFLCtDQUFHO0FBQUUsK0NBQUc7QUFBRSw2Q0FBQzt5Q0FBQzt3Q0FDNUJDLE1BQU0sRUFBRUMsUUFBUTt3Q0FDaEJDLFdBQVcsRUFBRSxDQUFDO3FDQUNqQjs7c0RBRUcsOERBQUNVLEtBQUc7NENBQUNDLEdBQUcsRUFBQyxZQUFZOzRDQUFDekMsS0FBSyxFQUFDLE1BQU07NENBQUMwQyxHQUFHLEVBQUMsT0FBTzs0Q0FBQ0MsT0FBTyxFQUFFbkMsVUFBVTs7Ozs7Z0RBQVE7c0RBQzFFLDhEQUFDckIsZ0RBQUs7NENBQ0ZtQixJQUFJLEVBQUVBLElBQUk7NENBQ1ZzQyxPQUFPLEVBQUVuQyxXQUFXOzRDQUNwQm9DLGlCQUFlLEVBQUMsbUJBQW1COzRDQUNuQ0Msa0JBQWdCLEVBQUMseUJBQXlCO3NEQUUxQyw0RUFBQy9ELDRDQUFHO2dEQUFDb0MsRUFBRSxFQUFFdkIsS0FBSzs7a0VBQ1YsOERBQUNaLHFEQUFVO3dEQUFDK0QsRUFBRSxFQUFDLG1CQUFtQjt3REFBQ1gsT0FBTyxFQUFDLElBQUk7d0RBQUNZLFNBQVMsRUFBQyxJQUFJO2tFQUFDLHNCQUUvRDs7Ozs7NERBQWE7a0VBQ2IsOERBQUNyRCwyREFBZ0I7d0RBQ2I4QyxHQUFHLEVBQUMsWUFBWTt3REFDaEJRLFFBQVE7Ozs7OzREQUNOOzs7Ozs7b0RBQ0o7Ozs7O2dEQUNGOzs7Ozs7d0NBQ0M7Ozs7O29DQUNYOzs7OztnQ0FDSzs7Ozs7NEJBQ2I7Ozs7O3dCQUNQOzs7Ozs7Z0JBQ0o7Ozs7O1lBRUwsQ0FDTjtDQUNIO0dBNUZTNUMsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBOEZqQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmV3aG9tZS5qcz84NzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL3N5c3RlbVwiO1xuaW1wb3J0IHsgVHlwb2dyYXBoeSwgR3JpZCAsIEJ1dHRvbiwgTW9kYWwsIFN0YWNrfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbW90aW9uLCBNb3Rpb25Db25maWcgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IFJlYWN0QXVkaW9QbGF5ZXIgZnJvbSAncmVhY3QtYXVkaW8tcGxheWVyJztcblxuXG5jb25zdCBzdHlsZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICc1MCUnLFxuICAgIGxlZnQ6ICc1JScsXG4gICAgLy8gdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB3aWR0aDogNDAwLFxuICAgIC8vIGJnY29sb3I6ICdncmV5JyxcbiAgICBjb2xvcjpcIndoaXRlXCIsXG4gICAgLy8gYm9yZGVyOiAnMnB4IHNvbGlkICMwMDAnLFxuICAgIC8vIGJvcmRlclJhZGl1czogMTAsXG4gICAgYm94U2hhZG93OiAyNCxcbiAgICBwOiA0LFxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiXG4gIH07XG5cbiBmdW5jdGlvbiBUaGVob21lKCkge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4gc2V0T3Blbih0cnVlKTtcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHNldE9wZW4oZmFsc2UpO1xuXG4gICAgY29uc3QgY29uc3RyYWludHNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIiwgd2lkdGg6XCIxMDAlXCIsIGJnY29sb3I6XCJyZWRcIixtbDoxMH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFsxLCAxLCAxLjEsIDEsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lczogWzAsIDAuMiwgMC41LCAwLjgsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdERlbGF5OiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLCByb3RhdGU6IDEwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOCwgcm90YXRlOiAtMTAsIGJvcmRlclJhZGl1czogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXZWxjb21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yLCByb3RhdGU6IC0xMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjgsIHJvdGF0ZTogMTAsIGJvcmRlclJhZGl1czogXCIxMDAlXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljayBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIHdpZHRoOjUwMCxtbDoxMH19PlxuICAgICAgICAgICAgICAgICAgICA8TW90aW9uQ29uZmlnIHJlZHVjZWRNb3Rpb249XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFsxLCAxLjEsIDEuMSwgMSwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzOiBbMCwgMC4yLCAwLjUsIDAuOCwgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IEluZmluaXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0RGVsYXk6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvY3RocnUucG5nXCIgd2lkdGg9XCIxMDAlXCIgYWx0PVwiZXJyb3JcIiBvbkNsaWNrPXtoYW5kbGVPcGVufT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhleGR1bXAgdG8gZmluZCBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0QXVkaW9QbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9maW5hbC5tcDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01vdGlvbkNvbmZpZz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cblxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVob21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiVHlwb2dyYXBoeSIsIkdyaWQiLCJCdXR0b24iLCJNb2RhbCIsIlN0YWNrIiwidXNlUmVmIiwidXNlU3RhdGUiLCJyZW5kZXIiLCJtb3Rpb24iLCJNb3Rpb25Db25maWciLCJMaW5rIiwiUmVhY3RBdWRpb1BsYXllciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJjb2xvciIsImJveFNoYWRvdyIsInAiLCJ0ZXh0QWxpZ24iLCJUaGVob21lIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJjb25zdHJhaW50c1JlZiIsImNvdW50Iiwic2V0Q291bnQiLCJkaXYiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwibWQiLCJzeCIsImJnY29sb3IiLCJtbCIsImFuaW1hdGUiLCJzY2FsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJ0aW1lcyIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0RGVsYXkiLCJjbGFzc05hbWUiLCJ3aGlsZUhvdmVyIiwicm90YXRlIiwid2hpbGVUYXAiLCJib3JkZXJSYWRpdXMiLCJ2YXJpYW50IiwiYWxpZ24iLCJocmVmIiwicmVkdWNlZE1vdGlvbiIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiYXJpYS1sYWJlbGxlZGJ5IiwiYXJpYS1kZXNjcmliZWRieSIsImlkIiwiY29tcG9uZW50IiwiY29udHJvbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Newhome.js\n");

/***/ })

});