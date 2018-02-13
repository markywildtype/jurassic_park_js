const assert = require('assert');
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js')

describe('Park', function(){

  let park;
  let velociraptor;
  let velociraptor2;
  let velociraptor3;
  let tRex;

  beforeEach(function(){
    park = new Park('Jurassic Park');
    velociraptor = new Dinosaur('Velociraptor', 6);
    velociraptor2 = new Dinosaur('Velociraptor', 6);
    velociraptor3 = new Dinosaur('Velociraptor', 6);
    tRex = new Dinosaur('Tyrannosaurus Rex', 2);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });
  describe('enclosure', function(){
    it('should start empty', function(){
      const actual = park.enclosure.length;
      assert.strictEqual(actual, 0);
    });
    it('should be able to add dinosaurs', function(){
      park.addDinosaur(velociraptor);
      park.addDinosaur(tRex);
      const actual = park.enclosure.length;
      assert.strictEqual(actual, 2);
    });
    it('should list dinosaurs', function(){
      park.addDinosaur(velociraptor);
      park.addDinosaur(tRex);
      const actual = park.enclosure;
      assert.deepStrictEqual(actual, [velociraptor, tRex]);
    });
    it('should remove all dinosaurs of a specified type', function(){
      park.addDinosaur(velociraptor);
      park.addDinosaur(velociraptor2);
      park.addDinosaur(velociraptor3);
      park.addDinosaur(tRex);
      park.addDinosaur(tRex);
      park.removeAllOfType('Velociraptor');
      actual = park.enclosure.length;
      assert.strictEqual(actual, 2);
    })
    it('should return dinosaurs with yearlyOffspring greater than 2', function(){
        park.addDinosaur(velociraptor);
        park.addDinosaur(velociraptor2);
        park.addDinosaur(tRex);
        park.addDinosaur(tRex);
        park.addDinosaur(tRex);
        const actual = park.getDinosYearlyOffspringOverTwo().length;
        assert.strictEqual(actual, 2);
    })

  });






});
