'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => document.querySelector('.message').textContent = message;

document.querySelector('.again').addEventListener('click',function(){
  secretNumber = Math.trunc(Math.random()*20)+1;  //reset the number
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})
document.querySelector('.check').addEventListener('click',function(){
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    //no input
   displayMessage('⛔ NO NUMBER');
  }
  else if(guess === secretNumber){
    //player has won
    displayMessage('🎉 CORRECT NUMBER');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  else if(guess > secretNumber || guess < secretNumber){
    if(guess > secretNumber){
      displayMessage('📈 Too high')
    }
    else if(guess < secretNumber){
     displayMessage('📉 Too low')
    }
    if(score>1){
    score --;
    document.querySelector('.score').textContent = score;
    }
    else{
      //too low
     displayMessage('😞 You lost the game');
      document.querySelector('body').style.backgroundColor = '#B80F0A';
    }
  }
})