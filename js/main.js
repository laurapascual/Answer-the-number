'use strict';

const btnEl = document.querySelector('.js-btn');
const choiceEl = document.querySelector('.js-choice');
const clueEl = document.querySelector('.js-clue');
const attemptsEl = document.querySelector('.js-attempts');
const btnReset = document.querySelector('.js-reset');
let randomNumber = getRandomNumber(100);
let sumAttempts = 0;

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}
console.log('Mi número aleatorio es: ' + randomNumber);

function printClue(message) {
    clueEl.innerHTML = message;
}

function printAttempts(number) {
    attemptsEl.innerHTML = number;
}

function attemptsNumber() {
    sumAttempts++;
    printAttempts(`Número de intentos: ${sumAttempts}`);
}

function attemptsNumberReset() {
    sumAttempts = 0;
    printAttempts(`Número de intentos: ${sumAttempts}`);
}

function handleCompare() {
    const userChoice = parseInt(choiceEl.value);
    console.log(userChoice);
    if(isNaN(userChoice)) {
        printClue('Debe introducir un número');
    } else if (userChoice > randomNumber && userChoice <= 100) {
        printClue('Demasiado alto');
    } else if (userChoice < randomNumber && userChoice >= 1) {
        printClue('Demasiado bajo');
    } else if (userChoice === randomNumber) {
        printClue('Has ganado campeona!!!');
    } else {
        printClue('El número debe estar entre 1 y 100');
    }    
}

function handleBtnClick(event) {
    handleCompare();
    attemptsNumber();
}

function handleBtnReset() {
    attemptsNumberReset();
    printClue('Pista: Escribe el número y dale a Prueba');
    randomNumber = getRandomNumber(100);
    console.log('Mi número aleatorio es: ' + randomNumber);
    choiceEl.value = "";
}

btnEl.addEventListener('click', handleBtnClick);
btnReset.addEventListener('click', handleBtnReset);