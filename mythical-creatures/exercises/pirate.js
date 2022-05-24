class Pirate {
  constructor(pirate, job) {
    this.name = pirate;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
  }

// robShip runs 5 times
// on 6th time,
  // pirate booty does not increase
  // pirate curse turns true
  // robShip returns "string'

  robShip() {
    if (this.booty < 500) {
      this.booty += 100;
      return 'YAARRR!'
    } else if (this.booty >= 500) {
      this.booty === 500;
      this.cursed = true;
      return "ARG! I\'ve been cursed!"
    }
  }

// if this.booty has a value of 500, then subtract 300 to return 200
// and lift curse from true to false

  liftCurse() {
    if (this.booty === 500) {
      this.booty = this.booty - 300;
      this.cursed = false;
      return 'Your curse has been lifted!'
    } else if (this.booty < 500) {
      return "You don\'t need to lift a curse!"
    }
  }
}

module.exports = Pirate;
