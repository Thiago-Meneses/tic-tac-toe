self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


/*import './index.css';

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          history: [{
            squares: Array(9).fill(null)
          }],
          stepNumber: 0,
          xIsNext: true,

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
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }
    
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
  
        const moves = history.map((step, move) => {
            const desc = move ?
             'Go to move #' + move :
             'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
  
        return (
            <div className="game">
            <div className="game-board">
                <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            </div>
        );
    }
  }
  
  // ========================================
  
  /*ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );*/

/* harmony default export */ __webpack_exports__["default"] = (Game);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWUiLCJjYWxjdWxhdGVXaW5uZXIiLCJzcXVhcmVzIiwibGluZXMiLCJpIiwibGVuZ3RoIiwiYSIsImIiLCJjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFLCtEQUFlQSxJQUFmOztBQUVBLFNBQVNDLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDO0FBQ2hDLFFBQU1DLEtBQUssR0FBRyxDQUNaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFksRUFFWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZZLEVBR1osQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FIWSxFQUlaLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBSlksRUFLWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUxZLEVBTVosQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FOWSxFQU9aLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBUFksRUFRWixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQVJZLENBQWQ7O0FBVUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUNFLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ3JDLFVBQU0sQ0FBQ0UsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsSUFBWUwsS0FBSyxDQUFDQyxDQUFELENBQXZCOztBQUNBLFFBQUlGLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFQLElBQWNKLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFQLEtBQWVKLE9BQU8sQ0FBQ0ssQ0FBRCxDQUFwQyxJQUEyQ0wsT0FBTyxDQUFDSSxDQUFELENBQVAsS0FBZUosT0FBTyxDQUFDTSxDQUFELENBQXJFLEVBQTBFO0FBQ3hFLGFBQU9OLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFkO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPLElBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTJjNWJiYzMwYTg1ODE0MGI2OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbi8qaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG5mdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3F1YXJlXCIgb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAge3Byb3BzLnZhbHVlfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfVxyXG4gIFxyXG4gIGNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlclNxdWFyZShpKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNxdWFyZVxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc3F1YXJlc1tpXX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljayhpKX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgxKX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDIpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMyl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg0KX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDUpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNil9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg3KX1cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGhpc3Rvcnk6IFt7XHJcbiAgICAgICAgICAgIHNxdWFyZXM6IEFycmF5KDkpLmZpbGwobnVsbClcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgc3RlcE51bWJlcjogMCxcclxuICAgICAgICAgIHhJc05leHQ6IHRydWUsXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhpKSB7XHJcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwTnVtYmVyICsgMSk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W2hpc3RvcnkubGVuZ3RoIC0gMV07XHJcbiAgICAgIGNvbnN0IHNxdWFyZXMgPSBjdXJyZW50LnNxdWFyZXMuc2xpY2UoKTtcclxuICAgICAgaWYgKGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB8fCBzcXVhcmVzW2ldKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHNxdWFyZXNbaV0gPSB0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTyc7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGhpc3Rvcnk6IGhpc3RvcnkuY29uY2F0KFt7XHJcbiAgICAgICAgICBzcXVhcmVzOiBzcXVhcmVzXHJcbiAgICAgICAgfV0pLFxyXG4gICAgICAgIHN0ZXBOdW1iZXI6IGhpc3RvcnkubGVuZ3RoLFxyXG4gICAgICAgIHhJc05leHQ6ICF0aGlzLnN0YXRlLnhJc05leHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGp1bXBUbyhzdGVwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6IHN0ZXAsXHJcbiAgICAgICAgICAgIHhJc05leHQ6IChzdGVwICUgMikgPT09IDAsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbdGhpcy5zdGF0ZS5zdGVwTnVtYmVyXTtcclxuICAgICAgICBjb25zdCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoY3VycmVudC5zcXVhcmVzKTtcclxuICBcclxuICAgICAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubWFwKChzdGVwLCBtb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBtb3ZlID9cclxuICAgICAgICAgICAgICdHbyB0byBtb3ZlICMnICsgbW92ZSA6XHJcbiAgICAgICAgICAgICAnR28gdG8gZ2FtZSBzdGFydCc7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXttb3ZlfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuanVtcFRvKG1vdmUpfT57ZGVzY308L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0dXM7XHJcbiAgICAgICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSAnV2lubmVyOiAnICsgd2lubmVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9ICdOZXh0IHBsYXllcjogJyArICh0aGlzLnN0YXRlLnhJc05leHQgPyAnWCcgOiAnTycpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYW1lLWJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmRcclxuICAgICAgICAgICAgICAgIHNxdWFyZXM9e2N1cnJlbnQuc3F1YXJlc31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhpKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntzdGF0dXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8b2w+e21vdmVzfTwvb2w+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgXHJcbiAgLypSZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8R2FtZSAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuICApOyovXHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgR2FtZSBcclxuICBcclxuICBmdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykge1xyXG4gICAgY29uc3QgbGluZXMgPSBbXHJcbiAgICAgIFswLCAxLCAyXSxcclxuICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICBbNiwgNywgOF0sXHJcbiAgICAgIFswLCAzLCA2XSxcclxuICAgICAgWzEsIDQsIDddLFxyXG4gICAgICBbMiwgNSwgOF0sXHJcbiAgICAgIFswLCA0LCA4XSxcclxuICAgICAgWzIsIDQsIDZdLFxyXG4gICAgXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XHJcbiAgICAgIGlmIChzcXVhcmVzW2FdICYmIHNxdWFyZXNbYV0gPT09IHNxdWFyZXNbYl0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tjXSkge1xyXG4gICAgICAgIHJldHVybiBzcXVhcmVzW2FdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==