#!/usr/bin/env node

import gameInit from '../../src/index.js';
import getRandomNumber from '../../src/math.js';

const gameTutorial = ('Find the greatest common divisor of given numbers.');

const gameLogic = () => {
  const maxNumber = 100;
  const safeBuffer = 1;

  const firstNumber = getRandomNumber(maxNumber) + safeBuffer;
  const secondNumber = getRandomNumber(maxNumber) + safeBuffer;
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
