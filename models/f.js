class FennecFox{
  constructor(
    name = '',
    color = '',
    weight = 0,
    family = '',
    tailLengthInch = 0,
    teethType = '',
    habitat = '',
    wings = false,
    lifeSpan = 0,
    pet = false
    
    
  ) {
    this.name = 'Felicity';
    this.color = 'white';
    this.weight = 2.9;
    this.family = 'canine';
    this.lengthInch = 16;
    this.teethType = 'sharp';
    this.habitat = 'sand';
    this.wings = false;
    this.lifeSpan = 14;
    this.pet = true
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default FennecFox

