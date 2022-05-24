class Hobbit {
  constructor(hobbit){
    this.name = hobbit.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
// assign this.hasRing to false from the beginning bc it is more likely to be
// false than true (there is only 1 frodo but there are many hobbits)
    this.hasRing = false
  }

  celebrateBirthday() {
    ++this.age
    if (this.age >= 33 && this.age <= 100) {
      this.adult = true
    } else if (this.age >= 101) {
      this.old = true
  }
}
//use else if to add a second conditional.
//you can also rewrite celebrateBirthday function to begin with
//this.age >= 101 because anything past 101 value  will always be true
//whereas lesser values must be manipulated more. this way you can set
//subsequent conditionals that must be manipulated easier


//'frodo' is the only value that should be true so start with a false
// property value [line 8]
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!"
    } else {
      return "You can\'t have it!"
    }
  }
}



module.exports = Hobbit;
