const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Velociraptor', 6);
  });

  it('should have a type', function(){
    actual = dinosaur.type;
    assert.strictEqual(actual, 'Velociraptor');
  });
  it('should have a yearly number of offspring', function(){
    actual = dinosaur.yearlyOffspring;
    assert.strictEqual(actual, 6);
  })











})
