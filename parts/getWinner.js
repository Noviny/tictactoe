var getWinner = function () {
	if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
		if(board[0][0] === player) {
			console.log(player + ' has won the game');
		}
	}
	if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
		if(board[0][0] === player) {
			console.log(player + ' has won the game');
		}
	}
	if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
		if(board[2][0] === player) {
			console.log(player + ' has won the game');
		}
	}
	if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
		if(board[0][0] === player) {
			console.log(player + ' has won the game');
		}
	}
	if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
		if(board[0][1] === player) {
			console.log(player + ' has won the game');
		}
	}
	if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
		if(board[0][2] === player) {
			console.log(player + ' has won the game');
		}
	}
	if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
		if(board[0][0] === player) {
			console.log(player + ' has won the game');
		}
	}
	if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
		if(board[0][2] === player) {
			console.log(player + ' has won the game');
		}
	}
}


// Showing off 'for' loop
var getWinnerComplex = function (player) {
	//Add a for to iterate the column
	//Within that have another for to iterate the rows
	console.log('checking for winner');
	for (var i = 0; i < board.length; i++) {
		if (( board[i][0] === board[i][1] ) &&
		( board[i][0] === board[i][2] ) && ( board[i][0] === player ) ) {
			console.log(player + ' has won the game');
		}
	};
	for (var i = 0; i < board[0].length; i++) {
		if ( ( board[0][i] === board[1][i] ) &&
		( board[0][i] === board[2][i] ) && ( board[0][i] === player ) ) {
			console.log(player + ' has won the game');
		}
	};
}

const getWinnerES6 (player) {

}
