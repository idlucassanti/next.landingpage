webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/text-feature.js":
/*!****************************************!*\
  !*** ./src/components/text-feature.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\components\\text-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */

function TextFeature(_ref) {
  var subTitle = _ref.subTitle,
      title = _ref.title,
      description = _ref.description,
      btnName = _ref.btnName,
      _ref$btnURL = _ref.btnURL,
      btnURL = _ref$btnURL === void 0 ? '#' : _ref$btnURL;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.wrapper.subTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, subTitle), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    sx: styles.wrapper.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, title)), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    className: "description",
    sx: styles.wrapper.description,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, description));
}
_c = TextFeature;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0]
    }
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: -1,
    subTitle: {
      fontSize: [0, null, 1],
      color: 'primary',
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ['1.5px', null, '2px']
    },
    title: {
      fontSize: ['24px', null, '28px', '30px', '36px', '42px', null, '48px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5
    }
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '17px', null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, '2.2'],
    color: 'text_secondary',
    mb: '30px'
  }
};

var _c;

$RefreshReg$(_c, "TextFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbIlRleHRGZWF0dXJlIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsInN0eWxlcyIsImNhcmQiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFNocmluayIsImEiLCJtIiwid2lkdGgiLCJtdCIsImZvbnRTaXplIiwiY29sb3IiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsIm1iIiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQU1aO0FBQUEsTUFMREMsUUFLQyxRQUxEQSxRQUtDO0FBQUEsTUFKREMsS0FJQyxRQUpEQSxLQUlDO0FBQUEsTUFIREMsV0FHQyxRQUhEQSxXQUdDO0FBQUEsTUFGREMsT0FFQyxRQUZEQSxPQUVDO0FBQUEseUJBRERDLE1BQ0M7QUFBQSxNQUREQSxNQUNDLDRCQURRLEdBQ1I7QUFDRCxTQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLE1BQUUsRUFBRUYsTUFBTSxDQUFDRSxPQUFQLENBQWVQLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkNBLFFBQTNDLENBREYsRUFFRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLE1BQUUsRUFBRUssTUFBTSxDQUFDRSxPQUFQLENBQWVOLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FESCxDQUZGLENBREYsRUFPR0MsV0FBVyxJQUNWLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFDLEdBQVQ7QUFBYSxhQUFTLEVBQUMsYUFBdkI7QUFBcUMsTUFBRSxFQUFFRyxNQUFNLENBQUNFLE9BQVAsQ0FBZUwsV0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQSxXQURILENBUkosQ0FERjtBQWVEO0tBdEJ1QkgsVztBQXdCeEIsSUFBTU0sTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKRSxXQUFPLEVBQUUsTUFETDtBQUVKQyxjQUFVLEVBQUUsWUFGUjtBQUdKQyxpQkFBYSxFQUFFLFFBSFg7QUFJSkMsY0FBVSxFQUFFLENBSlI7QUFLSkMsS0FBQyxFQUFFO0FBQ0RDLE9BQUMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLENBQXZCO0FBREY7QUFMQyxHQURPO0FBVWJOLFNBQU8sRUFBRTtBQUNQTyxTQUFLLEVBQUUsTUFEQTtBQUVQTixXQUFPLEVBQUUsTUFGRjtBQUdQRSxpQkFBYSxFQUFFLFFBSFI7QUFJUEssTUFBRSxFQUFFLENBQUMsQ0FKRTtBQUtQZixZQUFRLEVBQUU7QUFDUmdCLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQURGO0FBRVJDLFdBQUssRUFBRSxTQUZDO0FBR1JDLG1CQUFhLEVBQUUsV0FIUDtBQUlSQyxnQkFBVSxFQUFFLEtBSko7QUFLUkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FMSTtBQU1SQyxnQkFBVSxFQUFFLEdBTko7QUFPUkMsbUJBQWEsRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLEtBQWhCO0FBUFAsS0FMSDtBQWNQckIsU0FBSyxFQUFFO0FBQ0xlLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsTUFBZixFQUF1QixNQUF2QixFQUErQixNQUEvQixFQUF1QyxNQUF2QyxFQUErQyxJQUEvQyxFQUFxRCxNQUFyRCxDQURMO0FBRUxDLFdBQUssRUFBRSxtQkFGRjtBQUdMSSxnQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLEdBQXhCLENBSFA7QUFJTEYsZ0JBQVUsRUFBRSxLQUpQO0FBS0xHLG1CQUFhLEVBQUUsT0FMVjtBQU1MRixRQUFFLEVBQUU7QUFOQztBQWRBLEdBVkk7QUFpQ2JsQixhQUFXLEVBQUU7QUFDWGMsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE1BQTlCLEVBQXNDLElBQXRDLEVBQTRDLENBQTVDLENBREM7QUFFWEcsY0FBVSxFQUFFLEdBRkQ7QUFHWEUsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCLEtBQTVCLENBSEQ7QUFJWEosU0FBSyxFQUFFLGdCQUpJO0FBS1hHLE1BQUUsRUFBRTtBQUxPO0FBakNBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYyOWE5ZjM3ODczOWUzMGQ3YzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEJ1dHRvbiwgTGluayB9IGZyb20gJ3RoZW1lLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEZlYXR1cmUoe1xuICBzdWJUaXRsZSxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBidG5OYW1lLFxuICBidG5VUkwgPSAnIycsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxuICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntzdWJUaXRsZX08L1RleHQ+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIiBzeD17c3R5bGVzLndyYXBwZXIudGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgPC9Cb3g+XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICA8VGV4dCBhcz1cInBcIiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIHN4PXtzdHlsZXMud3JhcHBlci5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcmQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYToge1xuICAgICAgbTogWycwIGF1dG8nLCBudWxsLCBudWxsLCAwXSxcbiAgICB9LFxuICB9LFxuICB3cmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgbXQ6IC0xLFxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIDFdLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBtYjogWzIsIDNdLFxuICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCAnMzBweCcsICczNnB4JywgJzQycHgnLCBudWxsLCAnNDhweCddLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCBudWxsLCAxLjJdLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxuICAgICAgbWI6IDUsXG4gICAgfSxcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBmb250U2l6ZTogWycxNXB4JywgMiwgbnVsbCwgbnVsbCwgbnVsbCwgJzE3cHgnLCBudWxsLCAzXSxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIG51bGwsIDIsIG51bGwsICcyLjInXSxcbiAgICBjb2xvcjogJ3RleHRfc2Vjb25kYXJ5JyxcbiAgICBtYjogJzMwcHgnLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=