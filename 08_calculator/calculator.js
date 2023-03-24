const add = function(a, b) {
	if(isNaN(a) || isNaN(b)){return "ERROR"};

  return a + b;

};

const subtract = function(a, b) {

  if(isNaN(a) || isNaN(b)){return "ERROR"};

  return a - b;
	
};

const sum = function(array) {

  let sum = 0;

  array.forEach(item => {
    sum = sum + item;
  })

  return sum;
	
};

const multiply = function(array) {
  //if(isNaN(a) || isNaN(b)){return "ERROR"};
  let result = 1;
  array.forEach(derp =>{
    result = derp * result;
  }
  )
  return result;

};

const power = function(a,b) {
  if(isNaN(a) || isNaN(b)){return "ERROR"};

  return Math.pow(a,b);
	
};

const factorial = function(a) {
	
  if(a == 0){return 1};
  let factorial = 1;
  for(i=a;i>0;i--){
    factorial = factorial * i;
  }

  return factorial;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
