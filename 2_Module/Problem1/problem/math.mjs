// math.js - a CommonJS module for performing calculations on a set of numbers

function sum(nums) {
    return nums.reduce((total, num) => total + num, 0);
}

function mean(nums) {
    return sum(nums) / nums.length;
}

// module.exports = {
//     sum  : sum,
//     mean:mean,
// }

//2 way of export using ES6
export function sub(a,b)
{
    return a-b;
}

export function modulo(a,b)
{
    return a%b;
}