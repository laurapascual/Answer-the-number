'use strict';

const btnEl = document.querySelector('.js-btn');
const choiceEl = document.querySelector('.js-choice');
const clueEl = document.querySelector('.js-clue');
const attemptsEl = document.querySelector('.js-attempts');

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}



btnEl.addEventListener('click', handleBtnClick);