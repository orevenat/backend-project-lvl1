#!/usr/bin/env node

import { greetUser, goodbyeUser } from '../src/index.js';
import evenGame from '../src/games/even-game.js';

const name = greetUser();
const result = evenGame();
console.log(goodbyeUser(result, name));
