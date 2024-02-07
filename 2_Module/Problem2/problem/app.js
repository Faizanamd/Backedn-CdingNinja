// app.js - our main application file
// const math = require("./math.js");
import * as mathModule from './math.js';

const nums = [1, 2, 3, 4, 5];
console.log(`The sum is ${mathModule.sum(nums)}`);
console.log(`The mean is ${mathModule.mean(nums)}`);


