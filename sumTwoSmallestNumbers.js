function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort();
  var min1 = Math.min(...numbers);
  var index = numbers.indexOf(min1);
  numbers.splice(index, 1);
  var min2 = Math.min(...numbers);
  return min1 + min2;
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22])
sumTwoSmallestNumbers([15, 28, 4, 2, 43])