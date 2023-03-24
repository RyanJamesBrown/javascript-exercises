const convertToCelsius = function(temperature) {
    if(isNaN(temperature)){return "ERROR"};

    let celciustemp = ((temperature -32) * (5/9));
    let roundedtemp = Math.round(celciustemp * 10) / 10;

    return roundedtemp;
};

const convertToFahrenheit = function(temperature) {
  if(isNaN(temperature)){return "ERROR"};

  let farenheighttemp = ((temperature * 9/5)+32);
  let roundedtemp = Math.round(farenheighttemp * 10) / 10

  return roundedtemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
