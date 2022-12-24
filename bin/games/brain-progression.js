#!/usr/bin/env node

import gameInit from '../../src/index.js';
import getRandomNumber from '../../src/math.js';

const gameTutorial = ('What number is missing in the progression?');

const gameLogic = () => {
  const maxNumber = 10;
  const safeBuffer = 5;

  const progressionArray = [];
  const firstElement = getRandomNumber(maxNumber);
  const amountOfElements = getRandomNumber(maxNumber) + safeBuffer;
  const incrementalAmount = getRandomNumber(maxNumber);
  for (let i = 0; i < amountOfElements; i += 1) {
    progressionArray.push(firstElement + incrementalAmount * i);
  }
  const missingLink = getRandomNumber(amountOfElements);
  const roundRealAnswer = progressionArray[missingLink];
  progressionArray[missingLink] = '..';
  const roundQuestion = progressionArray.join(' ');
  return [roundQuestion, roundRealAnswer];
};

gameInit(gameTutorial, gameLogic);
