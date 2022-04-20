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
                  var responseData;
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
                          responseData = response.body;
                          console.log(responseData);

                        case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2F1dGhTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImF1dGhTZXJ2aWNlIiwibG9naW4iLCJjcmVkZW5jaWFpcyIsIkh0dHBDbGllbnQiLCJwcm9jZXNzIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJyZXNwb25zZURhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsV0FBVyxHQUFHO0FBQ1ZDLE9BRFUsaUJBQ0pDLFdBREksRUFDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNSQywwRUFBVSxXQUFJQyx3Q0FBSix1QkFBZ0U7QUFDbkZDLHNCQUFNLEVBQUUsTUFEMkU7QUFFbkZDLG9CQUFJLEVBQUVKO0FBRjZFLGVBQWhFLENBQVYsQ0FJWkssSUFKWTtBQUFBLDRNQUlQLGlCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUNHQSxRQUFRLENBQUNDLEVBRFo7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0NBQ3NCLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUR0Qjs7QUFBQTtBQUVJQyxzQ0FGSixHQUVtQkgsUUFBUSxDQUFDRixJQUY1QjtBQUdGTSxpQ0FBTyxDQUFDQyxHQUFSLENBQVlGLFlBQVo7O0FBSEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSk87O0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRFE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVV4QjtBQVhlLENBQXBCO0FBY2VYLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjI2YzMzOTk4MTI4ODIwNGI2YTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHR0cENsaWVudCBmcm9tIFwiLi4vaW5mcmFzdHJ1Y3R1cmUvSHR0cENsaWVudFwiO1xyXG5cclxuY29uc3QgYXV0aFNlcnZpY2UgPSB7XHJcbiAgICBhc3luYyBsb2dpbihjcmVkZW5jaWFpcykge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBIdHRwQ2xpZW50KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTF9BVVRFTlRJQ0FDQU99L0F1dGgvQXV0ZW50aWNhcmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGNyZWRlbmNpYWlzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignVXN1w6FyaW8gb3Ugc2VuaGEgaW52w6FsaWRvcycpO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5ib2R5O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==