webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Drawer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "./node_modules/rc-drawer/es/index.js");


var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      width = _ref.width,
      placement = _ref.placement,
      drawerStyle = _ref.drawerStyle,
      closeBtnStyle = _ref.closeBtnStyle,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onClose: toggleHandler,
    className: "drawer ".concat(className || '').trim(),
    width: width,
    placement: placement,
    handler: false,
    lelve: null,
    duration: '0.4s'
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    sx: drawerStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, drawerHandler));
}
_c = Drawer;
;
Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};

var _c;

$RefreshReg$(_c, "Drawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIl0sIm5hbWVzIjpbIkRyYXdlciIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJvcGVuIiwid2lkdGgiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJwcm9wcyIsInRyaW0iLCJkaXNwbGF5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxPQWFaO0FBQUEsTUFaREMsU0FZQyxRQVpEQSxTQVlDO0FBQUEsTUFYREMsUUFXQyxRQVhEQSxRQVdDO0FBQUEsTUFWREMsV0FVQyxRQVZEQSxXQVVDO0FBQUEsTUFUREMsZ0JBU0MsUUFUREEsZ0JBU0M7QUFBQSxNQVJEQyxhQVFDLFFBUkRBLGFBUUM7QUFBQSxNQVBEQyxhQU9DLFFBUERBLGFBT0M7QUFBQSxNQU5EQyxJQU1DLFFBTkRBLElBTUM7QUFBQSxNQUxEQyxLQUtDLFFBTERBLEtBS0M7QUFBQSxNQUpEQyxTQUlDLFFBSkRBLFNBSUM7QUFBQSxNQUhEQyxXQUdDLFFBSERBLFdBR0M7QUFBQSxNQUZEQyxhQUVDLFFBRkRBLGFBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUNFLFFBQUksRUFBRUwsSUFEUjtBQUVFLFdBQU8sRUFBRUQsYUFGWDtBQUdFLGFBQVMsRUFBRSxpQkFBVUwsU0FBUyxJQUFJLEVBQXZCLEVBQTRCWSxJQUE1QixFQUhiO0FBSUUsU0FBSyxFQUFFTCxLQUpUO0FBS0UsYUFBUyxFQUFFQyxTQUxiO0FBTUUsV0FBTyxFQUFFLEtBTlg7QUFPRSxTQUFLLEVBQUUsSUFQVDtBQVFFLFlBQVEsRUFBRTtBQVJaLEtBU01HLEtBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdHVCxXQUFXLElBQ1YsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRSxLQUFUO0FBQWUsV0FBTyxFQUFFRyxhQUF4QjtBQUF1QyxNQUFFLEVBQUVLLGFBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1IsV0FESCxDQVpKLEVBZ0JFLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVPLFdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixRQURILENBaEJGLENBREYsRUFxQkUsTUFBQyw0Q0FBRDtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxTQUFLLEVBQUU7QUFBRVksYUFBTyxFQUFFO0FBQVgsS0FBeEM7QUFBb0UsV0FBTyxFQUFFUixhQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELGFBREgsQ0FyQkYsQ0FERjtBQTJCRDtLQXpDdUJMLE07QUF5Q3ZCO0FBRURBLE1BQU0sQ0FBQ2UsWUFBUCxHQUFzQjtBQUNwQlAsT0FBSyxFQUFFLE9BRGE7QUFFcEJDLFdBQVMsRUFBRTtBQUZTLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3ODg4YzIwNmNhZTBmYWQ1NTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhd2VyICh7IFxuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBjbG9zZUJ1dHRvbixcbiAgY2xvc2VCdXR0b25TdHlsZSxcbiAgZHJhd2VySGFuZGxlcixcbiAgdG9nZ2xlSGFuZGxlcixcbiAgb3BlbixcbiAgd2lkdGgsXG4gIHBsYWNlbWVudCxcbiAgZHJhd2VyU3R5bGUsXG4gIGNsb3NlQnRuU3R5bGUsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPFJjRHJhd2VyXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSB8fCAnJ31gLnRyaW0oKX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgaGFuZGxlcj17ZmFsc2V9XG4gICAgICAgIGxlbHZlPXtudWxsfVxuICAgICAgICBkdXJhdGlvbj17JzAuNHMnfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJveCBhcyA9XCJkaXZcIiBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfSBzeD17Y2xvc2VCdG5TdHlsZX0+XG4gICAgICAgICAgICB7Y2xvc2VCdXR0b259XG4gICAgICAgICAgPC9Cb3g+KVxuICAgICAgICB9XG4gICAgICAgIDxCb3ggc3g9e2RyYXdlclN0eWxlfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9SY0RyYXdlcj5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiZHJhd2VyX19oYW5kbGVyXCIgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jayd9fSBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfT5cbiAgICAgICAge2RyYXdlckhhbmRsZXJ9XG4gICAgICA8L0JveD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2lkdGg6ICczMjBweCcsXG4gIHBsYWNlbWVudDogJ2xlZnQnLFxufTsiXSwic291cmNlUm9vdCI6IiJ9