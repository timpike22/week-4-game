
$(document).ready(function() {

var crystals = {
	crystal1:
	{
	  name: "Crystal1",
	  value: 0
	},
	crystal2:
	{
	  name: "Crystal2",
	  value: 0
	},
	crystal3:
	{
	  name: "Crystal3",
	  value: 0
	},
	crystal4:
	{
	  name: "Crystal4",
	  value: 0
	}
};

var userNumber = 0;
var targetNumber = 0;


var wins = 0;
$("#wins").html("Wins: " + wins + " ");

var losses = 0;
$("#losses").html("Losses: " + losses + " ");


var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};


var startGame = function() {
	userNumber = 0;
	targetNumber = getRandom(19, 120);

	crystals.crystal1.value = getRandom(1, 12);
	crystals.crystal2.value = getRandom(1, 12);
	crystals.crystal3.value = getRandom(1, 12);
	crystals.crystal4.value = getRandom(1, 12);

	
	$("#yourNumber").html("Your number: " + userNumber + " ");
	$("#targetNumber").html("Target number: " + targetNumber + " ");
	$("#gameStatus").empty();

}; 


var status = function() {

	
	if (userNumber > targetNumber) {
		losses ++;
		$("#losses").html("Losses: " + losses + " ");
		$("#gameStatus").html("Loser! ClICK ME to try again!");
	}

	else if (userNumber === targetNumber) {
		wins ++;
		$("#wins").html("WINS: " + wins + " ");
		$("#gameStatus").html("Winner! CLICK ME to try again!");
	}
};


var addValues = function(clickedCrystal) {
	userNumber += clickedCrystal.value;
	$("#yourNumber").html("Your number: " + userNumber + " ");
	status();
	

};

startGame();

$("#gameStatus").click(function() {
	startGame();
})

$("#crystal1").click(function() {
	addValues(crystals.crystal1);
});

$("#crystal2").click(function() {
	addValues(crystals.crystal2);
});

$("#crystal3").click(function() {
	addValues(crystals.crystal3);
});

$("#crystal4").click(function() {
	addValues(crystals.crystal4);
});
});

