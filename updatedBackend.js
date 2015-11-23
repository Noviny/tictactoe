//The original runscript in no way took into account the front end.
//This version hopes to neaten the code so it takes useful inputs.

var board = [ 
	[ ["_"],["_"],["_"] ],
	[ ["_"],["_"],["_"] ],
	[ ["_"],["_"],["_"] ],
	 ];


//This should be generated just from what 
var takeTurn = function (player, row, column) {
	if ( board[row-1][column-1] == "_"  ) {
	board[row-1][column-1] = [player];
	} else {
		return "invalid turn"
	}
};