import readlineSync from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const getUserAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export { getUserName, getUserAnswer, welcome };
