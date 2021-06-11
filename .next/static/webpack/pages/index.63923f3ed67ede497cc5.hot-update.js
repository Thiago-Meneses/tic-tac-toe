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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Game, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 10
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsInByb3BzIiwib25DbGljayIsInZhbHVlIiwiQm9hcmQiLCJSZWFjdCIsInJlbmRlclNxdWFyZSIsImkiLCJzcXVhcmVzIiwicmVuZGVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJoaXN0b3J5IiwiQXJyYXkiLCJmaWxsIiwic3RlcE51bWJlciIsInhJc05leHQiLCJoYW5kbGVDbGljayIsInNsaWNlIiwiY3VycmVudCIsImxlbmd0aCIsImNhbGN1bGF0ZVdpbm5lciIsInNldFN0YXRlIiwiY29uY2F0IiwianVtcFRvIiwic3RlcCIsIndpbm5lciIsIm1vdmVzIiwibWFwIiwibW92ZSIsImRlc2MiLCJzdGF0dXMiLCJsaW5lcyIsImEiLCJiIiwiYyIsIk15QXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNuQixzQkFDRTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUEyQixXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBMUM7QUFBQSxjQUNHRCxLQUFLLENBQUNFO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTk1ILE07O0FBUVAsTUFBTUksS0FBTixTQUFvQkMsd0RBQXBCLENBQW9DO0FBQ2xDQyxjQUFZLENBQUNDLENBQUQsRUFBSTtBQUNkLHdCQUNFLDhEQUFDLE1BQUQ7QUFDRSxXQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CRCxDQUFuQixDQURUO0FBRUUsYUFBTyxFQUFFLE1BQU0sS0FBS04sS0FBTCxDQUFXQyxPQUFYLENBQW1CSyxDQUFuQjtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFFREUsUUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBQSw4QkFDRTtBQUFLLGlC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Q0FEWSxFQUVaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRlksRUFHWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhZLEVBSVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKWSxFQUtaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTFksRUFNWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQU5ZLEVBT1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FQWSxFQVFaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUlksQ0FBZDs7QUFVQSxPQUFLLElBQUkxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEIsS0FBSyxDQUFDWixNQUExQixFQUFrQ2QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxVQUFNLENBQUMyQixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxJQUFZSCxLQUFLLENBQUMxQixDQUFELENBQXZCOztBQUNBLFFBQUlDLE9BQU8sQ0FBQzBCLENBQUQsQ0FBUCxJQUFjMUIsT0FBTyxDQUFDMEIsQ0FBRCxDQUFQLEtBQWUxQixPQUFPLENBQUMyQixDQUFELENBQXBDLElBQTJDM0IsT0FBTyxDQUFDMEIsQ0FBRCxDQUFQLEtBQWUxQixPQUFPLENBQUM0QixDQUFELENBQXJFLEVBQTBFO0FBQ3hFLGFBQU81QixPQUFPLENBQUMwQixDQUFELENBQWQ7QUFDRDtBQUNGOztBQUNELFNBQU8sSUFBUDtBQUNEOztBQUVZLFNBQVNHLEtBQVQsR0FBaUI7QUFDOUIsc0JBQU8sOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtNQUZ1QkEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzkyM2YzZWQ2N2VkZTQ5N2NjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5cclxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIHtwcm9wcy52YWx1ZX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXJTcXVhcmUoaSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNxdWFyZXNbaV19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDApfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMSl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgyKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDMpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg1KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDYpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNyl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg4KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBoaXN0b3J5OiBbe1xyXG4gICAgICAgICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHN0ZXBOdW1iZXI6IDAsXHJcbiAgICAgICAgICB4SXNOZXh0OiB0cnVlLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soaSkge1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHRoaXMuc3RhdGUuc3RlcE51bWJlciArIDEpO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zdCBzcXVhcmVzID0gY3VycmVudC5zcXVhcmVzLnNsaWNlKCk7XHJcbiAgICAgIGlmIChjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzcXVhcmVzW2ldID0gdGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBoaXN0b3J5OiBoaXN0b3J5LmNvbmNhdChbe1xyXG4gICAgICAgICAgc3F1YXJlczogc3F1YXJlc1xyXG4gICAgICAgIH1dKSxcclxuICAgICAgICBzdGVwTnVtYmVyOiBoaXN0b3J5Lmxlbmd0aCxcclxuICAgICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBqdW1wVG8oc3RlcCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGVwTnVtYmVyOiBzdGVwLFxyXG4gICAgICAgICAgICB4SXNOZXh0OiAoc3RlcCAlIDIpID09PSAwLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W3RoaXMuc3RhdGUuc3RlcE51bWJlcl07XHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gY2FsY3VsYXRlV2lubmVyKGN1cnJlbnQuc3F1YXJlcyk7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3RlcCwgbW92ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gbW92ZSA/XHJcbiAgICAgICAgICAgICAnR28gdG8gbW92ZSAjJyArIG1vdmUgOlxyXG4gICAgICAgICAgICAgJ0dvIHRvIGdhbWUgc3RhcnQnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmp1bXBUbyhtb3ZlKX0+e2Rlc2N9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHVzO1xyXG4gICAgICAgIGlmICh3aW5uZXIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gJ1dpbm5lcjogJyArIHdpbm5lcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSAnTmV4dCBwbGF5ZXI6ICcgKyAodGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtjdXJyZW50LnNxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoaSkgPT4gdGhpcy5oYW5kbGVDbGljayhpKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG9sPnttb3Zlc308L29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFxyXG4gIC8qUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEdhbWUgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbiAgKTsqL1xyXG4gIFxyXG4gIC8qZXhwb3J0IGRlZmF1bHQgR2FtZSAqL1xyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB7XHJcbiAgICBjb25zdCBsaW5lcyA9IFtcclxuICAgICAgWzAsIDEsIDJdLFxyXG4gICAgICBbMywgNCwgNV0sXHJcbiAgICAgIFs2LCA3LCA4XSxcclxuICAgICAgWzAsIDMsIDZdLFxyXG4gICAgICBbMSwgNCwgN10sXHJcbiAgICAgIFsyLCA1LCA4XSxcclxuICAgICAgWzAsIDQsIDhdLFxyXG4gICAgICBbMiwgNCwgNl0sXHJcbiAgICBdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXTtcclxuICAgICAgaWYgKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKSB7XHJcbiAgICAgICAgcmV0dXJuIHNxdWFyZXNbYV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKCkge1xyXG4gIHJldHVybiA8R2FtZSAvPlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==