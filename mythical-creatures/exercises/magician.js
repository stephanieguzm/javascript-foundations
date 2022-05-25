class Magician {
  constructor(obj) {
  this.name = `The Great ${obj.name}`;
  this.assistant = obj.assistant;
  this.favoriteAccessory = obj.clothing || 'top hat';
  this.confidencePercentage = 10;
  // console.log(obj.assistant)
  }

  performIncantation(spell) {
    return `${spell.toUpperCase()}!`
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory !== 'top hat') {
      return 'PULL DOVE FROM SLEEVE'
    } else {
      return 'PULL RABBIT FROM TOP HAT'
    }
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || this.assistant === false) {
      return "Oh no, this trick is not ready!"
    } else if (this.confidencePercentage > 100 && this.assistant === false) {
      return "Oh no, this trick is not ready!"
    } else {
      return "WOW! The magician totally just sawed that person in half!"
    }
  }
}


module.exports = Magician;
