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
    _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              e.preventDefault();
              _services_authService__WEBPACK_IMPORTED_MODULE_5__["default"].login(credenciais).then( /*#__PURE__*/function () {
                var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!response.ok) new Error();
                          _context.t0 = console;
                          _context.next = 4;
                          return response;

                        case 4:
                          _context.t1 = _context.sent;

                          _context.t0.log.call(_context.t0, _context.t1);

                          router.push('/home');

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }())["catch"](function () {
                alert('Usuário ou senha inválidos!');
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "P\xE1gina de Login"), __jsx("form", {
    type: "submit",
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 17
    }
  }), __jsx("button", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Entrar")), __jsx("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjcmVkZW5jaWFpcyIsInNldENyZWRlbmNpYXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJhdXRoU2VydmljZSIsImxvZ2luIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURrQixrQkFFbUJDLHNEQUFRLENBQUM7QUFDMUNDLFNBQUssRUFBRSx5QkFEbUM7QUFFMUNDLFlBQVEsRUFBRTtBQUZnQyxHQUFELENBRjNCO0FBQUEsTUFFWEMsV0FGVztBQUFBLE1BRUVDLGFBRkY7O0FBT2xCLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQ3JCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFNQyxLQUFLLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxJQUF2QjtBQUNBLFFBQU1DLEtBQUssR0FBR0wsQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBQXZCO0FBRUFQLGlCQUFhLENBQUMsVUFBQ1EsYUFBRCxFQUFtQjtBQUM3Qiw2Q0FDT0EsYUFEUCxxR0FFS0osS0FGTCxFQUVhRyxLQUZiO0FBSUgsS0FMWSxDQUFiO0FBTUgsR0FuQmlCLENBcUJsQjtBQUNBOzs7QUF0QmtCLFdBdUJIRSxZQXZCRztBQUFBO0FBQUE7O0FBQUE7QUFBQSxxTUF1QmxCLGtCQUE0QlAsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQSxlQUFDLENBQUNDLGNBQUY7QUFDQU8sMkVBQVcsQ0FDTkMsS0FETCxDQUNXWixXQURYLEVBRUthLElBRkw7QUFBQSw0TUFFVSxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0YsOEJBQUcsQ0FBQ0EsUUFBUSxDQUFDQyxFQUFiLEVBQWlCLElBQUlDLEtBQUo7QUFEZix3Q0FHRkMsT0FIRTtBQUFBO0FBQUEsaUNBR2dCSCxRQUhoQjs7QUFBQTtBQUFBOztBQUFBLHNDQUdNSSxHQUhOOztBQUlGdkIsZ0NBQU0sQ0FBQ3dCLElBQVAsQ0FBWSxPQUFaOztBQUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZWOztBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVNXLFlBQU07QUFDVEMscUJBQUssQ0FBQyw2QkFBRCxDQUFMO0FBQ0gsZUFYTDs7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXZCa0I7QUFBQTtBQUFBOztBQXdDbEIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUlJO0FBQ0ksUUFBSSxFQUFDLFFBRFQ7QUFFSSxZQUFRLEVBQUVWLFlBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlJO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsU0FBSyxFQUFDLFFBQTFCO0FBQW1DLFlBQVEsRUFBRVIsWUFBN0M7QUFBMkQsU0FBSyxFQUFFRixXQUFXLENBQUNGLEtBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsU0FBSyxFQUFDLE9BQTdCO0FBQXFDLFlBQVEsRUFBRUksWUFBL0M7QUFBNkQsU0FBSyxFQUFFRixXQUFXLENBQUNELFFBQWhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixDQUpKLEVBWUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVRc0IsSUFBSSxDQUFDQyxTQUFMLENBQWV0QixXQUFmLEVBQTRCLElBQTVCLEVBQWtDLENBQWxDLENBRlIsQ0FaSixDQURKO0FBb0JIOztHQTVEUVAsSztVQUNVRyxxRDs7O0tBRFZILEs7QUE4RE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjlmNWIxY2U1MzhjN2NhNjFiZTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhdXRoU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9hdXRoU2VydmljZSc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbihwcm9wcykge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbY3JlZGVuY2lhaXMsIHNldENyZWRlbmNpYXNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGVtYWlsOiAnbHVjYXNzYW50aV9AaG90bWFpbC5jb20nLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnI1NhbnRpMTIzJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gZS50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRDcmVkZW5jaWFzKChjdXJyZW50VmFsdWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgW2ZpZWxkXTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9vbnN1Ym1pdCAtPiBjb250cm9sZXIgLT4gcGVnYSBkYWRvcyBkbyB1c3XDoXJpbyBlIHBhc3NhIHBhcmEgdW0gc2VydmnDp29cclxuICAgIC8vYXV0aFNlcnZpY2UgLT4gc2VydmnDp29cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlXHJcbiAgICAgICAgICAgIC5sb2dpbihjcmVkZW5jaWFpcylcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zIScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICBQw6FnaW5hIGRlIExvZ2luXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9J2VtYWlsJyBsYWJlbD0nRS1tYWlsJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Y3JlZGVuY2lhaXMuZW1haWx9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPSdwYXNzd29yZCcgbGFiZWw9J1NlbmhhJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Y3JlZGVuY2lhaXMucGFzc3dvcmR9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24+RW50cmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShjcmVkZW5jaWFpcywgbnVsbCwgNClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9