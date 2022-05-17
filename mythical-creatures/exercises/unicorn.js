class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
  } else {
    this.color = color;
    }
  }

  isWhite() {
    if (this.color !== 'white') {
      return false
    }
  }

  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;

// 1. read the tests
// 2. ask yourself if it's going to fail and why
// 3. run the test
// 4. make it pass
