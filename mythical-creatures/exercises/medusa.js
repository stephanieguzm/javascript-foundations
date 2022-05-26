var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
gazeAtVictim(victim) {
  var victim = new Statue(victim.name);
  if (this.statues.length < 3) {
    this.statues.push(victim);
  } else if (this.statues.length >= 3) {
  var person = new Person(this.statues.shift().name);
  this.statues.push(victim);
  person.changeMood();
  return person
    }
  }
}

module.exports = Medusa;
