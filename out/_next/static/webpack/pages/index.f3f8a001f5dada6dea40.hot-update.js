webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/feature-card.js":
/*!****************************************!*\
  !*** ./src/components/feature-card.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\components\\feature-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function FeatureCard(_ref) {
  var src = _ref.src,
      _ref$altText = _ref.altText,
      altText = _ref$altText === void 0 ? 'default alt text' : _ref$altText,
      title = _ref.title,
      text = _ref.text;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.img,
    src: src,
    altText: altText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, text)));
}
_c = FeatureCard;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    mb: -1
  },
  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [2, 3],
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: ['10px', null, '15px']
    },
    subTitle: {
      fontSize: [1, '15px'],
      fontWeight: 400,
      lineHeight: '1.9'
    }
  }
};

var _c;

$RefreshReg$(_c, "FeatureCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZmVhdHVyZS1jYXJkLmpzIl0sIm5hbWVzIjpbIkZlYXR1cmVDYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwidGV4dCIsInN0eWxlcyIsImNhcmQiLCJpbWciLCJ3cmFwcGVyIiwic3ViVGl0bGUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1iIiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwibXIiLCJtbCIsImZsZXhEaXJlY3Rpb24iLCJtdCIsImZvbnRTaXplIiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxXQUFULE9BS1o7QUFBQSxNQUpEQyxHQUlDLFFBSkRBLEdBSUM7QUFBQSwwQkFIREMsT0FHQztBQUFBLE1BSERBLE9BR0MsNkJBSFMsa0JBR1Q7QUFBQSxNQUZEQyxLQUVDLFFBRkRBLEtBRUM7QUFBQSxNQUREQyxJQUNDLFFBRERBLElBQ0M7QUFDRCxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw4Q0FBRDtBQUFPLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxHQUFsQjtBQUF1QixPQUFHLEVBQUVOLEdBQTVCO0FBQWlDLFdBQU8sRUFBRUMsT0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVHLE1BQU0sQ0FBQ0csT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFFSCxNQUFNLENBQUNHLE9BQVAsQ0FBZUwsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxLQURILENBREYsRUFJRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRUUsTUFBTSxDQUFDRyxPQUFQLENBQWVDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsSUFESCxDQUpGLENBRkYsQ0FERjtBQWFEO0tBbkJ1QkosVztBQXFCeEIsSUFBTUssTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKSSxXQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFVLEVBQUUsWUFGUjtBQUdKQyxNQUFFLEVBQUUsQ0FBQztBQUhELEdBRE87QUFPYkwsS0FBRyxFQUFFO0FBQ0hNLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxNQUFyQyxDQURKO0FBRUhDLFVBQU0sRUFBRSxNQUZMO0FBR0hDLGNBQVUsRUFBRSxDQUhUO0FBSUhDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FKRDtBQUtIQyxNQUFFLEVBQUUsQ0FBQztBQUxGLEdBUFE7QUFjYlQsU0FBTyxFQUFFO0FBQ1BLLFNBQUssRUFBRSxNQURBO0FBRVBILFdBQU8sRUFBRSxNQUZGO0FBR1BRLGlCQUFhLEVBQUUsUUFIUjtBQUlQQyxNQUFFLEVBQUUsTUFKRztBQUtQaEIsU0FBSyxFQUFFO0FBQ0xpQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURMO0FBRUxDLFdBQUssRUFBRSxtQkFGRjtBQUdMQyxnQkFBVSxFQUFFLEdBSFA7QUFJTEMsZ0JBQVUsRUFBRSxHQUpQO0FBS0xYLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZjtBQUxDLEtBTEE7QUFhUEgsWUFBUSxFQUFFO0FBQ1JXLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREY7QUFFUkcsZ0JBQVUsRUFBRSxHQUZKO0FBR1JELGdCQUFVLEVBQUU7QUFISjtBQWJIO0FBZEksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mM2Y4YTAwMWY1ZGFkYTZkZWE0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEltYWdlLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVDYXJkKHtcbiAgc3JjLFxuICBhbHRUZXh0ID0gJ2RlZmF1bHQgYWx0IHRleHQnLFxuICB0aXRsZSxcbiAgdGV4dCxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuY2FyZH0+XG4gICAgICA8SW1hZ2Ugc3g9e3N0eWxlcy5pbWd9IHNyYz17c3JjfSBhbHRUZXh0PXthbHRUZXh0fSAvPlxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBtYjogLTEsXG4gIH0sXG5cbiAgaW1nOiB7XG4gICAgd2lkdGg6IFsnNzBweCcsIG51bGwsIG51bGwsICc4MHB4JywgJzkwcHgnLCAnYXV0byddLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbXI6IFsyLCAzLCBudWxsLCBudWxsLCA0LCA1XSxcbiAgICBtbDogLTIsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzIsIDNdLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWycxMHB4JywgbnVsbCwgJzE1cHgnXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjknLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==