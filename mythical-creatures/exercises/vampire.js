class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.drinks = 0;
    this.ouncesDrank = 0;
  }

  drink() {
    this.drinks = this.ouncesDrank += 10
    console.log(this.drinks)
    if (this.drinks >= 1) {
      this.thirsty = false;
    console.log(this.thirsty)
    }
  }

}




module.exports = Vampire;
