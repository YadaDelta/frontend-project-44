#!/usr/bin/env node

import gameInit from '../../src/index.js';
import getRandomNumber from '../../src/math.js';

const gameTutorial = ('Answer "yes" if given number is prime, otherwise say "no".');

const gameLogic = () => {
  const roundQuestion = getRandomNumber(100);
  let i = 2;
  let numberOfDivisibles = 0;
  while (i <= roundQuestion / 2) {
    if (roundQuestion % i === 0) {
      numberOfDivisibles += 1;
    }
    i += 1;
  }
  const roundRealAnswer = numberOfDivisibles > 0 ? 'no' : 'yes';
  return [roundQuestion, roundRealAnswer];
};

gameInit(gameTutorial, gameLogic);
