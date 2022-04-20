webpackHotUpdate_N_E("pages/login",{

/***/ "./src/infrastructure/HttpClient.js":
/*!******************************************!*\
  !*** ./src/infrastructure/HttpClient.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HttpClient(_x, _x2) {
  return _HttpClient.apply(this, arguments);
}

_c2 = HttpClient;

function _HttpClient() {
  _HttpClient = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(fetchUrl, fetchOptions) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", fetch(fetchUrl, _objectSpread(_objectSpread({}, fetchOptions), {}, {
              headers: _objectSpread(_objectSpread({}, fetchOptions.headers), {}, {
                'Content-Type': 'application/json'
              }),
              body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null
            })).then( /*#__PURE__*/function () {
              var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(response) {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = response.ok;
                        _context.next = 3;
                        return response.json();

                      case 3:
                        _context.t1 = _context.sent;
                        return _context.abrupt("return", {
                          ok: _context.t0,
                          data: _context.t1
                        });

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _HttpClient.apply(this, arguments);
}

_c = HttpClient;
/* harmony default export */ __webpack_exports__["default"] = (HttpClient);

var _c, _c2;

$RefreshReg$(_c, "HttpClient");
$RefreshReg$(_c2, "HttpClient");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2luZnJhc3RydWN0dXJlL0h0dHBDbGllbnQuanMiXSwibmFtZXMiOlsiSHR0cENsaWVudCIsImZldGNoVXJsIiwiZmV0Y2hPcHRpb25zIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUFlQSxVOzs7O01BQUFBLFU7OztpTUFBZixrQkFBMEJDLFFBQTFCLEVBQW9DQyxZQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQ1dDLEtBQUssQ0FBQ0YsUUFBRCxrQ0FDR0MsWUFESDtBQUVBRSxxQkFBTyxrQ0FDQUYsWUFBWSxDQUFDRSxPQURiO0FBRUgsZ0NBQWdCO0FBRmIsZ0JBRlA7QUFNQUMsa0JBQUksRUFBRUgsWUFBWSxDQUFDRyxJQUFiLEdBQW9CQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsWUFBWSxDQUFDRyxJQUE1QixDQUFwQixHQUF1RDtBQU43RCxlQUFMLENBUUVHLElBUkY7QUFBQSwwTUFRUSxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0NBRUtBLFFBQVEsQ0FBQ0MsRUFGZDtBQUFBO0FBQUEsK0JBR2FELFFBQVEsQ0FBQ0UsSUFBVCxFQUhiOztBQUFBO0FBQUE7QUFBQTtBQUVDRCw0QkFGRDtBQUdDRSw4QkFIRDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUlI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztLQUFlWixVO0FBa0JBQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi41Yzc5NDUyNGJlZTE1YWMxZjYxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gSHR0cENsaWVudChmZXRjaFVybCwgZmV0Y2hPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goZmV0Y2hVcmwsIHtcclxuICAgICAgICAgICAgICAgIC4uLmZldGNoT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5mZXRjaE9wdGlvbnMuaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IGZldGNoT3B0aW9ucy5ib2R5ID8gSlNPTi5zdHJpbmdpZnkoZmV0Y2hPcHRpb25zLmJvZHkpOiBudWxsLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbiggYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBvazogcmVzcG9uc2Uub2ssXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYXdhaXQgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIdHRwQ2xpZW50OyJdLCJzb3VyY2VSb290IjoiIn0=