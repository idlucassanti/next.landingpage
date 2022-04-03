webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Fast Performance',
  title: 'Fast Performance',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Partnership deal',
  title: 'Partnership deal',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Pro Subscription',
  title: 'Pro Subscription',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support',
  title: 'Customer Support',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function KeyFeature() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    id: "feature",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Funcionamento",
    title: "Conhe\xE7a os recursos do produto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.key,
      src: item.imgSrc,
      altText: item.altText,
      title: item.title,
      text: item.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    });
  }))));
}
_c = KeyFeature;
var styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "KeyFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsImltZ1NyYyIsIlBlcmZvcm1hbmNlIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsIlBhcnRuZXJzaGlwIiwiU3Vic2NyaXB0aW9uIiwiU3VwcG9ydCIsIktleUZlYXR1cmUiLCJ2YXJpYW50Iiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyx5RUFGVjtBQUdFQyxTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBRFcsRUFTWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVLLHlFQUZWO0FBR0VILFNBQU8sRUFBRSxrQkFIWDtBQUlFQyxPQUFLLEVBQUUsa0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0FUVyxFQWlCWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVNLDBFQUZWO0FBR0VKLFNBQU8sRUFBRSxrQkFIWDtBQUlFQyxPQUFLLEVBQUUsa0JBSlQ7QUFLRUMsTUFBSSxFQUNGO0FBTkosQ0FqQlcsRUF5Qlg7QUFDRUwsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFTyxxRUFGVjtBQUdFTCxTQUFPLEVBQUUsa0JBSFg7QUFJRUMsT0FBSyxFQUFFLGtCQUpUO0FBS0VDLE1BQUksRUFDRjtBQU5KLENBekJXLENBQWI7QUFtQ2UsU0FBU0ksVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxTQUNFO0FBQVMsTUFBRSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQWI7QUFBOEMsTUFBRSxFQUFDLFNBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0VBQUQ7QUFDRSxVQUFNLEVBQUMsZUFEVDtBQUVFLFNBQUssRUFBQyxtQ0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0diLElBQUksQ0FBQ2MsR0FBTCxDQUFTLFVBQUFDLElBQUk7QUFBQSxXQUNaLHFEQUFDLHlFQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEdBRFo7QUFFRSxTQUFHLEVBQUVELElBQUksQ0FBQ2IsTUFGWjtBQUdFLGFBQU8sRUFBRWEsSUFBSSxDQUFDWCxPQUhoQjtBQUlFLFdBQUssRUFBRVcsSUFBSSxDQUFDVixLQUpkO0FBS0UsVUFBSSxFQUFFVSxJQUFJLENBQUNULElBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURZO0FBQUEsR0FBYixDQURILENBUEYsQ0FERixDQURGO0FBeUJEO0tBMUJ1QkksVTtBQTRCeEIsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKSSxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQURIO0FBRUpDLE1BQUUsRUFBRSxNQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLFdBSk8sRUFLUCxNQUxPLEVBTVAsV0FOTyxFQU9QLFdBUE8sQ0FITDtBQVlKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQjtBQVpqQjtBQURPLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWQxODdmYmNiYzkyN2IzNzkxOTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzJztcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnJztcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXG4gICAgYWx0VGV4dDogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxuICAgIHRpdGxlOiAnRmFzdCBQZXJmb3JtYW5jZScsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIGltZ1NyYzogUGFydG5lcnNoaXAsXG4gICAgYWx0VGV4dDogJ1BhcnRuZXJzaGlwIGRlYWwnLFxuICAgIHRpdGxlOiAnUGFydG5lcnNoaXAgZGVhbCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxuICAgIGFsdFRleHQ6ICdQcm8gU3Vic2NyaXB0aW9uJyxcbiAgICB0aXRsZTogJ1BybyBTdWJzY3JpcHRpb24nLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpbWdTcmM6IFN1cHBvcnQsXG4gICAgYWx0VGV4dDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtleUZlYXR1cmUoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3t2YXJpYW50OiAnc2VjdGlvbi5rZXlGZWF0dXJlJ319IGlkPVwiZmVhdHVyZVwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcbiAgICAgICAgICBzbG9nYW49XCJGdW5jaW9uYW1lbnRvXCJcbiAgICAgICAgICB0aXRsZT1cIkNvbmhlw6dhIG9zIHJlY3Vyc29zIGRvIHByb2R1dG9cIlxuICAgICAgICA+XG4gICAgICAgIDwvU2VjdGlvbkhlYWRlcj5cblxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgIDxGZWF0dXJlQ2FyZENvbHVtblxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgICBhbHRUZXh0PXtpdGVtLmFsdFRleHR9XG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgIDwvRmVhdHVyZUNhcmRDb2x1bW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIG14OiAnYXV0bycsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQwcHggNDBweCcsXG4gICAgICAnNTBweCA2MHB4JyxcbiAgICAgICczMHB4JyxcbiAgICAgICc1MHB4IDQwcHgnLFxuICAgICAgJzU1cHggOTBweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=