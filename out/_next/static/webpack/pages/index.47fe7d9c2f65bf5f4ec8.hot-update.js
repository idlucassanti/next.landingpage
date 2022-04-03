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
  }, "Explorar"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcyJdLCJuYW1lcyI6WyJCYW5uZXIiLCJzdHlsZXMiLCJiYW5uZXIiLCJjb250YWluZXIiLCJjb250ZW50Qm94IiwicHQiLCJwYiIsInBvc2l0aW9uIiwiekluZGV4IiwiY29udGVudCIsImJvdHRvbSIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRJbWFnZSIsIlNoYXBlTGVmdCIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsInJpZ2h0IiwiU2hhcGVSaWdodCIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJteCIsInRleHRBbGlnbiIsIm1iIiwiaW1hZ2VCb3giLCJpbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFNBQ0U7QUFBUyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBcEI7QUFBNEIsTUFBRSxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUQsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUYsTUFBTSxDQUFDQyxNQUFQLENBQWNFLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFdBQU8sRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQURGLEVBSUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLFdBQU8sRUFBQyxlQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdKQUpGLEVBT0UscURBQUMsK0NBQUQ7QUFBUSxXQUFPLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixDQURGLENBREYsQ0FERjtBQWVEO0tBaEJ1QkosTTtBQWtCeEIsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNORyxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxPQUFqRCxFQUEwRCxPQUExRCxDQURFO0FBRU5DLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0IsQ0FGRTtBQUdOQyxZQUFRLEVBQUUsVUFISjtBQUlOQyxVQUFNLEVBQUUsQ0FKRjtBQUtOLGlCQUFhO0FBQ1hELGNBQVEsRUFBRSxVQURDO0FBRVhFLGFBQU8sRUFBRSxJQUZFO0FBR1hDLFlBQU0sRUFBRSxDQUhHO0FBSVhDLFVBQUksRUFBRSxDQUpLO0FBS1hDLFlBQU0sRUFBRSxNQUxHO0FBTVhDLFdBQUssRUFBRSxNQU5JO0FBT1hMLFlBQU0sRUFBRSxDQUFDLENBUEU7QUFRWE0scUJBQWUsZ0JBQVNDLDREQUFULE1BUko7QUFTWEMsc0JBQWdCLGFBVEw7QUFVWEMsd0JBQWtCLEVBQUUsYUFWVDtBQVdYQyxvQkFBYyxFQUFFO0FBWEwsS0FMUDtBQWtCTixnQkFBWTtBQUNWWCxjQUFRLEVBQUUsVUFEQTtBQUVWRSxhQUFPLEVBQUUsSUFGQztBQUdWQyxZQUFNLEVBQUUsTUFIRTtBQUlWUyxXQUFLLEVBQUUsQ0FKRztBQUtWUCxZQUFNLEVBQUUsTUFMRTtBQU1WQyxXQUFLLEVBQUUsTUFORztBQU9WTCxZQUFNLEVBQUUsQ0FBQyxDQVBDO0FBUVZNLHFCQUFlLGdCQUFTTSw2REFBVCxNQVJMO0FBU1ZKLHNCQUFnQixhQVROO0FBVVZDLHdCQUFrQixFQUFFLGNBVlY7QUFXVkMsb0JBQWMsRUFBRTtBQVhOLEtBbEJOO0FBK0JOZixhQUFTLEVBQUU7QUFDVGtCLGVBQVMsRUFBRSxTQURGO0FBRVRDLGFBQU8sRUFBRSxNQUZBO0FBR1RDLG1CQUFhLEVBQUUsUUFITjtBQUlUQyxvQkFBYyxFQUFFO0FBSlAsS0EvQkw7QUFxQ05wQixjQUFVLEVBQUU7QUFDVlMsV0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUIsSUFBekIsRUFBK0IsS0FBL0IsRUFBc0MsS0FBdEMsRUFBNkMsS0FBN0MsRUFBb0QsS0FBcEQsQ0FERztBQUVWWSxRQUFFLEVBQUUsTUFGTTtBQUdWQyxlQUFTLEVBQUUsUUFIRDtBQUlWQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFKTSxLQXJDTjtBQTJDTkMsWUFBUSxFQUFFO0FBQ1JKLG9CQUFjLEVBQUUsUUFEUjtBQUVSRSxlQUFTLEVBQUUsUUFGSDtBQUdSSixhQUFPLEVBQUUsYUFIRDtBQUlSSyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsSUFBcEIsRUFBMEIsT0FBMUIsRUFBbUMsSUFBbkMsRUFBeUMsQ0FBQyxDQUExQyxDQUpJO0FBS1JFLFNBQUcsRUFBRTtBQUNIdEIsZ0JBQVEsRUFBRSxVQURQO0FBRUhLLGNBQU0sRUFBRSxDQUFDLEdBQUQsRUFBTSxNQUFOO0FBRkw7QUFMRztBQTNDSjtBQURLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDdmZTdkOWMyZjY1YmY1ZjRlYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgQmFubmVySW1nIGZyb20gJ2Fzc2V0cy9iYW5uZXItdGh1bWIucG5nJztcbmltcG9ydCBTaGFwZUxlZnQgZnJvbSAnYXNzZXRzL3NoYXBlLWxlZnQucG5nJztcbmltcG9ydCBTaGFwZVJpZ2h0IGZyb20gJ2Fzc2V0cy9zaGFwZS1yaWdodC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3N0eWxlcy5iYW5uZXJ9IGlkPVwiYmFubmVyXCI+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmlhbnQ9XCJoZXJvUHJpbWFyeVwiPlxuICAgICAgICAgICAgR3JhbmRlcyBzb2x1w6fDtWVzIGV4aWdlbSBncmFuZGVzIHRlY25vbG9naWFzXG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHZhcmlhbnQ9XCJoZXJvU2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICBPYnRlbmhhIG8gY29udHJvbGUgZGEgc3VhIGltb2JpbGnDoXJpYSBhdHJhdsOpcyBkZSB1bSBnZXJlbmNpbWFuZW50byBxdWUgZm9ybmVjZW0gYXMgbWVsaG9yZXMgZGlyZXRyaXplcyBwYXJhIHRvbWFkYSBkZSBkZWNpc8O1ZXMuXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5FeHBsb3JhcjwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYW5uZXI6IHtcbiAgICBwdDogWycxNDBweCcsICcxNDVweCcsICcxNTVweCcsICcxNzBweCcsIG51bGwsIG51bGwsICcxODBweCcsICcyMTVweCddLFxuICAgIHBiOiBbMiwgbnVsbCwgMCwgbnVsbCwgMiwgMCwgbnVsbCwgNV0sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAyLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogNixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVMZWZ0fSlgLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJzM2JScsXG4gICAgfSxcbiAgICAnJjo6YWZ0ZXInOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvdHRvbTogJzQwcHgnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7U2hhcGVSaWdodH0pYCxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGBuby1yZXBlYXRgLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIHJpZ2h0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiAnMzIlJyxcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGNvbnRlbnRCb3g6IHtcbiAgICAgIHdpZHRoOiBbJzEwMCUnLCAnOTAlJywgJzUzNXB4JywgbnVsbCwgJzU3JScsICc2MCUnLCAnNjglJywgJzYwJSddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBtYjogWzAsIG51bGwsIC02LCBudWxsLCBudWxsLCAnLTQwcHgnLCBudWxsLCAtM10sXG4gICAgICBpbWc6IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGhlaWdodDogWzI0NSwgJ2F1dG8nXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9