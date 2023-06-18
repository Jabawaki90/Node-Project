const superHero = require("./super-hero");

console.log('getName', superHero.getName());
superHero.setName('sasuke');
console.log('getName', superHero.getName());

const newSuperHero = require("./super-hero");
console.log('getName', newSuperHero.getName());

const math = require('./math');
console.log('addition ', math.add(10,6));
console.log('substract ', math.substract(10,6));

require("./iife")
require('./object-reference');


