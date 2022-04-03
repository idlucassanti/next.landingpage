webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/core-feature.png */ "./src/assets/core-feature.png");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var data = {
  subTitle: 'Principais recursos',
  title: 'Dashboard inteligente que facilita na tomada de decisão',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#'
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: data.title,
    subTitle: data.subTitle,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  })))));
}
_c = CoreFeature;
var styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};

var _c;

$RefreshReg$(_c, "CoreFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsIkNvcmVGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsImNvbnRlbnRCb3giLCJ0aHVtYm5haWwiLCJGZWF0dXJlVGh1bWIiLCJzaGFwZUJveCIsInNoYXBlUGF0dGVybiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInBiIiwiZmxleFNocmluayIsInB4IiwidGV4dEFsaWduIiwid2lkdGgiLCJteCIsInByIiwicG9zaXRpb24iLCJtciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLHFCQURDO0FBRVhDLE9BQUssRUFBRSx5REFGSTtBQUdYQyxhQUFXLEVBQ1QsMklBSlM7QUFLWEMsU0FBTyxFQUFFLGFBTEU7QUFNWEMsUUFBTSxFQUFFO0FBTkcsQ0FBYjtBQVNlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxZQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0UsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFD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dGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDkxN2QyNmNmODQ0Y2Y2NzMyMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgVGV4dEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy90ZXh0LWZlYXR1cmUnO1xuXG5pbXBvcnQgRmVhdHVyZVRodW1iIGZyb20gJ2Fzc2V0cy9jb3JlLWZlYXR1cmUucG5nJztcbmltcG9ydCBzaGFwZVBhdHRlcm4gZnJvbSAnYXNzZXRzL3NoYXBlLXBhdHRlcm4yLnBuZyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHN1YlRpdGxlOiAnUHJpbmNpcGFpcyByZWN1cnNvcycsXG4gIHRpdGxlOiAnRGFzaGJvYXJkIGludGVsaWdlbnRlIHF1ZSBmYWNpbGl0YSBuYSB0b21hZGEgZGUgZGVjaXPDo28nLFxuICBkZXNjcmlwdGlvbjpcbiAgICAnR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtIGd1aWRlbGluZXMgZXZlci4nLFxuICBidG5OYW1lOiAnR2V0IFN0YXJ0ZWQnLFxuICBidG5VUkw6ICcjJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcmVGZWF0dXJlKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24uY29yZUZlYXR1cmUnfX0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyQm94fT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxuICAgICAgICAgIDxUZXh0RmVhdHVyZVxuICAgICAgICAgICAgdGl0bGU9e2RhdGEudGl0bGV9XG4gICAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgYnRuTmFtZT17ZGF0YS5idG5OYW1lfVxuICAgICAgICAgICAgYnRuVVJMPXtkYXRhLmJ0blVSTH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRodW1ibmFpbH0+XG4gICAgICAgICAgPEltYWdlIHNyYz17RmVhdHVyZVRodW1ifS8+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyQm94OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcbiAgICBwYjogWzAsIDcsIDAsIG51bGwsIDddLFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgZmxleFNocmluazogMCxcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCBudWxsLCAzNDAsIDQwMCwgNDMwLCBudWxsLCA0ODVdLFxuICAgIHBiOiBbJzUwcHgnLCAnNjBweCcsIG51bGwsIDBdLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcHI6IFswLCBudWxsLCA2LCA3LCA2XSxcbiAgICB9LFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1yOiAnYXV0bycsXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICAgICc+IGltZyc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlQm94OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAtNjUsXG4gICAgcmlnaHQ6IC0xNjUsXG4gICAgekluZGV4OiAtMSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCAnaW5saW5lLWJsb2NrJywgJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==