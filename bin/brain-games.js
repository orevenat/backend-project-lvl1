#!/usr/bin/env node

import { welcome, getUserName } from '../src/cli.js';

welcome();
const userrName = getUserName();
console.log(`Hello, ${userrName}!`);
