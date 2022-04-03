webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/team-card.js":
/*!*************************************!*\
  !*** ./src/components/team-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
var _jsxFileName = "C:\\Users\\idlucassanti\\Desktop\\Front\\next\\landingpage\\src\\components\\team-card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function TeamCard(_ref) {
  var _this = this;

  var src = _ref.src,
      altText = _ref.altText,
      title = _ref.title,
      designation = _ref.designation,
      social = _ref.social;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.card,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.memberThumb,
    src: src,
    altText: altText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.infoWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    className: "info__name",
    sx: styles.infoWrapper.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: "info__designation",
    sx: styles.infoWrapper.designation,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, designation)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.socialShare,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, social.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, item.icon);
  })));
}
_c = TeamCard;
var styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    py: [0, null, 4, 5, 6],
    px: [2, null, 6, 7],
    transition: 'ease-in-out 0.4s',
    borderRadius: '8px',
    position: 'relative',
    '&:hover': {
      boxShadow: ['none', null, '0 4px 10px rgba(39, 83, 123, 0.12)'],
      '.info__name': {
        color: 'primary'
      },
      '.info__designation': {
        color: 'primary'
      },
      '.social__share': {
        opacity: 1,
        a: {
          my: 0,
          py: [0, null, 1]
        }
      }
    }
  },
  memberThumb: {
    width: ['70px', '80px', '100px', null, null, '130px'],
    height: ['70px', '80px', '100px', null, null, '130px'],
    flexShrink: 0,
    border: '2px solid',
    borderColor: 'primary',
    borderRadius: '50%'
  },
  infoWrapper: {
    width: '100%',
    textAlign: 'center',
    mt: [3, null, 4],
    name: {
      fontSize: [1, 2, 3, null, null, 4],
      fontWeight: 'bold',
      lineHeight: [1.25, 1.35],
      transition: 'color 0.25s',
      mb: 1
    },
    designation: {
      fontSize: ['14px', null, null, 2],
      fontWeight: 'body',
      lineHeight: 'heading',
      color: 'text',
      transition: 'color 0.25s'
    }
  },
  socialShare: {
    position: ['relative', null, 'absolute'],
    right: [0, null, 6, null, 4, 6],
    bottom: [0, null, '18px', 5],
    width: ['100%', null, 'auto'],
    display: 'flex',
    flexDirection: ['row', null, 'column'],
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s',
    opacity: [1, null, 0],
    pt: 2,
    a: {
      fontSize: [0, 1, null, 2],
      color: ['text', null, 'primary'],
      lineHeight: '1em',
      my: [0, null, '-2px'],
      px: 1,
      transition: 'all 0.25s',
      '&:hover': {
        color: ['primary', null, 'text']
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "TeamCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsIm1hcCIsIml0ZW0iLCJpZCIsImljb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInJpZ2h0IiwiYm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBZ0U7QUFBQTs7QUFBQSxNQUE1Q0MsR0FBNEMsUUFBNUNBLEdBQTRDO0FBQUEsTUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsV0FBdUIsUUFBdkJBLFdBQXVCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzdFLFNBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sTUFBRSxFQUFFRCxNQUFNLENBQUNFLFdBQWxCO0FBQStCLE9BQUcsRUFBRVAsR0FBcEM7QUFB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QUFVLEVBQUUsS0FIWDtBQUlEVixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLE1BQVYsQ0FKSDtBQUtEUixRQUFFLEVBQUUsQ0FMSDtBQU1EQyxnQkFBVSxFQUFFLFdBTlg7QUFPRCxpQkFBVztBQUNUSSxhQUFLLEVBQUUsQ0FBQyxTQUFELEVBQVksSUFBWixFQUFrQixNQUFsQjtBQURFO0FBUFY7QUFaUTtBQXZEQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcyYjgzNzhhZTk4MDIzMDdhYjM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFRleHQsIEhlYWRpbmcsIEltYWdlLCBCb3gsIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYW1DYXJkKHsgc3JjLCBhbHRUZXh0LCB0aXRsZSwgZGVzaWduYXRpb24sIHNvY2lhbCB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17c3R5bGVzLmNhcmR9PlxuICAgICAgPEltYWdlIHN4PXtzdHlsZXMubWVtYmVyVGh1bWJ9IHNyYz17c3JjfSBhbHRUZXh0PXthbHRUZXh0fSAvPlxuICAgICAgPEJveCBzeD17c3R5bGVzLmluZm9XcmFwcGVyfT5cbiAgICAgICAgPEhlYWRpbmcgY2xhc3NOYW1lPVwiaW5mb19fbmFtZVwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIubmFtZX0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImluZm9fX2Rlc2lnbmF0aW9uXCIgc3g9e3N0eWxlcy5pbmZvV3JhcHBlci5kZXNpZ25hdGlvbn0+XG4gICAgICAgICAge2Rlc2lnbmF0aW9ufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5zb2NpYWxTaGFyZX0+XG4gICAgICAgIHtzb2NpYWwubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0+e2l0ZW0uaWNvbn08L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBweTogWzAsIG51bGwsIDQsIDUsIDZdLFxuICAgIHB4OiBbMiwgbnVsbCwgNiwgN10sXG4gICAgdHJhbnNpdGlvbjogJ2Vhc2UtaW4tb3V0IDAuNHMnLFxuICAgIGJvcmRlclJhZGl1czogJzhweCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBib3hTaGFkb3c6IFsnbm9uZScsIG51bGwsICcwIDRweCAxMHB4IHJnYmEoMzksIDgzLCAxMjMsIDAuMTIpJ10sXG4gICAgICAnLmluZm9fX25hbWUnOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgICAgJy5pbmZvX19kZXNpZ25hdGlvbic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnLnNvY2lhbF9fc2hhcmUnOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIGE6IHtcbiAgICAgICAgICBteTogMCxcbiAgICAgICAgICBweTogWzAsIG51bGwsIDFdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIG1lbWJlclRodW1iOiB7XG4gICAgd2lkdGg6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXG4gICAgaGVpZ2h0OiBbJzcwcHgnLCAnODBweCcsICcxMDBweCcsIG51bGwsIG51bGwsICcxMzBweCddLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gIH0sXG4gIGluZm9XcmFwcGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIG10OiBbMywgbnVsbCwgNF0sXG4gICAgbmFtZToge1xuICAgICAgZm9udFNpemU6IFsxLCAyLCAzLCBudWxsLCBudWxsLCA0XSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjI1LCAxLjM1XSxcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXG4gICAgICBtYjogMSxcbiAgICB9LFxuICAgIGRlc2lnbmF0aW9uOiB7XG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgMl0sXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcbiAgICB9LFxuICB9LFxuICBzb2NpYWxTaGFyZToge1xuICAgIHBvc2l0aW9uOiBbJ3JlbGF0aXZlJywgbnVsbCwgJ2Fic29sdXRlJ10sXG4gICAgcmlnaHQ6IFswLCBudWxsLCA2LCBudWxsLCA0LCA2XSxcbiAgICBib3R0b206IFswLCBudWxsLCAnMThweCcsIDVdLFxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnYXV0byddLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ3JvdycsIG51bGwsICdjb2x1bW4nXSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgb3BhY2l0eTogWzEsIG51bGwsIDBdLFxuICAgIHB0OiAyLFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMl0sXG4gICAgICBjb2xvcjogWyd0ZXh0JywgbnVsbCwgJ3ByaW1hcnknXSxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxZW0nLFxuICAgICAgbXk6IFswLCBudWxsLCAnLTJweCddLFxuICAgICAgcHg6IDEsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogWydwcmltYXJ5JywgbnVsbCwgJ3RleHQnXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9