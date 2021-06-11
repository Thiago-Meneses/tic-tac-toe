self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Code\\tic-tac-toe\\src\\pages\\index.js";


/*import './index.css';   */

function MyApp() {
  function Square(props) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "square",
      onClick: props.onClick,
      children: props.value
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

  class Board extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    renderSquare(i) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {
        value: this.props.squares[i],
        onClick: () => this.props.onClick(i)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "board-row",
          children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "board-row",
          children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
            lineNumber: 98,
            columnNumber: 21
          }, this)
        }, move, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
            lineNumber: 113,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "game-info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
            children: moves
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
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
}

_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk15QXBwIiwiU3F1YXJlIiwicHJvcHMiLCJvbkNsaWNrIiwidmFsdWUiLCJCb2FyZCIsIlJlYWN0IiwicmVuZGVyU3F1YXJlIiwiaSIsInNxdWFyZXMiLCJyZW5kZXIiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImhpc3RvcnkiLCJBcnJheSIsImZpbGwiLCJzdGVwTnVtYmVyIiwieElzTmV4dCIsImhhbmRsZUNsaWNrIiwic2xpY2UiLCJjdXJyZW50IiwibGVuZ3RoIiwiY2FsY3VsYXRlV2lubmVyIiwic2V0U3RhdGUiLCJjb25jYXQiLCJqdW1wVG8iLCJzdGVwIiwid2lubmVyIiwibW92ZXMiLCJtYXAiLCJtb3ZlIiwiZGVzYyIsInN0YXR1cyIsImxpbmVzIiwiYSIsImIiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFJakIsV0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDbkIsd0JBQ0U7QUFBUSxlQUFTLEVBQUMsUUFBbEI7QUFBMkIsYUFBTyxFQUFFQSxLQUFLLENBQUNDLE9BQTFDO0FBQUEsZ0JBQ0dELEtBQUssQ0FBQ0U7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDs7QUFFRCxRQUFNQyxLQUFOLFNBQW9CQyx3REFBcEIsQ0FBb0M7QUFDbENDLGdCQUFZLENBQUNDLENBQUQsRUFBSTtBQUNkLDBCQUNFLDhEQUFDLE1BQUQ7QUFDRSxhQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CRCxDQUFuQixDQURUO0FBRUUsZUFBTyxFQUFFLE1BQU0sS0FBS04sS0FBTCxDQUFXQyxPQUFYLENBQW1CSyxDQUFuQjtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFNRDs7QUFFREUsVUFBTSxHQUFHO0FBQ1AsMEJBQ0U7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LENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFksRUFFWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZZLEVBR1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FIWSxFQUlaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSlksRUFLWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxZLEVBTVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FOWSxFQU9aLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUFksRUFRWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVJZLENBQWQ7O0FBVUEsU0FBSyxJQUFJMUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBCLEtBQUssQ0FBQ1osTUFBMUIsRUFBa0NkLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsWUFBTSxDQUFDMkIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsSUFBWUgsS0FBSyxDQUFDMUIsQ0FBRCxDQUF2Qjs7QUFDQSxVQUFJQyxPQUFPLENBQUMwQixDQUFELENBQVAsSUFBYzFCLE9BQU8sQ0FBQzBCLENBQUQsQ0FBUCxLQUFlMUIsT0FBTyxDQUFDMkIsQ0FBRCxDQUFwQyxJQUEyQzNCLE9BQU8sQ0FBQzBCLENBQUQsQ0FBUCxLQUFlMUIsT0FBTyxDQUFDNEIsQ0FBRCxDQUFyRSxFQUEwRTtBQUN4RSxlQUFPNUIsT0FBTyxDQUFDMEIsQ0FBRCxDQUFkO0FBQ0Q7QUFDRjs7QUFDRCxXQUFPLElBQVA7QUFDRDtBQUNGOztLQXhKUW5DLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWM3ZjQ5ZDk5YzJlYzgyNzg4MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG4vKmltcG9ydCAnLi9pbmRleC5jc3MnOyAgICovXHJcblxyXG5mdW5jdGlvbiBNeUFwcCgpIHtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIHtwcm9wcy52YWx1ZX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXJTcXVhcmUoaSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNxdWFyZXNbaV19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDApfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMSl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgyKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDMpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg1KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDYpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNyl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg4KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBoaXN0b3J5OiBbe1xyXG4gICAgICAgICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHN0ZXBOdW1iZXI6IDAsXHJcbiAgICAgICAgICB4SXNOZXh0OiB0cnVlLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soaSkge1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHRoaXMuc3RhdGUuc3RlcE51bWJlciArIDEpO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zdCBzcXVhcmVzID0gY3VycmVudC5zcXVhcmVzLnNsaWNlKCk7XHJcbiAgICAgIGlmIChjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzcXVhcmVzW2ldID0gdGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBoaXN0b3J5OiBoaXN0b3J5LmNvbmNhdChbe1xyXG4gICAgICAgICAgc3F1YXJlczogc3F1YXJlc1xyXG4gICAgICAgIH1dKSxcclxuICAgICAgICBzdGVwTnVtYmVyOiBoaXN0b3J5Lmxlbmd0aCxcclxuICAgICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBqdW1wVG8oc3RlcCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGVwTnVtYmVyOiBzdGVwLFxyXG4gICAgICAgICAgICB4SXNOZXh0OiAoc3RlcCAlIDIpID09PSAwLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W3RoaXMuc3RhdGUuc3RlcE51bWJlcl07XHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gY2FsY3VsYXRlV2lubmVyKGN1cnJlbnQuc3F1YXJlcyk7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3RlcCwgbW92ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gbW92ZSA/XHJcbiAgICAgICAgICAgICAnR28gdG8gbW92ZSAjJyArIG1vdmUgOlxyXG4gICAgICAgICAgICAgJ0dvIHRvIGdhbWUgc3RhcnQnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmp1bXBUbyhtb3ZlKX0+e2Rlc2N9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHVzO1xyXG4gICAgICAgIGlmICh3aW5uZXIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gJ1dpbm5lcjogJyArIHdpbm5lcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSAnTmV4dCBwbGF5ZXI6ICcgKyAodGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtjdXJyZW50LnNxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoaSkgPT4gdGhpcy5oYW5kbGVDbGljayhpKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG9sPnttb3Zlc308L29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFxyXG4gIC8qUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEdhbWUgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbiAgKTsqL1xyXG4gIFxyXG4gIC8qZXhwb3J0IGRlZmF1bHQgR2FtZSAqL1xyXG5cclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW1xyXG4gICAgICBbMCwgMSwgMl0sXHJcbiAgICAgIFszLCA0LCA1XSxcclxuICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICBbMCwgMywgNl0sXHJcbiAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICBbMCwgNCwgOF0sXHJcbiAgICAgIFsyLCA0LCA2XSxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xyXG4gICAgICBpZiAoc3F1YXJlc1thXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2JdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbY10pIHtcclxuICAgICAgICByZXR1cm4gc3F1YXJlc1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==