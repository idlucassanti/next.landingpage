webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/workflow.js":
/*!**********************************!*\
  !*** ./src/sections/workflow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkFlow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/patternBG.png */ "./src/assets/patternBG.png");
/* harmony import */ var assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/arrowOdd.svg */ "./src/assets/arrowOdd.svg");
/* harmony import */ var assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/arrowEven.svg */ "./src/assets/arrowEven.svg");
/* harmony import */ var assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\sections\\workflow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






var data = [{
  id: 1,
  title: 'Set disbursement Instructions',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 2,
  title: 'Assembly retrieves funds from your account',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 3,
  title: 'Assembly initiates disbursement',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}, {
  id: 4,
  title: 'Customer receives funds payment',
  text: 'Get your blood tests delivered at home collect a sample from the your blood tests.'
}];
function WorkFlow() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.workflow'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.workflow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
}
_c = WorkFlow;
var styles = {
  workflow: {
    backgroundColor: 'primary',
    backgroundImage: "url(".concat(assets_patternBG_png__WEBPACK_IMPORTED_MODULE_3___default.a, ")"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'relative',
    py: [8, null, 9, null, null, 10]
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: ['35px 0', null, '45px 30px', null, '50px 25px', null, null, '50px 65px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    textAlign: ['center', null, 'left'],
    width: ['100%', '80%', '100%'],
    mx: ['auto'],
    px: [4, null, null, 0],
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center center',
      width: 215,
      height: 60,
      '@media screen and (max-width:1220px)': {
        display: 'none'
      }
    },
    '&:nth-of-type(2n-1)::before': {
      backgroundImage: "url(".concat(assets_arrowOdd_svg__WEBPACK_IMPORTED_MODULE_4___default.a, ")")
    },
    '&:nth-of-type(2n)::before': {
      backgroundImage: "url(".concat(assets_arrowEven_svg__WEBPACK_IMPORTED_MODULE_5___default.a, ")"),
      top: 17
    },
    '&:last-child::before': {
      display: 'none'
    }
  },
  iconBox: {
    width: ['50px', null, '60px', null, null, '70px'],
    height: ['50px', null, '60px', null, null, '70px'],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    mb: [5, null, null, null, null, 6],
    mx: ['auto', null, 0],
    fontSize: [6, null, 7, null, null, '30px'],
    fontWeight: 700,
    justifyContent: 'center',
    color: '#234582'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: 'white',
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3]
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: 'white',
      opacity: 0.75,
      pr: [0, null, null, null, null, 5]
    }
  }
};

var _c;

$RefreshReg$(_c, "WorkFlow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3dvcmtmbG93LmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCIsIldvcmtGbG93IiwidmFyaWFudCIsInN0eWxlcyIsIndvcmtmbG93IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiUGF0dGVybkJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicG9zaXRpb24iLCJweSIsImdyaWQiLCJtYiIsInB0IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjYXJkIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJ3aWR0aCIsIm14IiwicHgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsIkFycm93T2RkIiwiQXJyb3dFdmVuIiwiaWNvbkJveCIsImZsZXhTaHJpbmsiLCJib3JkZXJSYWRpdXMiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsIndyYXBwZXIiLCJtdCIsImxpbmVIZWlnaHQiLCJwciIsInN1YlRpdGxlIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwrQkFGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQURXLEVBT1g7QUFDRUYsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLDRDQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBUFcsRUFhWDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsaUNBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkos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O0FBYVA2QixZQUFRLEVBQUU7QUFDUlIsY0FBUSxFQUFFLENBREY7QUFFUkMsZ0JBQVUsRUFBRSxHQUZKO0FBR1JLLGdCQUFVLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FISjtBQUlSSCxXQUFLLEVBQUUsT0FKQztBQUtSTSxhQUFPLEVBQUUsSUFMRDtBQU1SRixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsSUFBdEIsRUFBNEIsQ0FBNUI7QUFOSTtBQWJIO0FBL0VJLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjgyNTI0NDA0ZTRmNGY5NjQ0YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcblxuaW1wb3J0IFBhdHRlcm5CRyBmcm9tICdhc3NldHMvcGF0dGVybkJHLnBuZyc7XG5pbXBvcnQgQXJyb3dPZGQgZnJvbSAnYXNzZXRzL2Fycm93T2RkLnN2Zyc7XG5pbXBvcnQgQXJyb3dFdmVuIGZyb20gJ2Fzc2V0cy9hcnJvd0V2ZW4uc3ZnJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiAnU2V0IGRpc2J1cnNlbWVudCBJbnN0cnVjdGlvbnMnLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIGJsb29kIHRlc3RzLicsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0Fzc2VtYmx5IHJldHJpZXZlcyBmdW5kcyBmcm9tIHlvdXIgYWNjb3VudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiAnQXNzZW1ibHkgaW5pdGlhdGVzIGRpc2J1cnNlbWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiAnQ3VzdG9tZXIgcmVjZWl2ZXMgZnVuZHMgcGF5bWVudCcsXG4gICAgdGV4dDpcbiAgICAgICdHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgYmxvb2QgdGVzdHMuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmtGbG93KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7dmFyaWFudDogJ3NlY3Rpb24ud29ya2Zsb3cnfX0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMud29ya2Zsb3d9PlxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgd29ya2Zsb3c6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtQYXR0ZXJuQkd9KWAsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYG5vLXJlcGVhdGAsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcHk6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBtYjogLTEsXG4gICAgcHQ6IDAsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQ1cHggMzBweCcsXG4gICAgICBudWxsLFxuICAgICAgJzUwcHggMjVweCcsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgICc1MHB4IDY1cHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsMWZyKScsXG4gICAgXSxcbiAgfSxcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6IFsnYXV0byddLFxuICAgIHB4OiBbNCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDcyLCBudWxsLCA5MF0sXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgICAgd2lkdGg6IDIxNSxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjIwcHgpJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4tMSk6OmJlZm9yZSc6IHtcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke0Fycm93T2RkfSlgLFxuICAgIH0sXG4gICAgJyY6bnRoLW9mLXR5cGUoMm4pOjpiZWZvcmUnOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtBcnJvd0V2ZW59KWAsXG4gICAgICB0b3A6IDE3LFxuICAgIH0sXG4gICAgJyY6bGFzdC1jaGlsZDo6YmVmb3JlJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgaWNvbkJveDoge1xuICAgIHdpZHRoOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc3MHB4J10sXG4gICAgZmxleFNocmluazogMCxcbiAgICBib3JkZXJSYWRpdXM6IFsxNSwgbnVsbCwgMjMsIG51bGwsIG51bGwsIDMwXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIDBdLFxuICAgIGZvbnRTaXplOiBbNiwgbnVsbCwgNywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGNvbG9yOiAnIzIzNDU4MicsXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDQsIG51bGwsIG51bGwsIDVdLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS40LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjU1XSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBtYjogWzIsIDNdLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgbnVsbCwgMS45LCAyXSxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3BhY2l0eTogMC43NSxcbiAgICAgIHByOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9