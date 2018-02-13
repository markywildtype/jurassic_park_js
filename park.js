const Park = function(name){
  this.name = name;
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeAllOfType = function(dinoType){
  this.enclosure = this.enclosure.filter(dino => dino.type !== dinoType);
}

Park.prototype.getDinosYearlyOffspringOverTwo = function(){
  let dinosMoreThan2 = [];
  for(dino of this.enclosure){
    if(dino.yearlyOffspring > 2){
      dinosMoreThan2.push(dino);
    }
  }
  return dinosMoreThan2;
}

module.exports = Park;
