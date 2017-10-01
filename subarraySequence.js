var maxSequence = function(arr){
  total_max = arr[0];
  current_max = arr[0];
  if(arr.length == 0) {
     return total_max = 0;
    }
  for(var i = 1; i < arr.length; i++){
    current_max = Math.max(arr[i], current_max + arr[i])
    if(current_max > total_max){
      total_max = current_max;
    }
  }
  return total_max;
}