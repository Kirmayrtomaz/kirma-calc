const calc = (function () {

  var cache = 0;
  const sum = function(){

    let arg = Array.prototype.slice.call(arguments,0);
    let size = arg.length,
        cont = 0
        ;

    for(;cont < size;cont++){
      cache += arg[cont];

    }//function sum

    return this;
  }//sum

  var result = function(){
    return cache;

  }//function result()

  const sub = function(){};
  const increment = function(){};
  const decrement = function(){};
  const clear = function (){
      cache = 0;
      return this;
  }

  

  return{
    sum,
    sub,
    increment,
    decrement,
    value:result,
    clear
  }

})();

module.exports = calc;
