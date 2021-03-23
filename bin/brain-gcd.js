#!/usr/bin/env node

import { greetUser, goodbyeUser } from '../src/index.js';
import gcdGame from '../src/gcd-game.js';

const name = greetUser();
const result = gcdGame();
console.log(goodbyeUser(result, name));
