import { gamePlay, getRandomInt } from './index.js';

const calcGame = () => {
  const gameDataObj = {
    gameQuestion: 'What is the result of the expression?',
  };
  let correctAnswer;

  for (let i = 0; i < 3; i += 1) {
    const firstNumber = getRandomInt(10);
    const secondNumber = getRandomInt(10);
    const operands = ['*', '+', '*'];
    const index = getRandomInt(3);
    const operand = operands[index];
    const expression = `${firstNumber} ${operand} ${secondNumber}`;
    if (operand === '*') {
      correctAnswer = String(firstNumber * secondNumber);
    }
    if (operand === '+') {
      correctAnswer = String(firstNumber + secondNumber);
    }
    if (operand === '-') {
      correctAnswer = String(firstNumber - secondNumber);
    }
    gameDataObj[i] = [expression, correctAnswer];
  }

  const result = gamePlay(gameDataObj);
  return result;
};

// const isEven = (number) => number % 2 === 0;
// const correctAnswer = (isEven(number)) ? 'yes' : 'no'

export default calcGame;
