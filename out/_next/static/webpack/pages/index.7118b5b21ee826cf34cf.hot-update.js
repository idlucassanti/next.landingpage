webpackHotUpdate_N_E("pages/index",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#234582',
    // primary button and link color
    // primary: '#EA3A60', // primary button and link color
    secondary: '#2563FF',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    keyFeature: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      pb: [8, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    "default": {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwia2V5RmVhdHVyZSIsInB0IiwicGIiLCJmZWF0dXJlIiwibmV3cyIsImNvcmVGZWF0dXJlIiwib3ZlcmZsb3ciLCJ0ZXN0aW1vbmlhbCIsInNlcnZpY2VzIiwicHJpY2luZyIsInNlY3Rpb25IZWFkZXIiLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYXJnaW5Cb3R0b20iLCJteCIsInRpdGxlIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInN1YlRpdGxlIiwidGV4dFRyYW5zZm9ybSIsIm1iIiwiZm9udEZhbWlseSIsImhlcm9QcmltYXJ5IiwiaGVyb1NlY29uZGFyeSIsInZhcmlhbnQiLCJsZWFkIiwibGlua3MiLCJjdXJzb3IiLCJuYXYiLCJibG9nIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwiZm9vdGVyIiwibG9nbyIsImltYWdlcyIsImF2YXRhciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJ1dHRvbnMiLCJtZW51IiwiZGVmYXVsdEJ0biIsInBhZGRpbmciLCJvdXRsaW5lIiwiYmciLCJib3hTaGFkb3ciLCJ3aGl0ZUJ1dHRvbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwidGV4dEJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsInN2ZyIsIm1yIiwiY2FyZHMiLCJvZmZlciIsImZsZXgiLCJtaW5IZWlnaHQiLCJtIiwiZmVhdHVyZUNhcmQiLCJwIiwiZm9ybXMiLCJsYWJlbCIsImlucHV0IiwidCIsImJhZGdlcyIsInN0eWxlcyIsInJvb3QiLCJmb250U21vb3RoaW5nIiwibWFyZ2luIiwiaHIiLCJib3JkZXJCb3R0b20iLCJ1bCIsImxpc3RTdHlsZSIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLDhDQUFlO0FBQ2I7QUFDQUEsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxTQURBO0FBQ1c7QUFDakJDLGtCQUFjLEVBQUUsU0FGVjtBQUVxQjtBQUMzQkMsV0FBTyxFQUFFLFNBSEg7QUFHYztBQUNwQkMscUJBQWlCLEVBQUUsU0FKYjtBQUl3QjtBQUM5QkMsY0FBVSxFQUFFLFNBTE47QUFLaUI7QUFDdkJDLHdCQUFvQixFQUFFLFNBTmhCO0FBTTJCO0FBQ2pDQyxnQkFBWSxFQUFFLFNBUFI7QUFPbUI7QUFDekJDLFVBQU0sRUFBRSxTQVJGO0FBUWE7QUFDbkJDLFdBQU8sRUFBRSxTQVRIO0FBU2M7QUFDcEI7QUFDQUMsYUFBUyxFQUFFLFNBWEw7QUFXZ0I7QUFDdEJDLFNBQUssRUFBRSxTQVpEO0FBWVk7QUFDbEJDLFVBQU0sRUFBRSxNQWJGO0FBYVU7QUFFaEI7QUFDQUMsU0FBSyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQUNKYixZQUFJLEVBQUUsTUFERjtBQUVKSSxrQkFBVSxFQUFFLE1BRlI7QUFHSkksZUFBTyxFQUFFLE1B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TjJCLFVBQUksRUFBRSxxQ0FGQTtBQUdOQyxjQUFRLEVBQUUsdUJBSEo7QUFJTnRDLFlBQU0sRUFBRSxnQkFKRjtBQUtOK0IsWUFBTSxFQUFFLGlCQUxGO0FBTU4vRCxjQUFRLEVBQUUsbUJBTko7QUFPTnFDLGFBQU8sRUFBRSxjQVBIO0FBUU5uRCxjQUFRLEVBQUUscUJBUko7QUFTTkMsV0FBSyxFQUFFLGdCQVREO0FBVU5vRixnQkFBVSxFQUFFO0FBVk47QUExQkY7QUFyV0ssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MTE4YjViMjFlZTgyNmNmMzRjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6ICcjRjlGQkZEJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXG4gICAgeWVsbG93OiAnI0ZGQTc0MCcsIC8vIGJvcmRlciBjb2xvclxuICAgIHByaW1hcnk6ICcjMjM0NTgyJywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcbiAgICAvLyBwcmltYXJ5OiAnI0VBM0E2MCcsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXG4gICAgc2Vjb25kYXJ5OiAnIzI1NjNGRicsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcbiAgICBtdXRlZDogJyNFNEU0RTQnLCAvLyBtdXRlZCBjb2xvclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxuXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XG4gICAgbW9kZXM6IHtcbiAgICAgIGRhcms6IHtcbiAgICAgICAgdGV4dDogJyNmZmYnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzA5YycsXG4gICAgICAgIG11dGVkOiAnIzExMScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiBbXG4gICAgJzQ4MHB4JyxcbiAgICAnNjQwcHgnLFxuICAgICc3NjhweCcsXG4gICAgJzEwMjRweCcsXG4gICAgJzEyMjBweCcsXG4gICAgJzEzNjZweCcsXG4gICAgJzE2MjBweCcsXG4gIF0sXG4gIGZvbnRzOiB7XG4gICAgYm9keTogXCInRE0gU2FucycsIHNhbnMtc2VyaWZcIixcbiAgICBoZWFkaW5nOiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxuICB9LFxuICBmb250U2l6ZXM6IFsxMiwgMTUsIDE2LCAxOCwgMjAsIDIyLCAyNCwgMjgsIDMyLCAzNiwgNDIsIDQ4LCA1MiwgNjRdLFxuICBmb250V2VpZ2h0czoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGhlYWRpbmc6IDUwMCxcbiAgICBib2xkOiA3MDAsXG4gIH0sXG4gIGxpbmVIZWlnaHRzOiB7XG4gICAgYm9keTogMS44LFxuICAgIGhlYWRpbmc6IDEuNSxcbiAgfSxcbiAgbGV0dGVyU3BhY2luZ3M6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICBjYXBzOiAnMC4yZW0nLFxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxuICB9LFxuICBzcGFjZTogWzAsIDUsIDEwLCAxNSwgMjAsIDI1LCAzMCwgNTAsIDgwLCAxMDAsIDEyMCwgMTUwXSxcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xuICBsYXlvdXQ6IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIG1heFdpZHRoOiBbXG4gICAgICAgICcxMDAlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgJzc4MHB4JyxcbiAgICAgICAgJzEwMjBweCcsXG4gICAgICAgICcxMjAwcHgnLFxuICAgICAgICBudWxsLFxuICAgICAgICAnMTMxMHB4JyxcbiAgICAgIF0sXG4gICAgICBweDogWzQsIDZdLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICBweTogMyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICAgIHRvb2xiYXI6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICAgIG1haW46IHt9LFxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAga2V5RmVhdHVyZToge1xuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMF0sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNjVweCddLFxuICAgIH0sXG4gICAgZmVhdHVyZToge1xuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXG4gICAgfSxcbiAgICBuZXdzOiB7XG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcbiAgICB9LFxuICAgIGNvcmVGZWF0dXJlOiB7XG4gICAgICBwYjogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTcwcHgnXSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9LFxuICAgIHRlc3RpbW9uaWFsOiB7XG4gICAgICBwdDogWzgsIG51bGwsIDgsICc3MHB4JywgbnVsbCwgOCwgbnVsbCwgJzE0NXB4J10sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxOTBweCddLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgc2VydmljZXM6IHtcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE1MHB4J10sXG4gICAgfSxcbiAgICBwcmljaW5nOiB7XG4gICAgICBwdDogWzgsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTgwcHgnXSxcbiAgICAgIHBiOiBbJzkwcHgnLCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXG4gICAgfSxcbiAgfSxcbiAgc2VjdGlvbkhlYWRlcjoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCAnNTQwcHgnXSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6IFsnLTNweCcsIG51bGwsIC0xXSxcbiAgICBtYXJnaW5Cb3R0b206IFsnNTBweCcsIG51bGwsICc2MHB4JywgbnVsbCwgbnVsbCwgJzY1cHgnLCBudWxsLCAnODBweCddLFxuICAgIG14OiAnYXV0bycsXG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI0cHgnLCBudWxsLCAnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgbnVsbCwgJzM2cHgnXSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS4zLCBudWxsLCBudWxsLCAxLjI1XSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjVweCcsXG4gICAgfSxcblxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWzAsICcxM3B4JywgbnVsbCwgJzE0cHgnXSxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbGV0dGVyU3BhY2luZzogWycxLjVweCcsIG51bGwsICcycHgnXSxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBtYjogMixcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgaGVhZGluZzoge1xuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFs0XSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctLjU1cHgnLFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIGhlcm9QcmltYXJ5OiB7XG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgZm9udFNpemU6IFtcbiAgICAgICAgJzMycHgnLFxuICAgICAgICAnMzZweCcsXG4gICAgICAgICc0MnB4JyxcbiAgICAgICAgJzQwcHgnLFxuICAgICAgICAnNDJweCcsXG4gICAgICAgICc1MnB4JyxcbiAgICAgICAgJzU4cHgnLFxuICAgICAgICAnNjZweCcsXG4gICAgICBdLFxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS4yXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIG1iOiBbNCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXG4gICAgfSxcbiAgICBoZXJvU2Vjb25kYXJ5OiB7XG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsICcxN3B4JywgbnVsbCwgbnVsbCwgJzE5cHgnLCA0XSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjksIG51bGwsIG51bGwsIDJdLFxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxuICAgICAgbWI6IDUsXG4gICAgICBweDogWzAsIG51bGwsIDUsIDYsIG51bGwsIDgsIDldLFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAvLyBleHRlbmRzIHRoZSB0ZXh0LmhlYWRpbmcgc3R5bGVzXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgNF0sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgbWI6IDEsXG4gICAgfSxcbiAgICBsZWFkOiB7XG4gICAgICBmb250U2l6ZTogNDAsXG4gICAgICBmb250RmFtaWx5OiAnRE0gU2FucycsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICB9LFxuICAgIG11dGVkOiB7XG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXG4gICAgICBjb2xvcjogJ211dGVkJyxcbiAgICB9LFxuICAgIHNlY29uZGFyeToge1xuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgY29sb3I6ICcjMDBBOTlEJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICB9LFxuICB9LFxuICBsaW5rczoge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIH0sXG4gICAgYm9sZDoge1xuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgbmF2OiB7XG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gICAgICBweDogMjUsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIGJsb2c6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBweDogMCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgICAgIHRyYW5zaXRpb246ICdjb2xvciAwLjI1cycsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBweDogMCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gIH0sXG4gIGltYWdlczoge1xuICAgIGF2YXRhcjoge1xuICAgICAgd2lkdGg6IDQ4LFxuICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXG4gICAgfSxcbiAgfSxcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcbiAgYnV0dG9uczoge1xuICAgIG1lbnU6IHtcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxuICAgIGRlZmF1bHRCdG46IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzQ1cHgnLFxuICAgICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsIG51bGwsIDJdLFxuICAgICAgbGV0dGVyU3BhY2luZ3M6ICctMC4xNXB4JyxcbiAgICAgIHBhZGRpbmc6IFsnMTJweCAyMHB4JywgbnVsbCwgJzE1cHggMzBweCddLFxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMjVzJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHByaW1hcnk6IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBiZzogJ3ByaW1hcnknLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMjMzLCA3NiwgODQsIDAuNTcpIDBweCA5cHggMjBweCAtNXB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB3aGl0ZUJ1dHRvbjoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgIGJnOiAnd2hpdGUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC41KSAwcHggMTJweCAyNHB4IC0xMHB4JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXG4gICAgICBwYWRkaW5nOiBbJzEwcHggMTVweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0ZXh0QnV0dG9uOiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICBzdmc6IHtcbiAgICAgICAgZm9udFNpemU6IFs0LCA2XSxcbiAgICAgICAgbXI6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNhcmRzOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgcGFkZGluZzogMixcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICB9LFxuICAgIG9mZmVyOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcbiAgICAgIG06IDIsXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgfSxcbiAgICBmZWF0dXJlQ2FyZDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBwOiAzLFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zOiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIGZvbnRTaXplOiAxLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyX2NvbG9yJyxcbiAgICAgIGhlaWdodDogNjAsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcbiAgICAgICAgYm94U2hhZG93OiAodCkgPT4gYDAgMCAwIDJweCAke3QuY29sb3JzLnByaW1hcnl9YCxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGJhZGdlczoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXG4gICAgICBiZzogJyMyOEE1RkYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgIHA6ICczcHggMTFweCcsXG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxuICAgIH0sXG4gICAgb3V0bGluZToge1xuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMXB4JyxcbiAgICB9LFxuICB9LFxuXG4gIHN0eWxlczoge1xuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gICAgICAvLyBNb2RhbCBHbG9iYWwgU3R5bGVcbiAgICAgICcubW9kYWwtdmlkZW8tY2xvc2UtYnRuJzoge1xuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIH0sXG4gICAgICAnLm1vZGFsLXZpZGVvLW1vdmllLXdyYXAnOiB7XG4gICAgICAgIG1hcmdpbjogNixcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xuICAgIGhyOiB7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcbiAgICB9LFxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXG4gICAgdWw6IHtcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgIH0sXG4gICAgc3JPbmx5OiB7XG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=