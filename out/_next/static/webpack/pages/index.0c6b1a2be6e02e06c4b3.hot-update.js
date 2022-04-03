webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/banner-thumb.png */ "./src/assets/banner-thumb.png");
/* harmony import */ var assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/shape-left.png */ "./src/assets/shape-left.png");
/* harmony import */ var assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-right.png */ "./src/assets/shape-right.png");
/* harmony import */ var assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function Banner() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: styles.banner,
    id: "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.banner.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h1",
    variant: "heroPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Grandes solu\xE7\xF5es exigem grandes tecnologias"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    variant: "heroSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Obtenha o controle da sua imobili\xE1ria atrav\xE9s de um gerencimanento que fornecem as melhores diretrizes para tomada de decis\xF5es."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Explorar")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.banner.imageBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_banner_thumb_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }))));
}
_c = Banner;
var styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: "url(".concat(assets_shape_left_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom left',
      backgroundSize: '36%'
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: "url(".concat(assets_shape_right_png__WEBPACK_IMPORTED_MODULE_4___default.a, ")"),
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'bottom right',
      backgroundSize: '32%'
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7]
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto']
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Banner");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJzdHlsZXMiLCJiYW5uZXIiLCJjb250YWluZXIiLCJjb250ZW50Qm94IiwiaW1hZ2VCb3giLCJCYW5uZXJJbWciLCJwdCIsInBiIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjb250ZW50IiwiYm90dG9tIiwibGVmdCIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIiwiU2hhcGVMZWZ0IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicmlnaHQiLCJTaGFwZVJpZ2h0IiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm14IiwidGV4dEFsaWduIiwibWIiLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFNBQ0U7QUFBUyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBcEI7QUFBNEIsTUFBRSxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDQyxNQUFQLENBQWNFLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFdBQU8sRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURGLEVB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QUFHLEVBQUU7QUFDSHJCLGdCQUFRLEVBQUUsVUFEUDtBQUVISyxjQUFNLEVBQUUsQ0FBQyxHQUFELEVBQU0sTUFBTjtBQUZMO0FBTEc7QUEzQ0o7QUFESyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjNmIxYTJiZTZlMDJlMDZjNGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IEJhbm5lckltZyBmcm9tICdhc3NldHMvYmFubmVyLXRodW1iLnBuZyc7XG5pbXBvcnQgU2hhcGVMZWZ0IGZyb20gJ2Fzc2V0cy9zaGFwZS1sZWZ0LnBuZyc7XG5pbXBvcnQgU2hhcGVSaWdodCBmcm9tICdhc3NldHMvc2hhcGUtcmlnaHQucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXtzdHlsZXMuYmFubmVyfSBpZD1cImJhbm5lclwiPlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmJhbm5lci5jb250YWluZXJ9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYmFubmVyLmNvbnRlbnRCb3h9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cbiAgICAgICAgICAgIEdyYW5kZXMgc29sdcOnw7VlcyBleGlnZW0gZ3JhbmRlcyB0ZWNub2xvZ2lhc1xuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBhcz1cInBcIiB2YXJpYW50PVwiaGVyb1NlY29uZGFyeVwiPlxuICAgICAgICAgICAgT2J0ZW5oYSBvIGNvbnRyb2xlIGRhIHN1YSBpbW9iaWxpw6FyaWEgYXRyYXbDqXMgZGUgdW0gZ2VyZW5jaW1hbmVudG8gcXVlIGZvcm5lY2VtIGFzIG1lbGhvcmVzIGRpcmV0cml6ZXMgcGFyYSB0b21hZGEgZGUgZGVjaXPDtWVzLlxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+RXhwbG9yYXI8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuaW1hZ2VCb3h9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lckltZ30gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYmFubmVyOiB7XG4gICAgcHQ6IFsnMTQwcHgnLCAnMTQ1cHgnLCAnMTU1cHgnLCAnMTcwcHgnLCBudWxsLCBudWxsLCAnMTgwcHgnLCAnMjE1cHgnXSxcbiAgICBwYjogWzIsIG51bGwsIDAsIG51bGwsIDIsIDAsIG51bGwsIDVdLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHpJbmRleDogMixcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBib3R0b206IDYsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlTGVmdH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIGxlZnQnLFxuICAgICAgYmFja2dyb3VuZFNpemU6ICczNiUnLFxuICAgIH0sXG4gICAgJyY6OmFmdGVyJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBib3R0b206ICc0MHB4JyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiAtMSxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke1NoYXBlUmlnaHR9KWAsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2JvdHRvbSByaWdodCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzMyJScsXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1pbkhlaWdodDogJ2luaGVyaXQnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBjb250ZW50Qm94OiB7XG4gICAgICB3aWR0aDogWycxMDAlJywgJzkwJScsICc1MzVweCcsIG51bGwsICc1NyUnLCAnNjAlJywgJzY4JScsICc2MCUnXSxcbiAgICAgIG14OiAnYXV0bycsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICAgIH0sXG4gICAgaW1hZ2VCb3g6IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgbWI6IFswLCBudWxsLCAtNiwgbnVsbCwgbnVsbCwgJy00MHB4JywgbnVsbCwgLTNdLFxuICAgICAgaW1nOiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBoZWlnaHQ6IFsyNDUsICdhdXRvJ10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==