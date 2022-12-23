#!/usr/bin/env node

import readlineSync from 'readline-sync';
import welcomeToTheBrainGames from '../src/cli.js';

const yourName = welcomeToTheBrainGames();

console.log('Answer "yes" if the number is even, otherwise say "no".');

let i = 0;

while (i < 3) {
  const number = Math.round(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const realAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (realAnswer === answer) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}').`);
    console.log(`Let's try again, ${yourName}!`);
    break;
  }
}
if (i === 3) {
  console.log(`Congratulations, ${yourName}`);
}
