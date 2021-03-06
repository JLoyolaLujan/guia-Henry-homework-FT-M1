'use strict'

function BinarioADecimal(num) {
  var sum = 0; 
  var j = 0;
  for(var i = num.length - 1; i >= 0 ; i--) {
      sum += ((num[j++])*(2**i));
    }
  return sum;
}

function DecimalABinario(num) {
  var espacio = [];
  var nuevo;
   
  while(num >= 1) {
  nuevo = num%2;
  espacio.unshift(Math.floor(nuevo));
  num = num/2; 
  }

  return espacio.join(""); // turns the array into a string
  

  /*
the instructor suggested this during class, way clearer

  var res = "2";
  while(num !== 0) {
  res = num/2 + res;
  num = Math.floor(num/2);
  }

  return res;

  */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}