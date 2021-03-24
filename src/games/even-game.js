import { gamePlay, getRandomInt } from '../index.js';

const evenGame = () => {
  const gameDataObj = {
    gameQuestion: 'Answer "yes" if the number is even, otherwise answer "no"',
  };
  const isEven = (number) => number % 2 === 0;

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    const correctAnswer = (isEven(number)) ? 'yes' : 'no';
    gameDataObj[i] = [number, correctAnswer];
  }

  const result = gamePlay(gameDataObj);
  return result;
};

export default evenGame;
