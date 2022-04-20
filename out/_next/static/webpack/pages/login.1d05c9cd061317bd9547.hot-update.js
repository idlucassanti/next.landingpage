webpackHotUpdate_N_E("pages/login",{

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authService */ "./src/services/authService.js");




var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\pages\\login.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Login(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: 'lucassanti_@hotmail.com',
    password: '#Santi123'
  }),
      credenciais = _useState[0],
      setCredencias = _useState[1];

  function handleChange(e) {
    e.preventDefault();
    var field = e.target.name;
    var value = e.target.value;
    setCredencias(function (currentValues) {
      return _objectSpread(_objectSpread({}, currentValues), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, field, value));
    });
  } //onsubmit -> controler -> pega dados do usuário e passa para um serviço
  //authService -> serviço


  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return _services_authService__WEBPACK_IMPORTED_MODULE_5__["default"].login(credenciais).then(function () {
                router.push('/home');
              })["catch"](function (err) {
                alert('Usuário ou senha inválidos');
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "P\xE1gina de Login"), __jsx("form", {
    type: "submit",
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("input", {
    name: "email",
    label: "E-mail",
    onChange: handleChange,
    value: credenciais.email,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("input", {
    name: "password",
    label: "Senha",
    onChange: handleChange,
    value: credenciais.password,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Entrar")), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, JSON.stringify(credenciais, null, 4)));
}

_s(Login, "4s7Uk/jG9zrcb7seYDnSlnPyHEY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVkZW5jaWFpcyIsInNldENyZWRlbmNpYXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJhdXRoU2VydmljZSIsImxvZ2luIiwidGhlbiIsInB1c2giLCJlcnIiLCJhbGVydCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGtCLGtCQUVtQkMsc0RBQVEsQ0FBQztBQUMxQ0MsU0FBSyxFQUFFLHlCQURtQztBQUUxQ0MsWUFBUSxFQUFFO0FBRmdDLEdBQUQsQ0FGM0I7QUFBQSxNQUVYQyxXQUZXO0FBQUEsTUFFRUMsYUFGRjs7QUFPbEIsV0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQU1DLEtBQUssR0FBR0YsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLElBQXZCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHTCxDQUFDLENBQUNHLE1BQUYsQ0FBU0UsS0FBdkI7QUFFQVAsaUJBQWEsQ0FBQyxVQUFDUSxhQUFELEVBQW1CO0FBQzdCLDZDQUNPQSxhQURQLHFHQUVLSixLQUZMLEVBRWFHLEtBRmI7QUFJSCxLQUxZLENBQWI7QUFNSCxHQW5CaUIsQ0FxQmxCO0FBQ0E7OztBQXRCa0IsV0F1QkhFLFlBdkJHO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFNQXVCbEIsaUJBQTRCUCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0MsY0FBRjtBQURKO0FBQUEscUJBRVVPLDZEQUFXLENBQ1pDLEtBREMsQ0FDS1osV0FETCxFQUVEYSxJQUZDLENBRUksWUFBTTtBQUNSbEIsc0JBQU0sQ0FBQ21CLElBQVAsQ0FBWSxPQUFaO0FBQ0gsZUFKQyxXQUtLLFVBQUFDLEdBQUcsRUFBSTtBQUNWQyxxQkFBSyxDQUFDLDRCQUFELENBQUw7QUFDSCxlQVBDLENBRlY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F2QmtCO0FBQUE7QUFBQTs7QUFvQ2xCLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosRUFJSTtBQUNJLFFBQUksRUFBQyxRQURUO0FBRUksWUFBUSxFQUFFTixZQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFNBQUssRUFBQyxRQUExQjtBQUFtQyxZQUFRLEVBQUVSLFlBQTdDO0FBQTJELFNBQUssRUFBRUYsV0FBVyxDQUFDRixLQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLFNBQUssRUFBQyxPQUE3QjtBQUFxQyxZQUFRLEVBQUVJLFlBQS9DO0FBQTZELFNBQUssRUFBRUYsV0FBVyxDQUFDRCxRQUFoRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosQ0FKSixFQVlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUWtCLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsV0FBZixFQUE0QixJQUE1QixFQUFrQyxDQUFsQyxDQUZSLENBWkosQ0FESjtBQW9CSDs7R0F4RFFQLEs7VUFDVUcscUQ7OztLQURWSCxLO0FBMERNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4xZDA1YzljZDA2MTMxN2JkOTU0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXV0aFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvYXV0aFNlcnZpY2UnO1xyXG5cclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2NyZWRlbmNpYWlzLCBzZXRDcmVkZW5jaWFzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBlbWFpbDogJ2x1Y2Fzc2FudGlfQGhvdG1haWwuY29tJyxcclxuICAgICAgICBwYXNzd29yZDogJyNTYW50aTEyMydcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBmaWVsZCA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgc2V0Q3JlZGVuY2lhcygoY3VycmVudFZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlcyxcclxuICAgICAgICAgICAgICAgIFtmaWVsZF06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vb25zdWJtaXQgLT4gY29udHJvbGVyIC0+IHBlZ2EgZGFkb3MgZG8gdXN1w6FyaW8gZSBwYXNzYSBwYXJhIHVtIHNlcnZpw6dvXHJcbiAgICAvL2F1dGhTZXJ2aWNlIC0+IHNlcnZpw6dvXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBhd2FpdCBhdXRoU2VydmljZVxyXG4gICAgICAgICAgICAubG9naW4oY3JlZGVuY2lhaXMpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1VzdcOhcmlvIG91IHNlbmhhIGludsOhbGlkb3MnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgUMOhZ2luYSBkZSBMb2dpblxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdlbWFpbCcgbGFiZWw9J0UtbWFpbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2NyZWRlbmNpYWlzLmVtYWlsfS8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0ncGFzc3dvcmQnIGxhYmVsPSdTZW5oYScgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2NyZWRlbmNpYWlzLnBhc3N3b3JkfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkVudHJhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlZGVuY2lhaXMsIG51bGwsIDQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==