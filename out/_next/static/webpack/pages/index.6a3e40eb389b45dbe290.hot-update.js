webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_sancati_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/sancati.png */ "./src/assets/sancati.png");
/* harmony import */ var assets_sancati_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_sancati_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_sancati_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "sancati logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem.map(function (item, index) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      path: item.path,
      key: index,
      label: item.label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Copyright ", new Date().getFullYear(), " sancati"))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      marginTop: '80px',
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%'
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsIm1lbnVzIiwiZGF0YSIsIm1lbnVJdGVtIiwibWFwIiwiaXRlbSIsImluZGV4IiwicGF0aCIsImxhYmVsIiwibGluayIsImNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIm1hcmdpblRvcCIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZGlzcGxheSIsInB0IiwicGIiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYiIsIm5hdiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwicHgiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyx5REFBWjtBQUF3QixPQUFHLEVBQUMsY0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG9EQUFJLENBQUNDLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNqQixxREFBQyxvREFBRDtBQUNFLFVBQUksRUFBRUQsSUFBSSxDQUFDRSxJQURiO0FBRUUsU0FBRyxFQUFFRCxLQUZQO0FBR0UsV0FBSyxFQUFFRCxJQUFJLENBQUNHLEtBSGQ7QUFJRSxRQUFFLEVBQUVYLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVyxJQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGlCO0FBQUEsR0FBbEIsQ0FESCxDQURGLENBSkYsRUFnQkUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVaLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWSxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNhLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQURiLGFBaEJGLENBREYsQ0FERixDQURGO0FBMEJEO0tBM0J1QmhCLE07QUE2QnhCLElBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTkMsb0JBQWdCLEVBQUU7QUFDaEJjLGVBQVMsRUFBRSxNQURLO0FBRWhCQyxlQUFTLEVBQUUsV0FGSztBQUdoQkMsb0JBQWMsRUFBRSxjQUhBO0FBSWhCQyxhQUFPLEVBQUUsTUFKTztBQUtoQkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBTFk7QUFNaEJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQU5ZO0FBT2hCQyxlQUFTLEVBQUUsUUFQSztBQVFoQkMsbUJBQWEsRUFBRTtBQVJDLEtBRFo7QUFXTm5CLFNBQUssRUFBRTtBQUNMb0IsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEQztBQUVMQyxRQUFFLEVBQUUsQ0FGQztBQUdMQyxTQUFHLEVBQUU7QUFDSFAsZUFBTyxFQUFFLE1BRE47QUFFSFEsa0JBQVUsRUFBRSxRQUZUO0FBR0hDLHNCQUFjLEVBQUUsUUFIYjtBQUlIQyxnQkFBUSxFQUFFO0FBSlA7QUFIQSxLQVhEO0FBc0JOakIsUUFBSSxFQUFFO0FBQ0prQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQUROO0FBRUpDLFdBQUssRUFBRSxNQUZIO0FBR0pDLGdCQUFVLEVBQUUsS0FIUjtBQUlKUCxRQUFFLEVBQUUsQ0FKQTtBQUtKUSxZQUFNLEVBQUUsU0FMSjtBQU1KQyxnQkFBVSxFQUFFLFdBTlI7QUFPSmYsYUFBTyxFQUFFLE9BUEw7QUFRSmdCLG9CQUFjLEVBQUUsTUFSWjtBQVNKQyxnQkFBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxHQUFaLENBVFI7QUFVSkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBVkE7QUFXSixnQkFBVTtBQUNSTixhQUFLLEVBQUU7QUFEQztBQVhOLEtBdEJBO0FBcUNObEIsYUFBUyxFQUFFO0FBQ1RpQixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQUREO0FBRVRRLFdBQUssRUFBRTtBQUZFO0FBckNMO0FBREssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YTNlNDBlYjM4OWI0NWRiZTI5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9mb290ZXIuZGF0YSc7XG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tICdhc3NldHMvc2FuY2F0aS5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLmZvb3RlckJvdHRvbUFyZWF9PlxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIjXCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtGb290ZXJMb2dvfSBhbHQ9XCJzYW5jYXRpIGxvZ29cIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfT5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgIHtkYXRhLm1lbnVJdGVtLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgcGF0aD17aXRlbS5wYXRofVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIubGlua31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZm9vdGVyLmNvcHlyaWdodH0+XG4gICAgICAgICAgICBDb3B5cmlnaHQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gc2FuY2F0aVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXI6IHtcbiAgICBmb290ZXJCb3R0b21BcmVhOiB7XG4gICAgICBtYXJnaW5Ub3A6ICc4MHB4JyxcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxuICAgICAgcGI6IFsnNDBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgbWVudXM6IHtcbiAgICAgIG10OiBbMywgNF0sXG4gICAgICBtYjogMixcbiAgICAgIG5hdjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBsaW5rOiB7XG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgICBtYjogMixcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9