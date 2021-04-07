import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameRule = 'What is the result of the expression?';

const gameData = () => {
  const maxRandomNumber = 10;
  const num1 = getRandomInt(maxRandomNumber);
  const num2 = getRandomInt(maxRandomNumber);
  const operands = ['*', '+', '*'];
  const randomIndex = getRandomInt(operands.length);
  const operand = operands[randomIndex];
  const question = `${num1} ${operand} ${num2}`;
  let answer;

  switch (operand) {
    case '*':
      answer = String(num1 * num2);
      break;
    case '+':
      answer = String(num1 + num2);
      break;
    case '-':
      answer = String(num1 - num2);
      break;
    default:
      console.log('Somthing went wrong <:>');
  }

  return [question, answer];
};

export default () => gameEngine(gameData, gameRule);
