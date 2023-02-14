'use strict';

const btnEl = document.querySelector('.js-btn');
const choiceEl = document.querySelector('.js-choice');
const clueEl = document.querySelector('.js-clue');
const attemptsEl = document.querySelector('.js-attempts');
const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
console.log('Mi número aleatorio es: ' + randomNumber);

function printClue(message) {
    clueEl.value = message;
}

function handleBtnClick(event) {
    event.preventDefault();
    const userChoice = parseInt(choiceEl.value);

    if (userChoice > randomNumber && userChoice <= 100) {
        printClue('Demasiado alto');
        
    } else if (userChoice < randomNumber) {
        printClue('Demasiado bajo');
    } else if (userChoice === randomNumber) {
        printClue ('Has ganado campeona!!!');
    }
}


btnEl.addEventListener('click', handleBtnClick);