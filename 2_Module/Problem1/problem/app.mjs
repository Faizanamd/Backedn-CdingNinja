// Note:  Please do not change the prewritten code

// import the required module here
// const mathModule = require('./math.js');
// const Solution = () => {
//     const nums = [1, 2, 3, 4, 5];
//     // write your code here to Display the results of the calculations on the console.
//     console.log("The sum is " + mathModule.sum(nums));
//     console.log("The mean is " + mathModule.mean(nums));
// };
// Solution();
// module.exports = Solution;



// ES6 way to import module

// import * as arithmeticModuleES from './math.mjs';
// import all from './math.mjs';

// console.log(arithmeticModuleES.sub(4,3));
// console.log(arithmeticModuleES.modulo(3,4));


import {sub, modulo} from './math.mjs';
console.log(sub(4,3));
console.log(modulo(3,4));
