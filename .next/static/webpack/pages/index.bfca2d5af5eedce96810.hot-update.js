self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Code\\tic-tac-toe\\src\\pages\\index.js";


/*import './index.css';   */

function Square(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "square",
    onClick: props.onClick,
    children: props.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, this);
}

_c = Square;

class Board extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  renderSquare(i) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {
      value: this.props.squares[i],
      onClick: () => this.props.onClick(i)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, this);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "board-row",
        children: [this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "board-row",
        children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "board-row",
        children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this);
  }

}

class Game extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: () => this.jumpTo(move),
          children: desc
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)
      }, move, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this);
    });
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "game",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "game-board",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Board, {
          squares: current.squares,
          onClick: i => this.handleClick(i)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "game-info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
          children: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this);
  }

} // ========================================

/*ReactDOM.render(
  <Game />,
  document.getElementById('root')
);*/

/*export default Game */


function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function MyApp() {
  return Game;
}
_c2 = MyApp;

var _c, _c2;

$RefreshReg$(_c, "Square");
$RefreshReg$(_c2, "MyApp");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsInByb3BzIiwib25DbGljayIsInZhbHVlIiwiQm9hcmQiLCJSZWFjdCIsInJlbmRlclNxdWFyZSIsImkiLCJzcXVhcmVzIiwicmVuZGVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJoaXN0b3J5IiwiQXJyYXkiLCJmaWxsIiwic3RlcE51bWJlciIsInhJc05leHQiLCJoYW5kbGVDbGljayIsInNsaWNlIiwiY3VycmVudCIsImxlbmd0aCIsImNhbGN1bGF0ZVdpbm5lciIsInNldFN0YXRlIiwiY29uY2F0IiwianVtcFRvIiwic3RlcCIsIndpbm5lciIsIm1vdmVzIiwibWFwIiwibW92ZSIsImRlc2MiLCJzdGF0dXMiLCJsaW5lcyIsImEiLCJiIiwiYyIsIk15QXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ25CLHNCQUNFO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBRUEsS0FBSyxDQUFDQyxPQUExQztBQUFBLGNBQ0dELEtBQUssQ0FBQ0U7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7S0FOTUgsTTs7QUFRUCxNQUFNSSxLQUFOLFNBQW9CQyx3REFBcEIsQ0FBb0M7QUFDbENDLGNBQVksQ0FBQ0MsQ0FBRCxFQUFJO0FBQ2Qsd0JBQ0UsOERBQUMsTUFBRDtBQUNFLFdBQUssRUFBRSxLQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELENBQW5CLENBRFQ7QUFFRSxhQUFPLEVBQUUsTUFBTSxLQUFLTixLQUFMLENBQVdDLE9BQVgsQ0FBbUJLLENBQW5CO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU1EOztBQUVERSxRQUFNLEdBQUc7QUFDUCx3QkFDRTtBQUFBLDhCQUNFO0FB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Q0FBUCxDQURZLEVBRVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGWSxFQUdaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSFksRUFJWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpZLEVBS1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMWSxFQU1aLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTlksRUFPWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVBZLEVBUVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FSWSxDQUFkOztBQVVBLE9BQUssSUFBSTFCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwQixLQUFLLENBQUNaLE1BQTFCLEVBQWtDZCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFVBQU0sQ0FBQzJCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLElBQVlILEtBQUssQ0FBQzFCLENBQUQsQ0FBdkI7O0FBQ0EsUUFBSUMsT0FBTyxDQUFDMEIsQ0FBRCxDQUFQLElBQWMxQixPQUFPLENBQUMwQixDQUFELENBQVAsS0FBZTFCLE9BQU8sQ0FBQzJCLENBQUQsQ0FBcEMsSUFBMkMzQixPQUFPLENBQUMwQixDQUFELENBQVAsS0FBZTFCLE9BQU8sQ0FBQzRCLENBQUQsQ0FBckUsRUFBMEU7QUFDeEUsYUFBTzVCLE9BQU8sQ0FBQzBCLENBQUQsQ0FBZDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxJQUFQO0FBQ0Q7O0FBRVksU0FBU0csS0FBVCxHQUFpQjtBQUM5QixTQUFPM0IsSUFBUDtBQUNEO01BRnVCMkIsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZmNhMmQ1YWY1ZWVkY2U5NjgxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbi8qaW1wb3J0ICcuL2luZGV4LmNzcyc7ICAgKi9cclxuXHJcbmZ1bmN0aW9uIFNxdWFyZShwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzcXVhcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICB7cHJvcHMudmFsdWV9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbiAgXHJcbiAgY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyU3F1YXJlKGkpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8U3F1YXJlXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zcXVhcmVzW2ldfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKGkpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgwKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDEpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMil9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgzKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDQpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg2KX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDcpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoOCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY2xhc3MgR2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgaGlzdG9yeTogW3tcclxuICAgICAgICAgICAgc3F1YXJlczogQXJyYXkoOSkuZmlsbChudWxsKVxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBzdGVwTnVtYmVyOiAwLFxyXG4gICAgICAgICAgeElzTmV4dDogdHJ1ZSxcclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGkpIHtcclxuICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeS5zbGljZSgwLCB0aGlzLnN0YXRlLnN0ZXBOdW1iZXIgKyAxKTtcclxuICAgICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXTtcclxuICAgICAgY29uc3Qgc3F1YXJlcyA9IGN1cnJlbnQuc3F1YXJlcy5zbGljZSgpO1xyXG4gICAgICBpZiAoY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpIHx8IHNxdWFyZXNbaV0pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgc3F1YXJlc1tpXSA9IHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJztcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaGlzdG9yeTogaGlzdG9yeS5jb25jYXQoW3tcclxuICAgICAgICAgIHNxdWFyZXM6IHNxdWFyZXNcclxuICAgICAgICB9XSksXHJcbiAgICAgICAgc3RlcE51bWJlcjogaGlzdG9yeS5sZW5ndGgsXHJcbiAgICAgICAgeElzTmV4dDogIXRoaXMuc3RhdGUueElzTmV4dCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAganVtcFRvKHN0ZXApIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc3RlcE51bWJlcjogc3RlcCxcclxuICAgICAgICAgICAgeElzTmV4dDogKHN0ZXAgJSAyKSA9PT0gMCxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IHRoaXMuc3RhdGUuaGlzdG9yeTtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVt0aGlzLnN0YXRlLnN0ZXBOdW1iZXJdO1xyXG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGNhbGN1bGF0ZVdpbm5lcihjdXJyZW50LnNxdWFyZXMpO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IG1vdmVzID0gaGlzdG9yeS5tYXAoKHN0ZXAsIG1vdmUpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGVzYyA9IG1vdmUgP1xyXG4gICAgICAgICAgICAgJ0dvIHRvIG1vdmUgIycgKyBtb3ZlIDpcclxuICAgICAgICAgICAgICdHbyB0byBnYW1lIHN0YXJ0JztcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e21vdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5qdW1wVG8obW92ZSl9PntkZXNjfTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXR1cztcclxuICAgICAgICBpZiAod2lubmVyKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9ICdXaW5uZXI6ICcgKyB3aW5uZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gJ05leHQgcGxheWVyOiAnICsgKHRoaXMuc3RhdGUueElzTmV4dCA/ICdYJyA6ICdPJyk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDxCb2FyZFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlcz17Y3VycmVudC5zcXVhcmVzfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGkpID0+IHRoaXMuaGFuZGxlQ2xpY2soaSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3N0YXR1c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxvbD57bW92ZXN9PC9vbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICBcclxuICAvKlJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxHYW1lIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4gICk7Ki9cclxuICBcclxuICAvKmV4cG9ydCBkZWZhdWx0IEdhbWUgKi9cclxuXHJcblxyXG5cclxuICBmdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykge1xyXG4gICAgY29uc3QgbGluZXMgPSBbXHJcbiAgICAgIFswLCAxLCAyXSxcclxuICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICBbNiwgNywgOF0sXHJcbiAgICAgIFswLCAzLCA2XSxcclxuICAgICAgWzEsIDQsIDddLFxyXG4gICAgICBbMiwgNSwgOF0sXHJcbiAgICAgIFswLCA0LCA4XSxcclxuICAgICAgWzIsIDQsIDZdLFxyXG4gICAgXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XHJcbiAgICAgIGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xyXG4gICAgICAgIHJldHVybiBzcXVhcmVzW2FdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCgpIHtcclxuICByZXR1cm4gR2FtZVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==