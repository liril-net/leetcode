//
// Copyright (c) 2018 by liril.net. All Rights Reserved.
//

const check = (board, i, j, n) => {
  const startRow = Math.floor(i / 3) * 3;
  const startCol = Math.floor(j / 3) * 3;
  for (let k = 0; k < 9; k++) {
    if (board[i][k] === n) return false;
    if (board[k][j] === n) return false;
    if (board[startRow + Math.floor(k / 3)][startCol + k % 3] === n)
      return false;
  }
  return true;
};

const dfs = (board, d) => {
  if (d === 81) return true;
  let i = Math.floor(d / 9);
  let j = d % 9;
  if (board[i][j]) return dfs(board, d + 1);

  for (let k = 1; k < 10; k++) {
    if (check(board, i, j, k)) {
      board[i][j] = k;
      if (dfs(board, d + 1)) return true;
      board[i][j] = 0;
    }
  }

  return false;
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board[i][j] = parseInt(board[i][j] === '.' ? '0' : board[i][j]);
    }
  }

  dfs(board, 0);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      board[i][j] = board[i][j] + '';
    }
  }
};

const print = board => board.forEach(row => console.log(row));

const board = [
  ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
  ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
  ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
  ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
  ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '2', '7', '5', '9', '.', '.']
];
print(board);
solveSudoku(board);
print(board);
