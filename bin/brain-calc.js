#!/usr/bin/env node

import { greetUser, goodbyeUser } from '../src/index.js';
import calcGame from '../src/calc-game.js';

const name = greetUser();
const result = calcGame();
console.log(goodbyeUser(result, name));