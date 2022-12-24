#!/usr/bin/env node

import gameInit from '../../src/index.js';
import getRandomNumber from '../../src/math.js';

const gameTutorial = ('Find the greatest common divisor of given numbers.');

const gameLogic = () => {
  const firstNumber = getRandomNumber(100) + 1;
  const secondNumber = getRandomNumber(100) + 1;
  const roundQuestion = `${firstNumber} ${secondNumber}`;

  let x = firstNumber;
  let y = secondNumber;
  while (x !== y) {
    if (x > y) {
      [x, y] = [y, x];
    }
    y -= x;
  }
  const roundRealAnswer = x;

  return [roundQuestion, roundRealAnswer];
};

gameInit(gameTutorial, gameLogic);
