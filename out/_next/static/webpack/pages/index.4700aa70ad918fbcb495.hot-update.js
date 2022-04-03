webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/core-feature.png */ "./src/assets/core-feature.png");
/* harmony import */ var assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_core_feature_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var data = {
  subTitle: 'Core features',
  title: 'Smart Jackpots that you may love this anytime & anywhere',
  description: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
  btnName: 'Get Started',
  btnURL: '#'
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: data.title,
    subTitle: data.subTitle,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }))));
}
_c = CoreFeature;
var styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};

var _c;

$RefreshReg$(_c, "CoreFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsIkNvcmVGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsImNvbnRlbnRCb3giLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJwYiIsImZsZXhTaHJpbmsiLCJweCIsInRleHRBbGlnbiIsIndpZHRoIiwibXgiLCJwciIsInRodW1ibmFpbCIsInBvc2l0aW9uIiwibXIiLCJtbCIsInpJbmRleCIsImhlaWdodCIsInNoYXBlQm94IiwiYm90dG9tIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLGVBREM7QUFFWEMsT0FBSyxFQUFFLDBEQUZJO0FBR1hDLGFBQVcsRUFDVCwySUFKUztBQUtYQyxTQUFPLEVBQUUsYUFMRTtBQU1YQyxRQUFNLEVBQUU7QUFORyxDQUFiO0FBU2UsU0FBU0MsV0FBVCxHQUF1QjtBQUNwQyxTQUNFO0FBQVMsTUFBRSxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNDLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsK0RBQUQ7QUFDRSxTQUFLLEVBQUVWLElBQUksQ0FBQ0UsS0FEZDtBQUVFLFlBQVEsRUFBRUYsSUFBSSxDQUFDQyxRQUZqQjtBQUdFLGVBQVcsRUFBRUQsSUFBSSxDQUFDRyxXQUhwQjtBQUlFLFdBQU8sRUFBRUgsSUFBSSxDQUFDSSxPQUpoQjtBQUtFLFVBQU0sRUFBRUosSUFBSSxDQUFDSyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERjtBQWVEO0tBaEJ1QkMsVztBQWtCeEIsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLGNBQVksRUFBRTtBQUNaRSxXQUFPLEVBQUUsTUFERztBQUVaQyxjQUFVLEVBQUUsUUFGQTtBQUdaQyxrQkFBYyxFQUFFLGVBSEo7QUFJWkMsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLFFBQXJCLENBSkU7QUFLWkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsSUFBVixFQUFnQixDQUFoQjtBQUxRLEdBREQ7QUFRYkwsWUFBVSxFQUFFO0FBQ1ZNLGNBQVUsRUFBRSxDQURGO0FBRVZDLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsTUFBVixFQUFrQixDQUFsQixDQUZNO0FBR1ZDLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLE1BQXZCLENBSEQ7QUFJVkMsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUMsSUFBckMsRUFBMkMsR0FBM0MsQ0FKRztBQUtWSixNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFqQixFQUF1QixDQUF2QixDQUxNO0FBTVZLLE1BQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixDQUFyQixDQU5NO0FBT1Ysb0JBQWdCO0FBQ2RDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEI7QUFEVTtBQVBOLEdBUkM7QUFtQmJDLFdBQVMsRUFBRTtBQUNUWCxXQUFPLEVBQUUsYUFEQTtBQUVUWSxZQUFRLEVBQUUsVUFGRDtBQUdUQyxNQUFFLEVBQUUsTUFISztBQUlUQyxNQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FKSztBQUtULGFBQVM7QUFDUEYsY0FBUSxFQUFFLFVBREg7QUFFUEcsWUFBTSxFQUFFLENBRkQ7QUFHUEMsWUFBTSxFQUFFLENBQUMsR0FBRCxFQUFNLE1BQU47QUFIRDtBQUxBLEdBbkJFO0FBOEJiQyxVQUFRLEVBQUU7QUFDUkwsWUFBUSxFQUFFLFVBREY7QUFFUk0sVUFBTSxFQUFFLENBQUMsRUFGRDtBQUdSQyxTQUFLLEVBQUUsQ0FBQyxHQUhBO0FBSVJKLFVBQU0sRUFBRSxDQUFDLENBSkQ7QUFLUmYsV0FBTyxFQUFFLENBQUMsTUFBRCxFQUFTLGNBQVQsRUFBeUIsTUFBekIsRUFBaUMsSUFBakMsRUFBdUMsY0FBdkM7QUFMRDtBQTlCRyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3MDBhYTcwYWQ5MThmYmNiNDk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBCb3gsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcblxuaW1wb3J0IEZlYXR1cmVUaHVtYiBmcm9tICdhc3NldHMvY29yZS1mZWF0dXJlLnBuZyc7XG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmcnO1xuXG5jb25zdCBkYXRhID0ge1xuICBzdWJUaXRsZTogJ0NvcmUgZmVhdHVyZXMnLFxuICB0aXRsZTogJ1NtYXJ0IEphY2twb3RzIHRoYXQgeW91IG1heSBsb3ZlIHRoaXMgYW55dGltZSAmIGFueXdoZXJlJyxcbiAgZGVzY3JpcHRpb246XG4gICAgJ0dldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZSB2aWN0b3J5IG9mIHRoZSBtYW5hZ2VtZW50cyB0aGF0IHN1cHBsaWVzIGJlc3QgZGVzaWduIHN5c3RlbSBndWlkZWxpbmVzIGV2ZXIuJyxcbiAgYnRuTmFtZTogJ0dldCBTdGFydGVkJyxcbiAgYnRuVVJMOiAnIycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3JlRmVhdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17e3ZhcmlhbnQ6ICdzZWN0aW9uLmNvcmVGZWF0dXJlJ319PlxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lckJveH0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cbiAgICAgICAgICA8VGV4dEZlYXR1cmVcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgc3ViVGl0bGU9e2RhdGEuc3ViVGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGJ0bk5hbWU9e2RhdGEuYnRuTmFtZX1cbiAgICAgICAgICAgIGJ0blVSTD17ZGF0YS5idG5VUkx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyQm94OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgZmxleFdyYXA6IFsnd3JhcCcsIG51bGwsIG51bGwsICdub3dyYXAnXSxcbiAgICBwYjogWzAsIDcsIDAsIG51bGwsIDddLFxuICB9LFxuICBjb250ZW50Qm94OiB7XG4gICAgZmxleFNocmluazogMCxcbiAgICBweDogWzAsIG51bGwsICczMHB4JywgMF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCBudWxsLCAzNDAsIDQwMCwgNDMwLCBudWxsLCA0ODVdLFxuICAgIHBiOiBbJzUwcHgnLCAnNjBweCcsIG51bGwsIDBdLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcbiAgICAnLmRlc2NyaXB0aW9uJzoge1xuICAgICAgcHI6IFswLCBudWxsLCA2LCA3LCA2XSxcbiAgICB9LFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1yOiAnYXV0bycsXG4gICAgbWw6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICAgICc+IGltZyc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlQm94OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAtNjUsXG4gICAgcmlnaHQ6IC0xNjUsXG4gICAgekluZGV4OiAtMSxcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCAnaW5saW5lLWJsb2NrJywgJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==