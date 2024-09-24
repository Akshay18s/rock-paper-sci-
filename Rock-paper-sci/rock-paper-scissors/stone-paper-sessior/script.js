
const score = {
   win: 0,
   looses: 0,
   ties: 0
};

function domscore() {
   document.querySelector('.js-score').innerHTML = `win: ${score.win}, looses: ${score.looses}, ties: ${score.ties}`;
}

function playGame(playerMove) {
   const randomNumber = Math.random();
   let computerMove = '';

   if (randomNumber < 1 / 3) {
      computerMove = 'rock';
   } else if (randomNumber < 2 / 3) {
      computerMove = 'paper';
   } else {
      computerMove = 'scissors';
   }

   let result = '';

   if (playerMove === computerMove) {
      result = 'Tie';
   } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
   ) {
      result = 'You Won';
      score.win++;
   } else {
      result = 'You Lost';
      score.looses++;
   }

   localStorage.setItem('score', JSON.stringify(score));
   domscore();
   document.querySelector('.js-result').innerHTML = result;
   document.querySelector('.js-move').innerHTML = `You picked ${playerMove} - Computer picked ${computerMove}`;
}

function resetScore() {
   score.win = 0;
   score.looses = 0;
   score.ties = 0;
   localStorage.setItem('score', JSON.stringify(score));
   domscore();
   document.querySelector('.js-reset').innerHTML = 'Score reset';
}
