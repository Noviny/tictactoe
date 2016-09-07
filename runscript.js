console.log('Our run script has started');

var board = [
	[ ["_"],["_"],["_"] ],
	[ ["_"],["_"],["_"] ],
	[ ["_"],["_"],["_"] ],
];

// The reverse Idea:

var player1Moves = {
	'a': [],
	'b': [],
	'c': [],
}
// push values 1 - 3 into the right array
// If array has a 3 items, if all arrays have the item 1, or if 1, 2 or 3 appears
// in all arrays OR frigging diagonals


//You should have another chance to input once you have taken a turn.
var takeTurn = function (player, row, column) {
	if ( board[row-1][column-1] === "_"  ) {
	board[row-1][column-1] = [player];
	} else {
		return "invalid turn"
	}
};

var getWinner = function () {
	//Add a for to iterate the column
	//Within that have another for to iterate the rows
	console.log('checking for winner');
	for (var i = 0; i < board.length; i++) {
		if (( board[i][0].toString() === board[i][1].toString() ) &&
		( board[i][0].toString() === board[i][2].toString() ) && ( board[i][0] != "_" ) ) {
			return true;
		}
	};
	for (var i = 0; i < board[0].length; i++) {
		if ( ( board[0][i].toString() === board[1][i].toString() ) &&
		( board[0][i].toString() === board[2][i].toString() ) && ( board[0][i]!= "_" ) ) {
			return true
		}
	};
}


// Extension problems:

var makeBoard = function (rows) {

}

var randomNum = function () {
	var number = Math.ceil(Math.random()*3);
	return number
}

var randomTurn = function (player) {
	takeTurn(player, randomNum(), randomNum())
}

// Things that you can learn writing this:
//
// What are arrays, functions, booleans, comparing 'truthiness', variables,
// returning things from functions
//
// What I need to do to make this more useful:
//  - Easy ways to run individual functions for testing purposes
//  - more logging going around
//  - Possibly more complexity?
