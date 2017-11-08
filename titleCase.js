function titleCase(title, minorWords) {
  var str = title.toLowerCase().split(" ");
  str[0] = str[0].charAt(0).toUpperCase() + str[0].substr(1);
  if(minorWords){
  var minor = minorWords.toLowerCase().split(" ");
  for (var i = 1; i < str.length; i++) {
    for (var j = 0; j < minor.length; j++) {
      if(minor.indexOf(str[i]) == -1) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substr(1);
      } else {
        str[i] = str[i].toLowerCase();
      }
    }
  }
  } else {
    for(var k = 0; k < str.length; k++){
      str[k] = str[k].charAt(0).toUpperCase() + str[k].substr(1);
    }
  }
  return str.join(" ");
}

titleCase('the quick brown fox', 'bla the ')