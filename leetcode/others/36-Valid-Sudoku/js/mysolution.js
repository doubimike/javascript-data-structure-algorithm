/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 11:42:58
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 14:29:32
 */
// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


// A partially filled sudoku which is valid.

// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 思路
// 用编程语言翻译出数独的规则？可能会用到map这种结构吧
// 难点  如何获取 一个小方块的数字 ij 的控制很重要
var isValidSudoku = function(board) {

	// 先判断横向列

	for (var i = 0; i < 9; i++) {
		var map = {}
		for (var j = 0; j < 9; j++) {
			var content = board[i][j]
			if (content !== '.') {
				if (!map[content]) {
					map[content] = content
				} else {
					return false
				}
			}
		}
	}

	// 然后是纵向

	for (var i = 0; i < 9; i++) {
		var map = {}
		for (var j = 0; j < 9; j++) {
			var content = board[j][i]
			if (content !== '.') {
				if (!map[content]) {
					map[content] = content
				} else {
					return false
				}
			}
		}
	}

	// 然后是3*3x小格子
	// 一个格子为一次循环
	for (var i = 0; i < 9; i++) {
		var map = {}
		for (var j = 0; j < 9; j++) {
			// console.log('i->', i)
			// console.log('j->', j)
			// console.log('j % 3 + 3 * i ->', j % 3 + 3 * i)
			// console.log('parseInt(j / 3) + 3 * (parseInt(i / 3))->', parseInt(j / 3) + 3 * (parseInt(i / 3)))
			var content = board[j % 3 + 3 * (i % 3)][parseInt(j / 3) + 3 * (parseInt(i / 3))]
			if (content !== '.') {
				if (!map[content]) {
					map[content] = content
				} else {
					return false
				}
			}
		}
	}

	return true

};

var arr = [
	[".", "8", "7", "6", "5", "4", "3", "2", "1"],
	["2", ".", ".", ".", ".", ".", ".", ".", "."],
	["3", ".", ".", ".", ".", ".", ".", ".", "."],
	["4", ".", ".", ".", ".", ".", ".", ".", "."],
	["5", ".", ".", ".", ".", ".", ".", ".", "."],
	["6", ".", ".", ".", ".", ".", ".", ".", "."],
	["7", ".", ".", ".", ".", ".", ".", ".", "."],
	["8", ".", ".", ".", ".", ".", ".", ".", "."],
	["9", ".", ".", ".", ".", ".", ".", ".", "."]
]

console.log(isValidSudoku(arr))