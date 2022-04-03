webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_sancati_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/sancati.png */ "./src/assets/sancati.png");
/* harmony import */ var assets_sancati_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_sancati_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-drawer */ "./src/components/header/mobile-drawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");


var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\components\\header\\header.js",
    _templateObject;


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */



 // import LogoDark from 'assets/logo.svg';

 // import LogoDark from 'assets/conjuge.png';



function Header(_ref) {
  var _this = this;

  var className = _ref.className;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("header", {
    sx: styles.header,
    className: className,
    id: "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: assets_sancati_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (menuItem, index) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      key: index,
      activeClass: "active",
      to: menuItem.path,
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, menuItem.label);
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "donante__btn",
    variant: "secondary",
    "arial-label": "Cadastrar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Cadastrar"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  })));
}
_c = Header;
var positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    position: fixed;\n    opacity: 1;\n  }\n\n  to {\n    position: absolute;\n    opacity: 1;\n    transition: all 0.4s ease;\n  }\n"])));
var styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: "".concat(positionAnim, " 0.4s ease"),
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0]
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text'
      }
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media screen and (max-width: 1024px)': {
      justifyContent: 'flex-end'
    }
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block'
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJjb250YWluZXIiLCJMb2dvRGFyayIsIm5hdiIsIm1lbnVJdGVtcyIsIm1hcCIsIm1lbnVJdGVtIiwiaW5kZXgiLCJwYXRoIiwibGFiZWwiLCJwb3NpdGlvbkFuaW0iLCJrZXlmcmFtZXMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm14IiwiYSIsImZvbnRTaXplIiwicHgiLCJjdXJzb3IiLCJsaW5lSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBK0I7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDNUMsU0FDSTtBQUFRLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxNQUFuQjtBQUEyQixhQUFTLEVBQUVGLFNBQXRDO0FBQWlELE1BQUUsRUFBQyxRQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0UsU0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHVEQUFEO0FBQU0sT0FBRyxFQUFFQyx5REFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxLQUFUO0FBQWUsTUFBRSxFQUFFSCxNQUFNLENBQUNJLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0Msb0RBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLFdBQ2IscURBQUMsaURBQUQ7QUFDRSxTQUFHLEVBQUVBLEtBRFA7QUFFRSxpQkFBVyxFQUFDLFFBRmQ7QUFHRSxRQUFFLEVBQUVELFFBQVEsQ0FBQ0UsSUFIZjtBQUlFLFNBQUcsRUFBRSxJQUpQO0FBS0UsWUFBTSxFQUFFLElBTFY7QUFNRSxZQUFNLEVBQUUsQ0FBQyxFQU5YO0FBT0UsY0FBUSxFQUFFLEdBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQVNHRixRQUFRLENBQUNHLEtBVFosQ0FEYTtBQUFBLEdBQWQsQ0FESCxDQUZGLEVBaUJFLHFEQUFDLCtDQUFEO0FBQ0UsYUFBUyxFQUFDLGNBRFo7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLG1CQUFZLFdBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQkYsRUF3QkUscURBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCRixDQURGLENBREo7QUE4QkQ7S0EvQnVCWixNO0FBaUN4QixJQUFNYSxZQUFZLEdBQUdDLCtEQUFILGdTQUFsQjtBQWFBLElBQU1aLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTlksU0FBSyxFQUFFLE1BREQ7QUFFTkMsY0FBVSxFQUFFLE1BRk47QUFHTkMsTUFBRSxFQUFFLENBSEU7QUFJTkMsU0FBSyxFQUFFLE1BSkQ7QUFLTkMsWUFBUSxFQUFFLFVBTEo7QUFNTkMsT0FBRyxFQUFFLENBTkM7QUFPTkMsUUFBSSxFQUFFLENBUEE7QUFRTkMsbUJBQWUsRUFBRSxhQVJYO0FBU05DLGNBQVUsRUFBRSxlQVROO0FBVU5DLGFBQVMsWUFBS1gsWUFBTCxlQVZIO0FBV04sb0JBQWdCO0FBQ2RZLGdCQUFVLEVBQUUsQ0FERTtBQUVkQyxRQUFFLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLENBRlU7QUFHZEMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCO0FBSFUsS0FYVjtBQWdCTixnQkFBWTtBQUNWUixjQUFRLEVBQUUsT0FEQTtBQUVWRyxxQkFBZSxFQUFFLFlBRlA7QUFHVlAsV0FBSyxFQUFFLFNBSEc7QUFJVmEsZUFBUyxFQUFFLCtCQUpEO0FBS1ZYLFFBQUUsRUFBRSxDQUxNO0FBTVYsaUJBQVc7QUFDVEYsYUFBSyxFQUFFO0FBREU7QUFORDtBQWhCTixHQURLO0FBNEJiWCxXQUFTLEVBQUU7QUFDVHlCLFdBQU8sRUFBRSxNQURBO0FBRVRDLGNBQVUsRUFBRSxRQUZIO0FBR1RDLGtCQUFjLEVBQUUsZUFIUDtBQUlULDZDQUF5QztBQUN2Q0Esb0JBQWMsRUFBRTtBQUR1QjtBQUpoQyxHQTVCRTtBQW9DYnpCLEtBQUcsRUFBRTtBQUNIMEIsTUFBRSxFQUFFLE1BREQ7QUFFSEgsV0FBTyxFQUFFLE1BRk47QUFHSCw2Q0FBeUM7QUFDdkNBLGFBQU8sRUFBRTtBQUQ4QixLQUh0QztBQU1ISSxLQUFDLEVBQUU7QUFDREMsY0FBUSxFQUFFLENBRFQ7QUFFRGxCLGdCQUFVLEVBQUUsTUFGWDtBQUdEbUIsUUFBRSxFQUFFLENBSEg7QUFJREMsWUFBTSxFQUFFLFNBSlA7QUFLREMsZ0JBQVUsRUFBRSxLQUxYO0FBTURkLGdCQUFVLEVBQUUsV0FOWDtBQU9ELGlCQUFXO0FBQ1RSLGFBQUssRUFBRTtBQURFLE9BUFY7QUFVRCxrQkFBWTtBQUNWQSxhQUFLLEVBQUU7QUFERztBQVZYO0FBTkE7QUFwQ1EsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZmRjZDAzNDNmZWJkNDNjZjQyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG4vLyBpbXBvcnQgTG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28uc3ZnJztcbmltcG9ydCBMb2dvRGFyayBmcm9tICdhc3NldHMvc2FuY2F0aS5wbmcnO1xuLy8gaW1wb3J0IExvZ29EYXJrIGZyb20gJ2Fzc2V0cy9jb25qdWdlLnBuZyc7XG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlLWRyYXdlcic7XG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxMb2dvIHNyYz17TG9nb0Rhcmt9IC8+XG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgobWVudUl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgdG89e21lbnVJdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lbnVJdGVtLmxhYmVsfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRvbmFudGVfX2J0blwiIFxuICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiIFxuICAgICAgICAgICAgYXJpYWwtbGFiZWw9XCJDYWRhc3RyYXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhZGFzdHJhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGhlYWRlcjoge1xuICAgIGNvbG9yOiAndGV4dCcsXG4gICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgIHB5OiA0LFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcbiAgICBhbmltYXRpb246IGAke3Bvc2l0aW9uQW5pbX0gMC40cyBlYXNlYCxcbiAgICAnLmRvbmF0ZV9fYnRuJzoge1xuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIG1yOiBbMTUsIDIwLCBudWxsLCBudWxsLCAwXSxcbiAgICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAwXSxcbiAgICB9LFxuICAgICcmLnN0aWNreSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICAgICAgcHk6IDMsXG4gICAgICAnbmV2ID4gYSc6IHtcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCknOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICB9LFxuICB9LFxuICBuYXY6IHtcbiAgICBteDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogMixcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIHB4OiA1LFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJyYuYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=