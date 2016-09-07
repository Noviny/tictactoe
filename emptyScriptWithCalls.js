var setPlayerName = function (player, name) {

}

var takeTurn = function (player, row, column) {

}

var checkIfWinner = function () {

}

var resetGame = function () {

}

var player1 = 'X';
var player2 = 'O';

setPlayerName(player1, 'Mario');
setPlayerName(player2, 'Luigi');

var board = [
	[   '',    'Mario', 'Mario' ],
	[   '',    'Luigi',   ''    ],
	[ 'Luigi',  '',       ''    ],
];

takeTurn(player1, 0, 0);

checkIfWinner(player1)
