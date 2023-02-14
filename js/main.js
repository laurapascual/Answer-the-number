'use strict';

const btnEl = document.querySelector('.js-btn');
const choiceEl = document.querySelector('.js-choice');
const clueEl = document.querySelector('.js-clue');
const attemptsEl = document.querySelector('.js-attempts');
const randomNumber = getRandomNumber(100);
let sumAttempts = 0;

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
console.log('Mi número aleatorio es: ' + randomNumber);

function printClue(message) {
    clueEl.value = message;
}

function printAttempts(number) {
    attemptsEl.value = number;
}

function attemptsNumber() {
    sumAttempts++;
    printAttempts(`Número de intentos: ${sumAttempts}`);
}

function handleBtnClick(event) {
    const userChoice = parseInt(choiceEl.value);
    attemptsNumber();
    if (userChoice > randomNumber && userChoice <= 100) {
        printClue('Demasiado alto');
        
    } else if (userChoice < randomNumber) {
        printClue('Demasiado bajo');
    } else if (userChoice === randomNumber) {
        printClue('Has ganado campeona!!!');
    } else {
        if(randomNumber > 1 || randomNumber < 100) {
            printClue('El número debe estar entre 1 y 100');
        }
        
    }
}


btnEl.addEventListener('click', handleBtnClick);