import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const getRandomInt = (max = 100) => Math.floor(Math.random() * Math.floor(max));

const isAnswerValid = (answer) => answer === 'yes' || answer === 'no';
const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    console.log(`Question: ${number}`);
    const correctAnswer = (isEven(number)) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if ((isAnswerValid(answer) && correctAnswer === answer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export default evenGame;
