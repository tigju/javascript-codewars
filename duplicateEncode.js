function duplicateEncode(word){
  
  var letters = word.toLowerCase().split('');
  
  var count = letters.reduce(function(count, letter) { 
    count[letter] = (count[letter] || 0) + 1;
    return count;   
  }, {});
   
  return letters.map(function(letter){
    // if(count[letter] > 1) {
    //   return ')';
    // } else {
    //   return '('
    // }
    return count[letter] > 1 ? ')' : '(';
  }).join('');
}

duplicateEncode('Success');