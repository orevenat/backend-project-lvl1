import gamePlay from '../index.js';
import getRandomInt from '../utils.js';

const gameQuestion = 'What number is missing in the progression?';


























// const progressionGame = () => {
//   const gameDataObj = {
//     gameQuestion: 'What number is missing in the progression?',
//   };

//   const makeProgression = (length, step) => {
//     const progression = [];
//     let member = getRandomInt();
//     for (let i = 0; i < length; i += 1) {
//       progression.push(member);
//       member += step;
//     }
//     return progression;
//   };

//   const lengthOfProgression = 10; // how many members in progression
//   const step = getRandomInt(10); // step of progression

//   for (let i = 0; i < 3; i += 1) {
//     const progression = makeProgression(lengthOfProgression, step);
//     const randomIndex = getRandomInt(progression.length - 1);
//     const correctAnswer = String(progression.splice(randomIndex, 1, '..')[0]);
//     const expression = progression.join(' ');
//     gameDataObj[i] = [expression, correctAnswer];
//   }

//   const result = gamePlay(gameDataObj);
//   return result;
// };

// export default progressionGame;
