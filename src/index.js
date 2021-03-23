import { getUserAnswer, getUserName } from './cli.js';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = getUserName();
  console.log(`Hello, ${name}`);
  return name;
};

const goodbyeUser = (result, name) => {
  const congrats = `Congratulations, ${name}!`;
  const tryagain = `Let's try again, ${name}!`;
  return result ? congrats : tryagain;
};

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const gamePlay = (gameDataObj) => {
  console.log(gameDataObj.gameQuestion);
  for (let i = 0; i < 3; i += 1) {
    const question = gameDataObj[i][0];
    console.log(`Question: ${question}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = gameDataObj[i][1];
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return false;
    }
  }
  return true;
};

export {
  greetUser, gamePlay, goodbyeUser, getRandomInt,
};
