class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.meals = 0
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

//return false boolean at 4 +
//track # of times it eats > once count reaches 3 > reassign this.hungry to False
  eat() {
    ++this.meals
    if (this.meals >= 3) {
      this.hungry = false;
    }
  }
}



module.exports = Dragon;



// use decrement -- operator , use --x returns decrement value AFTER decrementing

  //     {
  //   if (this.meals <= 3) {
  //     return this.hungry = true
  //   } else {
  //     return this.hungry = false
  //   }
  // }
    // for (var i = 0; i < this.meals.length; i++) {
    //   return
    //   if (this.meals < 4) {
    //     return this.hungry = true
    //   } else {
    //     return this.hungry = false
    //   }
    // }
    //
    // this.meals
// }
    //   if (this.meals < 4) {
    //   return true
    // } else {
    //   return false
