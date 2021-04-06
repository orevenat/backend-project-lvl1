import gamePlay from '../index.js';
import getRandomInt from '../utils.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';








// const gcdGame = () => {
//   const gameDataObj = {};
//   gameDataObj.gameQuestion = 'Find the greatest common divisor of given numbers.';

//   const gameLevel = 20;
//   const gcd = (a, b) => {
//     if (b === 0) {
//       return a;
//     }
//     return gcd(b, a % b);
//   };

//   for (let i = 0; i < 3; i += 1) {
//     const num1 = getRandomInt(gameLevel);
//     const num2 = getRandomInt(gameLevel);
//     const numPair = `${num1} ${num2}`;
//     const correctAnswer = String(gcd(num1, num2));
//     gameDataObj[i] = [numPair, correctAnswer];
//   }

//   const result = gamePlay(gameDataObj);
//   return result;
// };

// export default gcdGame;
