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
    className: "social__share",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGVhbS1jYXJkLmpzIl0sIm5hbWVzIjpbIlRlYW1DYXJkIiwic3JjIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWwiLCJzdHlsZXMiLCJjYXJkIiwibWVtYmVyVGh1bWIiLCJpbmZvV3JhcHBlciIsIm5hbWUiLCJzb2NpYWxTaGFyZSIsIm1hcCIsIml0ZW0iLCJpZCIsImljb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJweSIsInB4IiwidHJhbnNpdGlvbiIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwiYm94U2hhZG93IiwiY29sb3IiLCJvcGFjaXR5IiwiYSIsIm15Iiwid2lkdGgiLCJoZWlnaHQiLCJmbGV4U2hyaW5rIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QWxpZ24iLCJtdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJtYiIsInJpZ2h0IiwiYm90dG9tIiwianVzdGlmeUNvbnRlbnQiLCJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsT0FBZ0U7QUFBQTs7QUFBQSxNQUE1Q0MsR0FBNEMsUUFBNUNBLEdBQTRDO0FBQUEsTUFBdkNDLE9BQXVDLFFBQXZDQSxPQUF1QztBQUFBLE1BQTlCQyxLQUE4QixRQUE5QkEsS0FBOEI7QUFBQSxNQUF2QkMsV0FBdUIsUUFBdkJBLFdBQXVCO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQzdFLFNBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sTUFBRSxFQUFFRCxNQUFNLENBQUNFLFdBQWxCO0FBQStCLE9BQUcsRUFBRVAsR0FBcEM7QUFB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QUFlLFNBQWYsQ0FGTjtBQUdEYSxnQkFBVSxFQUFFLEtBSFg7QUFJRFYsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxNQUFWLENBSkg7QUFLRFIsUUFBRSxFQUFFLENBTEg7QUFNREMsZ0JBQVUsRUFBRSxXQU5YO0FBT0QsaUJBQVc7QUFDVEksYUFBSyxFQUFFLENBQUMsU0FBRCxFQUFZLElBQVosRUFBa0IsTUFBbEI7QUFERTtBQVBWO0FBWlE7QUF2REEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMGZkZmY1ZTFiOTNkMjNmZGMzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUZXh0LCBIZWFkaW5nLCBJbWFnZSwgQm94LCBMaW5rIH0gZnJvbSAndGhlbWUtdWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtQ2FyZCh7IHNyYywgYWx0VGV4dCwgdGl0bGUsIGRlc2lnbmF0aW9uLCBzb2NpYWwgfSkge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxJbWFnZSBzeD17c3R5bGVzLm1lbWJlclRodW1ifSBzcmM9e3NyY30gYWx0VGV4dD17YWx0VGV4dH0gLz5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbmZvV3JhcHBlcn0+XG4gICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cImluZm9fX25hbWVcIiBzeD17c3R5bGVzLmluZm9XcmFwcGVyLm5hbWV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJpbmZvX19kZXNpZ25hdGlvblwiIHN4PXtzdHlsZXMuaW5mb1dyYXBwZXIuZGVzaWduYXRpb259PlxuICAgICAgICAgIHtkZXNpZ25hdGlvbn1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuc29jaWFsU2hhcmV9IGNsYXNzTmFtZT1cInNvY2lhbF9fc2hhcmVcIj5cbiAgICAgICAge3NvY2lhbC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPExpbmsga2V5PXtpdGVtLmlkfT57aXRlbS5pY29ufTwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHB5OiBbMCwgbnVsbCwgNCwgNSwgNl0sXG4gICAgcHg6IFsyLCBudWxsLCA2LCA3XSxcbiAgICB0cmFuc2l0aW9uOiAnZWFzZS1pbi1vdXQgMC40cycsXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJveFNoYWRvdzogWydub25lJywgbnVsbCwgJzAgNHB4IDEwcHggcmdiYSgzOSwgODMsIDEyMywgMC4xMiknXSxcbiAgICAgICcuaW5mb19fbmFtZSc6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnLmluZm9fX2Rlc2lnbmF0aW9uJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICAgICcuc29jaWFsX19zaGFyZSc6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgYToge1xuICAgICAgICAgIG15OiAwLFxuICAgICAgICAgIHB5OiBbMCwgbnVsbCwgMV0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgbWVtYmVyVGh1bWI6IHtcbiAgICB3aWR0aDogWyc3MHB4JywgJzgwcHgnLCAnMTAwcHgnLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcbiAgICBoZWlnaHQ6IFsnNzBweCcsICc4MHB4JywgJzEwMHB4JywgbnVsbCwgbnVsbCwgJzEzMHB4J10sXG4gICAgZmxleFNocmluazogMCxcbiAgICBib3JkZXI6ICcycHggc29saWQnLFxuICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgfSxcbiAgaW5mb1dyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbXQ6IFszLCBudWxsLCA0XSxcbiAgICBuYW1lOiB7XG4gICAgICBmb250U2l6ZTogWzEsIDIsIDMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgbGluZUhlaWdodDogWzEuMjUsIDEuMzVdLFxuICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMjVzJyxcbiAgICAgIG1iOiAxLFxuICAgIH0sXG4gICAgZGVzaWduYXRpb246IHtcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxuICAgIH0sXG4gIH0sXG4gIHNvY2lhbFNoYXJlOiB7XG4gICAgcG9zaXRpb246IFsncmVsYXRpdmUnLCBudWxsLCAnYWJzb2x1dGUnXSxcbiAgICByaWdodDogWzAsIG51bGwsIDYsIG51bGwsIDQsIDZdLFxuICAgIGJvdHRvbTogWzAsIG51bGwsICcxOHB4JywgNV0sXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICdhdXRvJ10sXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246IFsncm93JywgbnVsbCwgJ2NvbHVtbiddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICBvcGFjaXR5OiBbMSwgbnVsbCwgMF0sXG4gICAgcHQ6IDIsXG4gICAgYToge1xuICAgICAgZm9udFNpemU6IFswLCAxLCBudWxsLCAyXSxcbiAgICAgIGNvbG9yOiBbJ3RleHQnLCBudWxsLCAncHJpbWFyeSddLFxuICAgICAgbGluZUhlaWdodDogJzFlbScsXG4gICAgICBteTogWzAsIG51bGwsICctMnB4J10sXG4gICAgICBweDogMSxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBbJ3ByaW1hcnknLCBudWxsLCAndGV4dCddLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=