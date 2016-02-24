// BASIC
// *onclick get user choice
// *get random computer choice
// *compare choices to determine winner
// *display user and computer choice and who won [Inline]
// *increase Score of winner
// *on click of start over reset Scores

// BONUS
// display user and computer choice and who won [Popup Module]
// after 3 games, show overall winner
// absolute position

var userChoice;
var computerChoice;
var result;
var userScore = 0;
var computerScore = 0;

function getComputerChoice() {
	var plays = ['rock','paper','scissors'];
	var randNum = Math.floor(Math.random()*plays.length);
	var play = plays[randNum];
	return play;
}

// function getWinner (){
// 	if (userChoice === 'Rock' && computerChoice === 'Paper'){
// 		alert('You Lost');
// 	}
// 	else if (userChoice === 'Rock' && computerChoice === 'Scissors'){
// 		alert('You Lost');
// 	}
// 	else if (userChoice === 'Rock' && computerChoice === 'Rock'){
// 		alert('Draw');
// 	}
// }

function getWinner(){
	if (userChoice === 'rock') {
		if (computerChoice === 'rock') {
				result ='Tie';
			}
		else if (computerChoice === 'paper') {
				result ='You Lose';
			}
		else if (computerChoice === 'scissors') {
				result ='You Win';
			}
	}
	else if (userChoice === 'paper') {
		if (computerChoice === 'rock') {
				result ='You Win';
			}
		else if (computerChoice === 'paper') {
				result ='Tie';
			}
		else if (computerChoice === 'scissors') {
				result ='You Lose';
			}
	}
	else if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
				result ='You Lose';
			}
		else if (computerChoice === 'paper') {
				result ='You Win';
			}
		else if (computerChoice === 'scissors') {
				result ='Tie';
			}
	}
	console.log(result);
	if (result === 'You Win'){
		userScore = userScore +1;
		$('#humanScore').html(userScore);
	}
	else if (result === 'You Lose'){
		// computerScore = computerScore +1;
		computerScore++;
		$('#computerScore').html(computerScore);
	}
	$('#status').html('You chose '+userChoice+'. Computer chose '+computerChoice+'. '+result+'.');
	if (userScore === 3 || computerScore === 3) {
		if (userScore === 3) {
		alert('Game Over! You beat the computer');
		}
		else if (computerScore === 3){
		alert('Game Over! The computer beat you');
		}
		reset();
	}

}


$('.choices button').on('click',function(){
		userChoice = $(this).find('.type').html();
		userChoice = userChoice.toLowerCase();
		computerChoice = getComputerChoice();
		console.log(userChoice);
		console.log(computerChoice);
		getWinner();
	});

function reset (){
	$('#humanScore').html(0);
	$('#computerScore').html(0);
	$('#status').html('');
}

$('#reset').on('click',reset);


