const ftoc = function(tempF) {
  let output = 0;
  output = (tempF - 32) * (5/9);
  output = Math.round(output * 10) / 10
  return output;
};

const ctof = function(tempC) {
  let output = 0;
  output = tempC * (9/5) + 32;
  output = Math.round(output * 10) / 10
  return output;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
