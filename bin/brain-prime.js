#!/usr/bin/env node

import { greetUser, goodbyeUser } from '../src/index.js';
import primeGame from '../src/games/prime-game.js';

const name = greetUser();
const result = primeGame();
console.log(goodbyeUser(result, name));
