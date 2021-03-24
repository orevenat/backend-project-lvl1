#!/usr/bin/env node

import { greetUser, goodbyeUser } from '../src/index.js';
import progressionGame from '../src/games/progression-game.js';

const name = greetUser();
const result = progressionGame();
console.log(goodbyeUser(result, name));
