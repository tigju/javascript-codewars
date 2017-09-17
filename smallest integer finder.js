
  function findSmallestInt(args) {
    
    var smallInt = args[0];
    
    for(var i =0; i < args.length; i++){
      if(args[i] <= smallInt){
    	smallInt = args[i];
      }
    } 
    return smallInt;   
  }

findSmallestInt([3,4,5])