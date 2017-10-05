function duplicateCount(text){
  var str = text.toLowerCase();
  var newStr ='';
  var diffStr = '';
  for(var i = 0; i < str.length; i++) {
    if(newStr.indexOf(str[i]) === -1) {
      newStr+=str[i];
    } else if(diffStr.indexOf(str[i]) === -1) {
      diffStr+=str[i];
    }
 }
  if(diffStr.length == 0) {
    return diffStr.length + " no characters repeats more than once"
  } else if(diffStr.length > 1) {
    return diffStr.length + " # " + diffStr.split('').join(" and ");
  } else {
    return diffStr.length + " # " + diffStr;
  }
}

duplicateCount('trwww22wwww'); 