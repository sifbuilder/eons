module.exports = {
	test:test
};

function test () {

  const d3 = require('./d3-require.js');

  d3.require("d3-array").then(d3 => {
    console.log(d3.range(100));
  });
  d3.require("d3-array", "d3-color").then(d3 => {
    console.log(d3.range(360).map(h => d3.hsl(h, 1, 0.5)));
  });
  d3.require("d3-array@1").then(d3 => {
    console.log(d3.range(100));
  })
  
}
