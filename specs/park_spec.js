const assert = require('assert');
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js')

describe('Park', function(){

  let park;
  let velociraptor;
  let tRex;

  beforeEach(function(){
    park = new Park('Jurassic Park');
    velociraptor = new Dinosaur('Velociraptor', 6);
    tRex = new Dinosaur('Tyrannosaurus Rex', 2);
  });

  it('should have a name', function(){
    actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });
  describe('enclosure', function(){
    it('should start empty', function(){
      actual = park.enclosure.length;
      assert.strictEqual(actual, 0);
    })

  });






});
