class Person {
  constructor(person) {
    this.name = person;
    this.mood = 'frightened';
  }

  changeMood() {
    this.mood = 'relieved';
  }
}

module.exports = Person;
