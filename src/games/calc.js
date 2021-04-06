import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'What is the result of the expression?';

const gameData = () => {
  const maxRandomNumber = 10;
  const num1 = getRandomInt(maxRandomNumber);
  const num2 = getRandomInt(maxRandomNumber);
  const operands = ['*', '+', '*'];
  const index = getRandomInt(operands.length);
  const operand = operands[index];
  const question = `${num1} ${operand} ${num2}`;
  let answer;

  if (operand === '*') {
    answer = String(num1 * num2);
  }
  if (operand === '+') {
    answer = String(num1 + num2);
  }
  if (operand === '-') {
    answer = String(num1 - num2);
  }

  return [question, answer];
};

export default () => gameEngine(gameData, gameRule);
