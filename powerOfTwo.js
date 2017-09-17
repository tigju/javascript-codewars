// Write a function powersOfTwo which will return list of all powers of 2 from 0 to n (where n is an exponent).

// E.g:
// n = 0 -> 2^0 -> [1]
// n = 1 -> 2^0, 2^1 -> [1,2]
// n = 2 -> 2^0, 2^1, 2^2 -> [1,2,4]
// Test Passed: Value == '[1]'
// ✘ Expected: '[1, 2]', instead got: '[1, 1]'
// ✘ Expected: '[1, 2, 4, 8, 16]', instead got: '[1, 4, 16, 64, 256]'

function powersOfTwo(n){
var arr = [];
for (var i = 0; i <= n; i++){
   arr.push(2 ** i);
  }
  return arr;
}

powersOfTwo(4);