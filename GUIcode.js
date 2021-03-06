console.log('GUI code loaded iterated');
$( document ).ready(function () {
var currentTurn = "X"
var otherTurn = "O"
	console.log('document ready');
var column = function (square) {
	if ( $(square).attr('class').indexOf("d") >= 0 ) {
		return 1;
	}
		if ( $(square).attr('class').indexOf("b") >= 0 ) {
		return 2;
	}
		if ( $(square).attr('class').indexOf("c") >= 0 ) {
		return 3;
	}
}

var row = function (square) {
	if ( $(square).attr('class').indexOf("1") >= 0 ) {
		return 1;
	}
	if ( $(square).attr('class').indexOf("2") >= 0 ) {
		return 2;
	}
	if ( $(square).attr('class').indexOf("3") >= 0 ) {
		return 3;
	}
}

	$(".square").click( function () {
		console.log('click has occurred');
		console.log('our text', $(this).children("p").text());
		if ( $(this).children("p").text() === "" ) {
			$(this).children("p").text(currentTurn);
			//The below tracks the info to the JS board
			var theRow = row(this);
			var theColumn = column(this);
			takeTurn ( currentTurn, theRow, theColumn )
			//Check the winner
			if ( getWinner() ) {
				// console.log("working");
				$("body").append("<p>Game is over. " + currentTurn + " won the game.</p>")
				$("#grid").css({display: "none"});
			}
			//This switches who's turn it is.
			var saveString = currentTurn;
			currentTurn = otherTurn;
			otherTurn = saveString;
		}
	})
})
