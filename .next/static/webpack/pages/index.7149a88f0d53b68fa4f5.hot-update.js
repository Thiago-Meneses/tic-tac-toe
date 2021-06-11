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

function Home() {}

_c = Home;


/*import './index.css';   */

function Square(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: "square",
    onClick: props.onClick,
    children: props.value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }, this);
}

_c2 = Square;

class Board extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  renderSquare(i) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Square, {
      value: this.props.squares[i],
      onClick: () => this.props.onClick(i)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
        lineNumber: 27,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "board-row",
        children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "board-row",
        children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
          lineNumber: 95,
          columnNumber: 21
        }, this)
      }, move, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
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
          lineNumber: 110,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "game-info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
          children: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, this);
  }

} // ========================================


react_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Game, {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 127,
  columnNumber: 5
}, undefined), document.getElementById('root'));

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

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "Square");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJTcXVhcmUiLCJwcm9wcyIsIm9uQ2xpY2siLCJ2YWx1ZSIsIkJvYXJkIiwiUmVhY3QiLCJyZW5kZXJTcXVhcmUiLCJpIiwic3F1YXJlcyIsInJlbmRlciIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiaGlzdG9yeSIsIkFycmF5IiwiZmlsbCIsInN0ZXBOdW1iZXIiLCJ4SXNOZXh0IiwiaGFuZGxlQ2xpY2siLCJzbGljZSIsImN1cnJlbnQiLCJsZW5ndGgiLCJjYWxjdWxhdGVXaW5uZXIiLCJzZXRTdGF0ZSIsImNvbmNhdCIsImp1bXBUbyIsInN0ZXAiLCJ3aW5uZXIiLCJtb3ZlcyIsIm1hcCIsIm1vdmUiLCJkZXNjIiwic3RhdHVzIiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGluZXMiLCJhIiwiYiIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsSUFBVCxHQUFnQixDQUFFOztLQUFUQSxJO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQ25CLHNCQUNFO0FBQVEsYUFBUyxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sRUFBRUEsS0FBSyxDQUFDQyxPQUExQztBQUFBLGNBQ0dELEtBQUssQ0FBQ0U7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFOTUgsTTs7QUFRUCxNQUFNSSxLQUFOLFNBQW9CQyx3REFBcEIsQ0FBb0M7QUFDbENDLGNBQVksQ0FBQ0MsQ0FBRCxFQUFJO0FBQ2Qsd0JBQ0UsOERBQUMsTUFBRDtBQUNFLFdBQUssRUFBRSxLQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUJELENBQW5CLENBRFQ7QUFFRSxhQUFPLEVBQUUsTUFBTSxLQUFLTixLQUFMLENBQVdDLE9BQVgsQ0FBbUJLLENBQW5CO0FBRmpC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QUFBQSxhQURGLEVBRUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUZGOztBQUtBLFNBQVNiLGVBQVQsQ0FBeUJkLE9BQXpCLEVBQWtDO0FBQ2hDLFFBQU00QixLQUFLLEdBQUcsQ0FDWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQURZLEVBRVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGWSxFQUdaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSFksRUFJWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUpZLEVBS1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FMWSxFQU1aLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTlksRUFPWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVBZLEVBUVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FSWSxDQUFkOztBQVVBLE9BQUssSUFBSTdCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc2QixLQUFLLENBQUNmLE1BQTFCLEVBQWtDZCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFVBQU0sQ0FBQzhCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLElBQVlILEtBQUssQ0FBQzdCLENBQUQsQ0FBdkI7O0FBQ0EsUUFBSUMsT0FBTyxDQUFDNkIsQ0FBRCxDQUFQLElBQWM3QixPQUFPLENBQUM2QixDQUFELENBQVAsS0FBZTdCLE9BQU8sQ0FBQzhCLENBQUQsQ0FBcEMsSUFBMkM5QixPQUFPLENBQUM2QixDQUFELENBQVAsS0FBZTdCLE9BQU8sQ0FBQytCLENBQUQsQ0FBckUsRUFBMEU7QUFDeEUsYUFBTy9CLE9BQU8sQ0FBQzZCLENBQUQsQ0FBZDtBQUNEO0FBQ0Y7O0FBQ0QsU0FBTyxJQUFQO0FBQ0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzE0OWE4OGYwZDUzYjY4ZmE0ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhvbWUoKSB7fVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuLyppbXBvcnQgJy4vaW5kZXguY3NzJzsgICAqL1xyXG5cclxuZnVuY3Rpb24gU3F1YXJlKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNxdWFyZVwiIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIHtwcm9wcy52YWx1ZX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuICBcclxuICBjbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXJTcXVhcmUoaSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTcXVhcmVcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNxdWFyZXNbaV19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soaSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDApfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMSl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgyKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDMpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg1KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDYpfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNyl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg4KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBoaXN0b3J5OiBbe1xyXG4gICAgICAgICAgICBzcXVhcmVzOiBBcnJheSg5KS5maWxsKG51bGwpXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHN0ZXBOdW1iZXI6IDAsXHJcbiAgICAgICAgICB4SXNOZXh0OiB0cnVlLFxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soaSkge1xyXG4gICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5LnNsaWNlKDAsIHRoaXMuc3RhdGUuc3RlcE51bWJlciArIDEpO1xyXG4gICAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xyXG4gICAgICBjb25zdCBzcXVhcmVzID0gY3VycmVudC5zcXVhcmVzLnNsaWNlKCk7XHJcbiAgICAgIGlmIChjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykgfHwgc3F1YXJlc1tpXSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBzcXVhcmVzW2ldID0gdGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBoaXN0b3J5OiBoaXN0b3J5LmNvbmNhdChbe1xyXG4gICAgICAgICAgc3F1YXJlczogc3F1YXJlc1xyXG4gICAgICAgIH1dKSxcclxuICAgICAgICBzdGVwTnVtYmVyOiBoaXN0b3J5Lmxlbmd0aCxcclxuICAgICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBqdW1wVG8oc3RlcCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzdGVwTnVtYmVyOiBzdGVwLFxyXG4gICAgICAgICAgICB4SXNOZXh0OiAoc3RlcCAlIDIpID09PSAwLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5O1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W3RoaXMuc3RhdGUuc3RlcE51bWJlcl07XHJcbiAgICAgICAgY29uc3Qgd2lubmVyID0gY2FsY3VsYXRlV2lubmVyKGN1cnJlbnQuc3F1YXJlcyk7XHJcbiAgXHJcbiAgICAgICAgY29uc3QgbW92ZXMgPSBoaXN0b3J5Lm1hcCgoc3RlcCwgbW92ZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gbW92ZSA/XHJcbiAgICAgICAgICAgICAnR28gdG8gbW92ZSAjJyArIG1vdmUgOlxyXG4gICAgICAgICAgICAgJ0dvIHRvIGdhbWUgc3RhcnQnO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bW92ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmp1bXBUbyhtb3ZlKX0+e2Rlc2N9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3RhdHVzO1xyXG4gICAgICAgIGlmICh3aW5uZXIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gJ1dpbm5lcjogJyArIHdpbm5lcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSAnTmV4dCBwbGF5ZXI6ICcgKyAodGhpcy5zdGF0ZS54SXNOZXh0ID8gJ1gnIDogJ08nKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkXHJcbiAgICAgICAgICAgICAgICBzcXVhcmVzPXtjdXJyZW50LnNxdWFyZXN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoaSkgPT4gdGhpcy5oYW5kbGVDbGljayhpKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj57c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG9sPnttb3Zlc308L29sPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIFxyXG4gIFJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxHYW1lIC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4gICk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW1xyXG4gICAgICBbMCwgMSwgMl0sXHJcbiAgICAgIFszLCA0LCA1XSxcclxuICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICBbMCwgMywgNl0sXHJcbiAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICBbMCwgNCwgOF0sXHJcbiAgICAgIFsyLCA0LCA2XSxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xyXG4gICAgICBpZiAoc3F1YXJlc1thXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2JdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbY10pIHtcclxuICAgICAgICByZXR1cm4gc3F1YXJlc1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAiXSwic291cmNlUm9vdCI6IiJ9