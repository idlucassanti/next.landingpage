webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/mobile-drawer.js":
/*!************************************************!*\
  !*** ./src/components/header/mobile-drawer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileDrawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\components\\header\\mobile-drawer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var social = [{
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaFacebookF"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaTwitter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaGithubAlt"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })
}, {
  path: '/',
  icon: __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaDribbble"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })
}];
function MobileDrawer() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDrawerOpen = _useState[0],
      setIsDrawerOpen = _useState[1];

  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: '320px',
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdMenu"], {
      size: "26px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    })),
    open: isDrawerOpen,
    toggleHandler: function toggleHandler() {
      return setIsDrawerOpen(function (prevState) {
        return !prevState;
      });
    },
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoMdClose"], {
      size: "24px",
      color: "#000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (menuItem, index) {
    return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_5__["Link"], {
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
        lineNumber: 49,
        columnNumber: 15
      }
    }, menuItem.label);
  })))));
}

_s(MobileDrawer, "t28cAGpFqiK0sX63aU+U7uaWhmM=");

_c = MobileDrawer;
;
var styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 1024px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary'
      },
      '&.active': {
        color: 'secondary'
      }
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0'
      },
      '&:hover': {
        color: 'secondary'
      }
    }
  },
  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0'
  }
};

var _c;

$RefreshReg$(_c, "MobileDrawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZS1kcmF3ZXIuanMiXSwibmFtZXMiOlsic29jaWFsIiwicGF0aCIsImljb24iLCJNb2JpbGVEcmF3ZXIiLCJ1c2VTdGF0ZSIsImlzRHJhd2VyT3BlbiIsInNldElzRHJhd2VyT3BlbiIsInN0eWxlcyIsImhhbmRsZXIiLCJwcmV2U3RhdGUiLCJkcmF3ZXIiLCJjbG9zZSIsImNvbnRlbnQiLCJtZW51IiwibWVudUl0ZW1zIiwibWFwIiwibWVudUl0ZW0iLCJpbmRleCIsImxhYmVsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhTaHJpbmsiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ6SW5kZXgiLCJjdXJzb3IiLCJmbGV4RGlyZWN0aW9uIiwicHQiLCJwYiIsInB4IiwiYSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwicHkiLCJib3JkZXJCb3R0b20iLCJ0cmFuc2l0aW9uIiwibWVudUZvb3RlciIsIm10IiwibXIiLCJidXR0b24iLCJmdyIsImJvcmRlclJhZGl1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLE1BQUksRUFBRSxHQURSO0FBRUVDLE1BQUksRUFBRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGUixDQURhLEVBS2I7QUFDRUQsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSLENBTGEsRUFTYjtBQUNFRCxNQUFJLEVBQUUsR0FEUjtBQUVFQyxNQUFJ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WjtBQUlKaUIsV0FBSyxFQUFFLE1BSkg7QUFLSkYsY0FBUSxFQUFFLEVBTE47QUFNSlEsUUFBRSxFQUFFLE1BTkE7QUFPSkgsZ0JBQVUsRUFBRSxXQVBSO0FBUUpYLFlBQU0sRUFBRSxTQVJKO0FBU0oscUJBQWU7QUFDYmMsVUFBRSxFQUFFO0FBRFMsT0FUWDtBQVlKLGlCQUFXO0FBQ1ROLGFBQUssRUFBRTtBQURFO0FBWlA7QUFOQSxHQXJFSztBQTZGYk8sUUFBTSxFQUFFO0FBQ05QLFNBQUssRUFBRSxPQUREO0FBRU5GLFlBQVEsRUFBRSxNQUZKO0FBR05VLE1BQUUsRUFBRSxLQUhFO0FBSU50QixVQUFNLEVBQUUsTUFKRjtBQUtOdUIsZ0JBQVksRUFBRSxLQUxSO0FBTU5qQixVQUFNLEVBQUUsU0FORjtBQU9OUCxTQUFLLEVBQUUsTUFQRDtBQVFOSixXQUFPLEVBQUUsTUFSSDtBQVNOQyxjQUFVLEVBQUUsUUFUTjtBQVVOQyxrQkFBYyxFQUFFLFFBVlY7QUFXTmtCLE1BQUUsRUFBRTtBQVhFO0FBN0ZLLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjAwM2FlMDQwMzQxYzUxMjgyNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhR2l0aHViQWx0LCBGYURyaWJiYmxlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcblxuY29uc3Qgc29jaWFsID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGljb246IDxGYUdpdGh1YkFsdCAvPixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBpY29uOiA8RmFEcmliYmJsZSAvPixcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vYmlsZURyYXdlcigpIHtcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHdpZHRoPXsnMzIwcHgnfVxuICAgICAgZHJhd2VySGFuZGxlcj17XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjI2cHhcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICAgIG9wZW49e2lzRHJhd2VyT3Blbn1cbiAgICAgIHRvZ2dsZUhhbmRsZXI9eygpID0+IHNldElzRHJhd2VyT3BlbigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKX1cbiAgICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDAwXCIvPn1cbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxuICAgICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxuICAgID5cbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKG1lbnVJdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgIHRvPXttZW51SXRlbS5wYXRofVxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHttZW51SXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TY3JvbGxiYXJzPlxuICAgIDwvRHJhd2VyPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoYW5kbGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgd2lkdGg6ICcyNnB4JyxcblxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJrJyxcbiAgfSxcblxuICBjbG9zZToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnMjVweCcsXG4gICAgcmlnaHQ6ICczMHB4JyxcbiAgICB6SW5kZXg6ICcxJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgfSxcblxuICBjb250ZW50OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcHQ6ICcxMDBweCcsXG4gICAgcGI6ICc0MHB4JyxcbiAgICBweDogJzMwcHgnLFxuICB9LFxuXG4gIG1lbnU6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxuICAgICAgcHk6ICcxNXB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkICNlOGU1ZTUnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICdzZWNvbmRhcnknLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1lbnVGb290ZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJ2F1dG8nLFxuICB9LFxuXG4gIHNvY2lhbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblxuICAgIGljb246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICd0ZXh0JyxcbiAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmdzogJzcwMCcsXG4gICAgaGVpZ2h0OiAnNDVweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgcHk6ICcwJyxcbiAgfSxcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==