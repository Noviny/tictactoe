var result = '';

var takeTurn = function (player, row, column) {
	if ( board[row][column] === ''  ) {
		board[row][column] = [player];
	} else {
		console.error('invalid turn');
	}
};
