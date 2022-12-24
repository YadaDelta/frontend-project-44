#!/usr/bin/env node

import gameInit from '../../src/index.js';
import getRandomNumber from '../../src/math.js';

const gameTutorial = ('What is the result of the expression?');

const gameLogic = () => {
  const maxNumber = 100;
  const operatorsNumber = 3;
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const operators = ['+', '-', '*'];
  const roundOperator = operators[getRandomNumber(operatorsNumber)];
  const roundQuestion = `${firstNumber} ${roundOperator} ${secondNumber}`;
  let roundRealAnswer = 0;
  switch (roundOperator) {
    case '+':
      roundRealAnswer = firstNumber + secondNumber;
      break;
    case '-':
      roundRealAnswer = firstNumber - secondNumber;
      break;
    case '*':
      roundRealAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return [roundQuestion, roundRealAnswer];
};

gameInit(gameTutorial, gameLogic);
