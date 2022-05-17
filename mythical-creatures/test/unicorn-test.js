var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function() {

  it('should be a function', function() {
    assert.isFunction(Unicorn);
  });
//making new variable unicorn, assigned it to the return value of Unicorn class function.
  it('should instantiate our good friend, Unicorn', function() {
    var unicorn = new Unicorn();

    assert.instanceOf(unicorn, Unicorn);
  });
//making new variable unicorn assigning it to return value of our new keyword class function, passing an argument of the string of 'bree'
  it('should have a name', function() {
    var unicorn = new Unicorn('Bree');

    assert.equal(unicorn.name, 'Bree');
    //assert.equal(actual, expected)if we were to run this unicorn instance of class Unicorn, this specific instance we are expecting the name property to have a value of 'bree'
  });
//requesting dynamic code. create new variable unicorn, assigning return value of new Unicorn is 'pam'. unicorn.name value should be passed.
  it('should be able to have a different name', function() {
    var unicorn = new Unicorn('Pam');

    assert.equal(unicorn.name, 'Pam');
  });
//var statement new Unicorn (class constructor). Asking for color property to be added and assigned the value of blue
  it('should have a color', function() {
    var unicorn = new Unicorn('TayTay', 'blue');

    assert.equal(unicorn.color, 'blue');
  });
//color should default to white. use conditional to set white as default with if color is undefined then assign it white. otherwise assign to it whatever coloris being passed thru
  it('should be white as default', function() {
    var unicorn = new Unicorn('Louisa');

    assert.equal(unicorn.color, 'white');
  });

  it('should refute isWhite', function() {
    var unicorn = new Unicorn('Steve', 'red');
//whenever we have an method() invocation in the 1st argument, that means the 2nd(expected) is going to be a return value
    assert.equal(unicorn.isWhite(), false);
  });

  it('should say sparklying stuff', function() {
    var unicorn = new Unicorn('Brenna');
// 1st argument is a method because of ('Wonderful'). we are creating a new method within the class Unicorn called says with the message "Wonderful".
//2nd argument: uses type coersion to combine the method says() with a parameter of message with a string of sparklies in order to return the 2nd argument
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
