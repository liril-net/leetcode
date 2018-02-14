//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const board = [];
  const ans = [];

  const transfer = board =>
    board.map(row => {
      let r = '';
      for (let i = 0; i < n; i++) {
        if (row !== 1 << i) {
          r += '.';
        } else {
          r += 'Q';
        }
      }
      return r;
    });

  const check = row => {
    for (let i = 0; i <= row; i++) {
      for (let j = i + 1; j <= row; j++) {
        if (board[i] & board[j]) return false;
        if (board[i] > board[j]) {
          if (board[i] & (board[j] << (j - i))) return false;
        } else {
          if (board[j] & (board[i] << (j - i))) return false;
        }
      }
    }

    return true;
  };

  const dfs = row => {
    for (let i = 0; i < n; i++) {
      board[row] = 1 << i;
      if (check(row)) {
        if (row === n - 1) {
          ans.push(transfer(board));
        } else {
          dfs(row + 1);
        }
      } else {
        board[row] = 0;
      }
    }
  };

  dfs(0);

  return ans;
};

console.log(solveNQueens(2));
console.log(solveNQueens(3));
console.log(solveNQueens(4));
