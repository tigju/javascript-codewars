var uniqueInOrder=function(iterable){
	var arr = [];
	var last = '';
  for(var i = 0; i<iterable.length; i++) {
  		if(iterable[i] != last){
  				arr.push(iterable[i]);
  				last = iterable[i];
  		}
  }
  return arr;
}

uniqueInOrder('wwerwer121212133333');