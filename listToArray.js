function listToArray(list) {
var arr = [];
  function rec(obj){
    for(var key in obj){
      if(typeof obj[key] == "object"){
        rec(obj[key]);
      } else {
        arr.push(obj[key]);
      }
    }
  }
rec(list);
return arr;
}


var list1 = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
var list2 = {value: "foo", next: {value: "bar", next: null}};

listToArray(list1);