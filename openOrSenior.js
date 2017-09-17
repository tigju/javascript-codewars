function openOrSenior(data){
  var arr = [];
  var age = 55;
  var handicap = 7;
  
  for(var i = 0; i<data.length; i++){
    if(data[i][0] >= age && data[i][1] > handicap) {
      arr.push("Senior");
    } else {
      arr.push("Open");
    }
  }
  return arr;
}

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])