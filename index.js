/*
1. import coffee

const coffee = require('./lib/coffee');
 
console.log(coffee);
*/

/*
2.import beberapa module berupa class
*/

const Tiger = require("./lib/tiger");
const Wolf = require("./lib/wolf");

const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);