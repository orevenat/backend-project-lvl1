import { gamePlay, getRandomInt } from '../index.js';

const calcGame = () => {
  const gameDataObj = {
    gameQuestion: 'What is the result of the expression?',
  };
  let correctAnswer;
  const gameLevel = 10;

  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(gameLevel);
    const num2 = getRandomInt(gameLevel);
    const operands = ['*', '+', '*'];
    const index = getRandomInt(operands.length);
    const operand = operands[index];
    const expression = `${num1} ${operand} ${num2}`;
    if (operand === '*') {
      correctAnswer = String(num1 * num2);
    }
    if (operand === '+') {
      correctAnswer = String(num1 + num2);
    }
    if (operand === '-') {
      correctAnswer = String(num1 - num2);
    }
    gameDataObj[i] = [expression, correctAnswer];
  }

  const result = gamePlay(gameDataObj);
  return result;
};

export default calcGame;
