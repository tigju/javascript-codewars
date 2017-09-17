function opposite(number) {
	if(number === 0)
	return number;
  if(number > 0){
  	number = number-(number*2);
  } else {
  	number = number+(number*(-2));
  }
  return number;
}

opposite(5);