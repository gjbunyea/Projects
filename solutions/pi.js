function calcPi(num){
  var pi = 0;

  for (var k=0; k<num; k++){
    pi += (Math.pow(16,-k)) * ((4/(8*k+1)) - (2/(8*k+4)) - (1/(8*k+5)) - (1/(8*k+6)));
  }

  return pi.toString().slice(0,num+2);

}

console.log(calcPi(5));
console.log(calcPi(10));
console.log(calcPi(200));
console.log(calcPi(100000));
