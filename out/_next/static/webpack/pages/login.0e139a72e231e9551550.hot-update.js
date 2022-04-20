webpackHotUpdate_N_E("pages/login",{

/***/ "./src/services/authService.js":
/*!*************************************!*\
  !*** ./src/services/authService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _infrastructure_HttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../infrastructure/HttpClient */ "./src/infrastructure/HttpClient.js");



var authService = {
  login: function login(credenciais) {
    return Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_infrastructure_HttpClient__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat("https://api-auth-dev.azurewebsites.net", "/Auth/Autenticar"), {
                method: 'POST',
                body: credenciais
              }).then( /*#__PURE__*/function () {
                var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (response.ok) {
                            _context.next = 2;
                            break;
                          }

                          throw new Error('Usuário ou senha inválidos');

                        case 2:
                          return _context.abrupt("return", {
                            body: response.body
                          });

                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (authService);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImF1dGhTZXJ2aWNlIiwibG9naW4iLCJjcmVkZW5jaWFpcyIsIkh0dHBDbGllbnQiLCJwcm9jZXNzIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxXQUFXLEdBQUc7QUFDVkMsT0FEVSxpQkFDSkMsV0FESSxFQUNTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1JDLDBFQUFVLFdBQUlDLHdDQUFKLHVCQUFnRTtBQUNuRkMsc0JBQU0sRUFBRSxNQUQyRTtBQUVuRkMsb0JBQUksRUFBRUo7QUFGNkUsZUFBaEUsQ0FBVixDQUlaSyxJQUpZO0FBQUEsNE1BSVAsaUJBQU1DLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNHQSxRQUFRLENBQUNDLEVBRFo7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0NBQ3NCLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUR0Qjs7QUFBQTtBQUFBLDJEQUVLO0FBQ0hKLGdDQUFJLEVBQUVFLFFBQVEsQ0FBQ0Y7QUFEWiwyQkFGTDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKTzs7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEUTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV3hCO0FBWmUsQ0FBcEI7QUFlZU4sMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMGUxMzlhNzJlMjMxZTk1NTE1NTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIdHRwQ2xpZW50IGZyb20gXCIuLi9pbmZyYXN0cnVjdHVyZS9IdHRwQ2xpZW50XCI7XHJcblxyXG5jb25zdCBhdXRoU2VydmljZSA9IHtcclxuICAgIGFzeW5jIGxvZ2luKGNyZWRlbmNpYWlzKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IEh0dHBDbGllbnQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMX0FVVEVOVElDQUNBT30vQXV0aC9BdXRlbnRpY2FyYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogY3JlZGVuY2lhaXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdVc3XDoXJpbyBvdSBzZW5oYSBpbnbDoWxpZG9zJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBib2R5OiByZXNwb25zZS5ib2R5LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==