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
              _services_authService__WEBPACK_IMPORTED_MODULE_5__["default"].login(credenciais).then(function () {
                router.push('/home');
              })["catch"](function (err) {
                console.log(err);
              });

            case 2:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVkZW5jaWFpcyIsInNldENyZWRlbmNpYXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJhdXRoU2VydmljZSIsImxvZ2luIiwidGhlbiIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEa0Isa0JBRW1CQyxzREFBUSxDQUFDO0FBQzFDQyxTQUFLLEVBQUUseUJBRG1DO0FBRTFDQyxZQUFRLEVBQUU7QUFGZ0MsR0FBRCxDQUYzQjtBQUFBLE1BRVhDLFdBRlc7QUFBQSxNQUVFQyxhQUZGOztBQU9sQixXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUNyQkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBTUMsS0FBSyxHQUFHRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBdkI7QUFDQSxRQUFNQyxLQUFLLEdBQUdMLENBQUMsQ0FBQ0csTUFBRixDQUFTRSxLQUF2QjtBQUVBUCxpQkFBYSxDQUFDLFVBQUNRLGFBQUQsRUFBbUI7QUFDN0IsNkNBQ09BLGFBRFAscUdBRUtKLEtBRkwsRUFFYUcsS0FGYjtBQUlILEtBTFksQ0FBYjtBQU1ILEdBbkJpQixDQXFCbEI7QUFDQTs7O0FBdEJrQixXQXVCSEUsWUF2Qkc7QUFBQTtBQUFBOztBQUFBO0FBQUEscU1BdUJsQixpQkFBNEJQLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FPLDJFQUFXLENBQ05DLEtBREwsQ0FDV1osV0FEWCxFQUVLYSxJQUZMLENBRVUsWUFBTTtBQUNSbEIsc0JBQU0sQ0FBQ21CLElBQVAsQ0FBWSxPQUFaO0FBQ0gsZUFKTCxXQUtXLFVBQUFDLEdBQUcsRUFBSTtBQUNWQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDSCxlQVBMOztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdkJrQjtBQUFBO0FBQUE7O0FBb0NsQixTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBSUk7QUFDSSxRQUFJLEVBQUMsUUFEVDtBQUVJLFlBQVEsRUFBRUwsWUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUk7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixTQUFLLEVBQUMsUUFBMUI7QUFBbUMsWUFBUSxFQUFFUixZQUE3QztBQUEyRCxTQUFLLEVBQUVGLFdBQVcsQ0FBQ0YsS0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0k7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixTQUFLLEVBQUMsT0FBN0I7QUFBcUMsWUFBUSxFQUFFSSxZQUEvQztBQUE2RCxTQUFLLEVBQUVGLFdBQVcsQ0FBQ0QsUUFBaEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLENBSkosRUFZSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFtQixJQUFJLENBQUNDLFNBQUwsQ0FBZW5CLFdBQWYsRUFBNEIsSUFBNUIsRUFBa0MsQ0FBbEMsQ0FGUixDQVpKLENBREo7QUFvQkg7O0dBeERRUCxLO1VBQ1VHLHFEOzs7S0FEVkgsSztBQTBETUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMWIzYjdkNzVlODA4MTBjYjJhOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF1dGhTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL2F1dGhTZXJ2aWNlJztcclxuXHJcbmZ1bmN0aW9uIExvZ2luKHByb3BzKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtjcmVkZW5jaWFpcywgc2V0Q3JlZGVuY2lhc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZW1haWw6ICdsdWNhc3NhbnRpX0Bob3RtYWlsLmNvbScsXHJcbiAgICAgICAgcGFzc3dvcmQ6ICcjU2FudGkxMjMnXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZmllbGQgPSBlLnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldENyZWRlbmNpYXMoKGN1cnJlbnRWYWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBbZmllbGRdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL29uc3VibWl0IC0+IGNvbnRyb2xlciAtPiBwZWdhIGRhZG9zIGRvIHVzdcOhcmlvIGUgcGFzc2EgcGFyYSB1bSBzZXJ2acOnb1xyXG4gICAgLy9hdXRoU2VydmljZSAtPiBzZXJ2acOnb1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgYXV0aFNlcnZpY2VcclxuICAgICAgICAgICAgLmxvZ2luKGNyZWRlbmNpYWlzKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgUMOhZ2luYSBkZSBMb2dpblxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdlbWFpbCcgbGFiZWw9J0UtbWFpbCcgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2NyZWRlbmNpYWlzLmVtYWlsfS8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT0ncGFzc3dvcmQnIGxhYmVsPSdTZW5oYScgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2NyZWRlbmNpYWlzLnBhc3N3b3JkfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uPkVudHJhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlZGVuY2lhaXMsIG51bGwsIDQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sInNvdXJjZVJvb3QiOiIifQ==