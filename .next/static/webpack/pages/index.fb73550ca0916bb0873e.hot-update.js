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
    lineNumber: 6,
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
      lineNumber: 15,
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
        lineNumber: 25,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "board-row",
        children: [this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "board-row",
        children: [this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
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
          lineNumber: 93,
          columnNumber: 21
        }, this)
      }, move, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
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
          lineNumber: 108,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "game-info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ol", {
          children: moves
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
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
    lineNumber: 154,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNxdWFyZSIsInByb3BzIiwib25DbGljayIsInZhbHVlIiwiQm9hcmQiLCJSZWFjdCIsInJlbmRlclNxdWFyZSIsImkiLCJzcXVhcmVzIiwicmVuZGVyIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJoaXN0b3J5IiwiQXJyYXkiLCJmaWxsIiwic3RlcE51bWJlciIsInhJc05leHQiLCJoYW5kbGVDbGljayIsInNsaWNlIiwiY3VycmVudCIsImxlbmd0aCIsImNhbGN1bGF0ZVdpbm5lciIsInNldFN0YXRlIiwiY29uY2F0IiwianVtcFRvIiwic3RlcCIsIndpbm5lciIsIm1vdmVzIiwibWFwIiwibW92ZSIsImRlc2MiLCJzdGF0dXMiLCJsaW5lcyIsImEiLCJiIiwiYyIsIk15QXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNuQixzQkFDRTtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUEyQixXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBMUM7QUFBQSxjQUNHRCxLQUFLLENBQUNFO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0tBTk1ILE07O0FBUVAsTUFBTUksS0FBTixTQUFvQkMsd0RBQXBCLENBQW9DO0FBQ2xDQyxjQUFZLENBQUNDLENBQUQsRUFBSTtBQUNkLHdCQUNFLDhEQUFDLE1BQUQ7QUFDRSxXQUFLLEVBQUUsS0FBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CRCxDQUFuQixDQURUO0FBRUUsYUFBTyxFQUFFLE1BQU0sS0FBS04sS0FBTCxDQUFXQyxPQUFYLENBQW1CSyxDQUFuQjtBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFNRDs7QUFFREUsUUFBTSxHQUFHO0FBQ1Asd0JBQ0U7QUFBQSw4QkFDRTtBQUFLLGlC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Q0FEWSxFQUVaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRlksRUFHWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhZLEVBSVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FKWSxFQUtaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBTFksRUFNWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQU5ZLEVBT1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FQWSxFQVFaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUlksQ0FBZDs7QUFVQSxPQUFLLElBQUkxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHMEIsS0FBSyxDQUFDWixNQUExQixFQUFrQ2QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxVQUFNLENBQUMyQixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxJQUFZSCxLQUFLLENBQUMxQixDQUFELENBQXZCOztBQUNBLFFBQUlDLE9BQU8sQ0FBQzBCLENBQUQsQ0FBUCxJQUFjMUIsT0FBTyxDQUFDMEIsQ0FBRCxDQUFQLEtBQWUxQixPQUFPLENBQUMyQixDQUFELENBQXBDLElBQTJDM0IsT0FBTyxDQUFDMEIsQ0FBRCxDQUFQLEtBQWUxQixPQUFPLENBQUM0QixDQUFELENBQXJFLEVBQTBFO0FBQ3hFLGFBQU81QixPQUFPLENBQUMwQixDQUFELENBQWQ7QUFDRDtBQUNGOztBQUNELFNBQU8sSUFBUDtBQUNEOztBQUVZLFNBQVNHLEtBQVQsR0FBaUI7QUFDOUIsc0JBQU8sOERBQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtNQUZ1QkEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mYjczNTUwY2EwOTE2YmIwODczZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3F1YXJlXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAge3Byb3BzLnZhbHVlfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclNxdWFyZShpKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNxdWFyZVxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc3F1YXJlc1tpXX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayhpKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgxKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDIpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMyl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg0KX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDUpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNil9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg3KX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGhpc3Rvcnk6IFt7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IEFycmF5KDkpLmZpbGwobnVsbClcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgc3RlcE51bWJlcjogMCxcclxuICAgICAgICAgIHhJc05leHQ6IHRydWUsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhpKSB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwTnVtYmVyICsgMSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XHJcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSBjdXJyZW50LnNxdWFyZXMuc2xpY2UoKTtcclxuICAgICAgaWYgKGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB8fCBzcXVhcmVzW2ldKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNxdWFyZXNbaV0gPSB0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTyc7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGhpc3Rvcnk6IGhpc3RvcnkuY29uY2F0KFt7XHJcbiAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzXHJcbiAgICAgICAgfV0pLFxyXG4gICAgICAgIHN0ZXBOdW1iZXI6IGhpc3RvcnkubGVuZ3RoLFxyXG4gICAgICAgIHhJc05leHQ6ICF0aGlzLnN0YXRlLnhJc05leHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGp1bXBUbyhzdGVwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IHN0ZXAsXHJcbiAgICAgICAgICAgIHhJc05leHQ6IChzdGVwICUgMikgPT09IDAsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbdGhpcy5zdGF0ZS5zdGVwTnVtYmVyXTtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcclxuICBcclxuICAgICAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubWFwKChzdGVwLCBtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBtb3ZlID9cclxuICAgICAgICAgICAgICdHbyB0byBtb3ZlICMnICsgbW92ZSA6XHJcbiAgICAgICAgICAgICAnR28gdG8gZ2FtZSBzdGFydCc7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXttb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuanVtcFRvKG1vdmUpfT57ZGVzY308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0dXM7XHJcbiAgICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSAnV2lubmVyOiAnICsgd2lubmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9ICdOZXh0IHBsYXllcjogJyArICh0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTycpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM9e2N1cnJlbnQuc3F1YXJlc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhpKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8b2w+e21vdmVzfTwvb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgXHJcbiAgLypSZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8R2FtZSAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuICApOyovXHJcbiAgXHJcbiAgLypleHBvcnQgZGVmYXVsdCBHYW1lICovXHJcblxyXG5cclxuXHJcbiAgZnVuY3Rpb24gY2FsY3VsYXRlV2lubmVyKHNxdWFyZXMpIHtcclxuICAgIGNvbnN0IGxpbmVzID0gW1xyXG4gICAgICBbMCwgMSwgMl0sXHJcbiAgICAgIFszLCA0LCA1XSxcclxuICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICBbMCwgMywgNl0sXHJcbiAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICBbMCwgNCwgOF0sXHJcbiAgICAgIFsyLCA0LCA2XSxcclxuICAgIF07XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IFthLCBiLCBjXSA9IGxpbmVzW2ldO1xyXG4gICAgICBpZiAoc3F1YXJlc1thXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2JdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbY10pIHtcclxuICAgICAgICByZXR1cm4gc3F1YXJlc1thXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoKSB7XHJcbiAgcmV0dXJuIDxHYW1lIC8+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9