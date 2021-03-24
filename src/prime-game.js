import { gamePlay, getRandomInt } from './index.js';

const primeGame = () => {
  const gameDataObj = {
    gameQuestion: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
    gameDataObj[i] = [number, correctAnswer];
  }

  const result = gamePlay(gameDataObj);
  return result;
};

export default primeGame;
