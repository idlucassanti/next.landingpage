webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\sections\\service-section.js",
    _s = $RefreshSig$(),
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var data = {
  subTitle: 'nossos serviços',
  title: 'Objetivos de negócios alcançados com expertise',
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'Smart Features',
    title: 'Smart Features',
    text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    altText: 'Secure Contents',
    title: 'Secure Contents',
    text: 'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.'
  }]
};
function ServiceSection() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: data.title,
    subTitle: data.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, data.features.map(function (feature) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: feature.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: feature.imgSrc,
      alt: feature.altText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, feature.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      as: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }, feature.text));
  })))));
}

_s(ServiceSection, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = ServiceSection;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: "".concat(playPluse, " 1.5s ease-out infinite"),
      opacity: 0.5
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

var _c;

$RefreshReg$(_c, "ServiceSection");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIlNlcnZpY2VUaHVtYiIsInZpZGVvQnRuIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJncmlkIiwibWFwIiwiZmVhdHVyZSIsImNhcmQiLCJwbGF5UGx1c2UiLCJrZXlmcmFtZXMiLCJjb3JlRmVhdHVyZSIsInB5IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInBiIiwibXIiLCJvcmRlciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwicCIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwidGV4dEFsaWduIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInN2ZyIsImZvbnRTaXplIiwiY29udGVudEJveCIsImZsZXhTaHJpbmsiLCJtYiIsInByIiwicGwiLCJwdCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJpY29uIiwid3JhcHBlciIsIm10IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsInZpZGVvV3JhcHBlciIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImlmcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLGlCQURDO0FBRVhDLE9BQUssRUFBRSxnREFGSTtBQUdYQyxVQUFRLEVBQUUsQ0FDUjtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFNLEVBQUVDLGdFQUZWO0FBR0VDLFdBQU8sRUFBRSxnQkFIWDtBQUlFTCxTQUFLLEVBQUUsZ0JBSlQ7QUFLRU0sUUFBSSxFQUNGO0FBTkosR0FEUSxFQVNSO0FBQ0VKLE1BQUUsRUFBRSxDQUROO0FBRUVDLFVBQU0sRUFBRUksa0VBRlY7QUFHRUYsV0FBTyxFQUFFLGlCQUhYO0FBSUVMLFNBQUssRUFBRSxpQkFKVDtBQUtFTSxRQUFJLEVBQ0Y7QUFOSixHQVRRO0FBSEMsQ0FBYjtBQXVCZSxTQUFTRSxjQUFULEdBQTBCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsS0FBRCxDQURIO0FBQUEsTUFDaENDLFNBRGdDO0FBQUEsTUFDckJDLFlBRHFCOztBQUd2QyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDekJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBSCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNELEdBSkQ7O0FBT0EsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFDSSxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQywrREFBWjtBQUEwQixPQUFHLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLHFEQUFDLCtDQUFEO0FBQ0UsTUFBRSxFQUFFSCxNQUFNLENBQUNJLFFBRGI7QUFFRSxXQUFPLEVBQUVSLFdBRlg7QUFHRSxrQkFBVyxhQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBTEYsQ0FGRixFQVdFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFSSxNQUFNLENBQUNLLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLE9BQUcsRUFBRUMsZ0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsQ0FERixFQWdCRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRU4sTUFBTSxDQUFDQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsK0RBQUQ7QUFBYSxTQUFLLEVBQUVuQixJQUFJLENBQUNFLEtBQXpCO0FBQWdDLFlBQVEsRUFBRUYsSUFBSSxDQUFDQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRWlCLE1BQU0sQ0FBQ08sSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHekIsSUFBSSxDQUFDRyxRQUFMLENBQWN1QixHQUFkLENBQWtCLFVBQUFDLE9BQU87QUFBQSxXQUN4QixxREFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRVQsTUFBTSxDQUFDVSxJQUFoQjtBQUFzQixTQUFHLEVBQUVELE9BQU8sQ0FBQ3ZCLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyw4Q0FBRDtBQUFPLFNBQUcsRUFBRXVCLE9BQU8sQ0FBQ3RCLE1BQXBCO0FBQTRCLFNBQUcsRUFBRXNCLE9BQU8sQ0FBQ3BCLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLHFEQUFDLGdEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHb0IsT0FBTyxDQUFDekIsS0FEWCxDQUZGLEVBS0UscURBQUMsNkNBQUQ7QUFBTSxRQUFFLEVBQUMsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0d5QixPQUFPLENBQUNuQixJQURYLENBTEYsQ0FEd0I7QUFBQSxHQUF6QixDQURILENBSEYsQ0FoQkYsQ0FERixDQURGO0FBc0NEOztHQWhEdUJFLGM7O0tBQUFBLGM7QUFrRHhCLElBQU1tQixTQUFTLEdBQUdDLCtEQUFILHFXQUFmO0FBWUEsSUFBTVosTUFBTSxHQUFHO0FBQ2JhLGFBQVcsRUFBRTtBQUNYQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsSUFBbkIsRUFBeUIsQ0FBekIsQ0FETztBQUVYQyxZQUFRLEVBQUU7QUFGQyxHQURBO0FBS2JkLGNBQVksRUFBRTtBQUNaZSxXQUFPLEVBQUUsTUFERztBQUVaQyxjQUFVLEVBQUUsQ0FBQyxZQUFELEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixRQUEzQixDQUZBO0FBR1pDLGtCQUFjLEVBQUUsQ0FBQyxZQUFELEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixlQUEzQixDQUhKO0FBSVpDLGlCQUFhLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixLQUF2QixDQUpIO0FBS1pDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixDQUE1QjtBQUxRLEdBTEQ7QUFZYmxCLFdBQVMsRUFBRTtBQUNUbUIsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLENBREs7QUFFVEMsU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBRkU7QUFHVEMsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLENBSEs7QUFJVFAsV0FBTyxFQUFFLGFBSkE7QUFLVEQsWUFBUSxFQUFFLFVBTEQ7QUFNVCxhQUFTO0FBQ1BBLGNBQVEsRUFBRSxVQURIO0FBRVBTLFlBQU0sRUFBRSxDQUZEO0FBR1BDLFlBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOO0FBSEQ7QUFOQSxHQVpFO0FBd0JicEIsVUFBUSxFQUFFO0FBQ1JVLFlBQVEsRUFBRSxVQURGO0FBRVJXLFVBQU0sRUFBRSxDQUFDLEVBRkQ7QUFHUkMsUUFBSSxFQUFFLENBQUMsR0FIQztBQUlSSCxVQUFNLEVBQUUsQ0FBQyxDQUpEO0FBS1JSLFdBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxjQUFqQztBQUxELEdBeEJHO0FBK0JiWixVQUFRLEVBQUU7QUFDUm9CLFVBQU0sRUFBRSxDQURBO0FBRVJULFlBQVEsRUFBRSxVQUZGO0FBR1JZLFFBQUksRUFBRSxLQUhFO0FBSVJDLE9BQUcsRUFBRSxLQUpHO0FBS1JDLGFBQVMsRUFBRSx1QkFMSDtBQU1SQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsT0FBN0IsQ0FOQztBQU9STCxVQUFNLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsT0FBN0IsQ0FQQTtBQVFSTSxLQUFDLEVBQUUsZ0JBUks7QUFTUkMsbUJBQWUsRUFBRSxhQVRUO0FBVVIsaUJBQWE7QUFDWGpCLGNBQVEsRUFBRSxVQURDO0FBRVhrQixhQUFPLEVBQUUsSUFGRTtBQUdYTixVQUFJLEVBQUUsS0FISztBQUlYQyxTQUFHLEVBQUUsS0FKTTtBQUtYQyxlQUFTLEVBQUUsbUNBTEE7QUFNWGIsYUFBTyxFQUFFLE9BTkU7QUFPWGMsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLE9BQTdCLENBUEk7QUFRWEwsWUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLE9BQTdCLENBUkc7QUFTWE8scUJBQWUsRUFBRSxTQVROO0FBVVhFLGtCQUFZLEVBQUUsS0FWSDtBQVdYQyxlQUFTLFlBQUt4QixTQUFMLDRCQVhFO0FBWVh5QixhQUFPLEVBQUU7QUFaRSxLQVZMO0FBd0JSLGNBQVU7QUFDUkoscUJBQWUsRUFBRSx1QkFEVDtBQUVSRixXQUFLLEVBQUUsU0FGQztBQUdSTCxZQUFNLEVBQUUsU0FIQTtBQUlSWSxlQUFTLEVBQUUsUUFKSDtBQUtSSCxrQkFBWSxFQUFFLEtBTE47QUFNUkksWUFBTSxFQUFFLFNBTkE7QUFPUkMsZ0JBQVUsRUFBRSxVQVBKO0FBUVJ2QixhQUFPLEVBQUUsTUFSRDtBQVNSRSxvQkFBYyxFQUFFLFFBVFI7QUFVUkQsZ0JBQVUsRUFBRSxRQVZKO0FBV1JGLGNBQVEsRUFBRSxVQVhGO0FBWVJTLFlBQU0sRUFBRTtBQVpBLEtBeEJGO0FBc0NSZ0IsT0FBRyxFQUFFO0FBQ0hDLGNBQVEsRUFBRSxDQUFDLEVBQUQsRUFBSyxJQUFMLEVBQVcsRUFBWCxFQUFlLElBQWYsRUFBcUIsRUFBckI7QUFEUDtBQXRDRyxHQS9CRztBQXlFYkMsWUFBVSxFQUFFO0FBQ1ZaLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixHQUEvQixFQUFvQyxJQUFwQyxFQUEwQyxHQUExQyxDQURHO0FBRVZhLGNBQVUsRUFBRSxDQUZGO0FBR1ZDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsRUFBVixFQUFjLENBQWQsQ0FITTtBQUlWUCxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixNQUF2QjtBQUpELEdBekVDO0FBK0ViOUIsTUFBSSxFQUFFO0FBQ0pzQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLE1BQXRCLENBREE7QUFFSkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGQTtBQUdKQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsQ0FBdEIsQ0FIQTtBQUlKQyxNQUFFLEVBQUUsTUFKQTtBQUtKbEIsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLE1BQW5CLENBTEg7QUFNSm1CLFdBQU8sRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLFFBQTdCLENBTkw7QUFPSkMsdUJBQW1CLEVBQUUsQ0FBQyxlQUFEO0FBUGpCLEdBL0VPO0FBd0ZieEMsTUFBSSxFQUFFO0FBQ0pNLFdBQU8sRUFBRSxNQURMO0FBRUpDLGNBQVUsRUFBRSxZQUZSO0FBR0pzQixjQUFVLEVBQUU7QUFIUixHQXhGTztBQThGYlksTUFBSSxFQUFFO0FBQ0pyQixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsTUFBM0IsQ0FESDtBQUVKTCxVQUFNLEVBQUUsTUFGSjtBQUdKa0IsY0FBVSxFQUFFLENBSFI7QUFJSnRCLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixDQUF0QjtBQUpBLEdBOUZPO0FBb0diK0IsU0FBTyxFQUFFO0FBQ1B0QixTQUFLLEVBQUUsTUFEQTtBQUVQZCxXQUFPLEVBQUUsTUFGRjtBQUdQRyxpQkFBYSxFQUFFLFFBSFI7QUFJUGtCLGFBQVMsRUFBRSxNQUpKO0FBS1BnQixNQUFFLEVBQUUsTUFMRztBQU1QckUsU0FBSyxFQUFFO0FBQ0x5RCxjQUFRLEVBQUUsQ0FETDtBQUVMYSxXQUFLLEVBQUUsbUJBRkY7QUFHTEMsZ0JBQVUsRUFBRSxHQUhQO0FBSUxDLGdCQUFVLEVBQUUsR0FKUDtBQUtMWixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCO0FBTEMsS0FOQTtBQWNQN0QsWUFBUSxFQUFFO0FBQ1IwRCxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsRUFBd0IsQ0FBeEIsQ0FERjtBQUVSZSxnQkFBVSxFQUFFLEdBRko7QUFHUkQsZ0JBQVUsRUFBRTtBQUhKO0FBZEgsR0FwR0k7QUF3SGJFLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUUsTUFERTtBQUVaM0MsWUFBUSxFQUFFLFVBRkU7QUFHWmUsU0FBSyxFQUFFLE9BSEs7QUFJWixnQkFBWTtBQUNWRyxhQUFPLEVBQUUsSUFEQztBQUVWakIsYUFBTyxFQUFFLE9BRkM7QUFHVjJDLGdCQUFVLEVBQUU7QUFIRixLQUpBO0FBU1pDLFVBQU0sRUFBRTtBQUNOOUIsV0FBSyxFQUFFLE1BREQ7QUFFTkwsWUFBTSxFQUFFLE1BRkY7QUFHTlYsY0FBUSxFQUFFLFVBSEo7QUFJTmEsU0FBRyxFQUFFLENBSkM7QUFLTkQsVUFBSSxFQUFFO0FBTEE7QUFUSTtBQXhIRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlNTQ0MDI5NTdlNDIxY2M3OWNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEdyaWQsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbyc7XG5pbXBvcnQgeyBJb0lvc1BsYXkgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5cbmltcG9ydCBTZXJ2aWNlVGh1bWIgZnJvbSAnYXNzZXRzL3NlcnZpY2UtdGh1bWIucG5nJztcbmltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4xLnBuZyc7XG5cbmltcG9ydCBTbWFydCBmcm9tICdhc3NldHMvc2VydmljZXMvc21hcnQuc3ZnJztcbmltcG9ydCBTZWN1cmUgZnJvbSAnYXNzZXRzL3NlcnZpY2VzL3NlY3VyZS5zdmcnO1xuXG5jb25zdCBkYXRhID0ge1xuICBzdWJUaXRsZTogJ25vc3NvcyBzZXJ2acOnb3MnLFxuICB0aXRsZTogJ09iamV0aXZvcyBkZSBuZWfDs2Npb3MgYWxjYW7Dp2Fkb3MgY29tIGV4cGVydGlzZScsXG4gIGZlYXR1cmVzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBpbWdTcmM6IFNtYXJ0LFxuICAgICAgYWx0VGV4dDogJ1NtYXJ0IEZlYXR1cmVzJyxcbiAgICAgIHRpdGxlOiAnU21hcnQgRmVhdHVyZXMnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4geW91ciBibG9vZCB0ZXN0cy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBpbWdTcmM6IFNlY3VyZSxcbiAgICAgIGFsdFRleHQ6ICdTZWN1cmUgQ29udGVudHMnLFxuICAgICAgdGl0bGU6ICdTZWN1cmUgQ29udGVudHMnLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0dldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cy4geW91ciBibG9vZCB0ZXN0cy4nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZXJ2aWNlU2VjdGlvbigpIHtcbiAgY29uc3QgW3ZpZGVvT3Blbiwgc2V0VmlkZW9PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uc2VydmljZXMnfX0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XG4gICAgICAgICAgPEltYWdlIHNyYz17U2VydmljZVRodW1ifSBhbHQvPlxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICBzeD17c3R5bGVzLnZpZGVvQnRufVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdQbGF5IEJ1dHRvbidcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPElvSW9zUGxheSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zaGFwZUJveH0+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzaGFwZVBhdHRlcm59IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cbiAgICAgICAgICA8VGV4dEZlYXR1cmUgdGl0bGU9e2RhdGEudGl0bGV9IHN1YlRpdGxlPXtkYXRhLnN1YlRpdGxlfSAvPlxuXG4gICAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHtkYXRhLmZlYXR1cmVzLm1hcChmZWF0dXJlPT4oXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2ZlYXR1cmUuaWR9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ZlYXR1cmUuaW1nU3JjfSBhbHQ9e2ZlYXR1cmUuYWx0VGV4dH0vPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIj5cbiAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIj5cbiAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLnRleHR9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHBsYXlQbHVzZSA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWigwKSBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEuNSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb3JlRmVhdHVyZToge1xuICAgIHB5OiBbMCwgbnVsbCwgbnVsbCwgMiwgbnVsbCwgN10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIH0sXG4gIGNvbnRhaW5lckJveDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAnY2VudGVyJ10sXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgcGI6IFswLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA3XSxcbiAgfSxcbiAgdGh1bWJuYWlsOiB7XG4gICAgbXI6IFsnYXV0bycsIG51bGwsIG51bGwsIDYsIDYwLCA4NV0sXG4gICAgb3JkZXI6IFsyLCBudWxsLCBudWxsLCAwXSxcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgMF0sXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnPiBpbWcnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGhlaWdodDogWzMxMCwgJ2F1dG8nXSxcbiAgICB9LFxuICB9LFxuICBzaGFwZUJveDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGJvdHRvbTogLTY4LFxuICAgIGxlZnQ6IC0xNjAsXG4gICAgekluZGV4OiAtMSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gIH0sXG4gIHZpZGVvQnRuOiB7XG4gICAgekluZGV4OiAyLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNjBweCcsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgcDogJzBweCAhaW1wb3J0YW50JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgbGVmdDogJzUwJScsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGFuaW1hdGlvbjogYCR7cGxheVBsdXNlfSAxLjVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICB9LFxuICAgICc+IHNwYW4nOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNSknLFxuICAgICAgd2lkdGg6ICdpbmhlcml0JyxcbiAgICAgIGhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC41cycsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAyLFxuICAgIH0sXG4gICAgc3ZnOiB7XG4gICAgICBmb250U2l6ZTogWzQwLCBudWxsLCA0OCwgbnVsbCwgNjJdLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRlbnRCb3g6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgMzE1LCAzOTAsIDQ1MCwgbnVsbCwgNTAwXSxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1iOiBbNywgbnVsbCwgNjAsIDBdLFxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxuICB9LFxuICBncmlkOiB7XG4gICAgcHI6IFsyLCAwLCBudWxsLCBudWxsLCA2LCAnNzBweCddLFxuICAgIHBsOiBbMiwgMF0sXG4gICAgcHQ6IFsyLCBudWxsLCBudWxsLCBudWxsLCAzXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIHdpZHRoOiBbJzEwMCUnLCAzNzAsIDQyMCwgJzEwMCUnXSxcbiAgICBncmlkR2FwOiBbJzM1cHggMCcsIG51bGwsIG51bGwsIG51bGwsICc1MHB4IDAnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLDFmciknXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzJyxcbiAgfSxcblxuICBpY29uOiB7XG4gICAgd2lkdGg6IFsnNDVweCcsIG51bGwsIG51bGwsIG51bGwsICc1NXB4J10sXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgZmxleFNocmluazogMCxcbiAgICBtcjogWzMsIG51bGwsIG51bGwsIG51bGwsIDRdLFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgbXQ6ICctNXB4JyxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IDMsXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIG1iOiBbMiwgbnVsbCwgMywgMiwgM10sXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNHB4JywgMV0sXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjksXG4gICAgfSxcbiAgfSxcbiAgdmlkZW9XcmFwcGVyOiB7XG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzkwMHB4JyxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ1RvcDogJzU2LjI1JScsXG4gICAgfSxcbiAgICBpZnJhbWU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=