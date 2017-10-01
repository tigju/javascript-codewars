function productFib(prod){
var fibArr = [0,1];
var temp;

  for(var i = 0; i <= prod; ){
    if(i === prod) {
      return [fibArr[0], fibArr[1], true];
    } else {
      temp = fibArr[0] + fibArr[1];
      fibArr[0] = fibArr[1];
      fibArr[1] = temp;
      i = fibArr[0] * fibArr[1];
    }  
  }
  return [fibArr[0], fibArr[1], false];
}