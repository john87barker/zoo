class Xerus{
  constructor(
    name = '',
    color = '',
    weight = 0,
    family = '',
    bodyLengthInch = 0,
    teethType = '',
    habitat = '',
    wings = false,
    lifeSpan = 0
    
    
  ) {
    this.name = 'Xerxes';
    this.color = 'brown';
    this.weight = 1;
    this.family = 'marsupial'
    this.bodyLengthInch = 14;
    this.teethType = 'sharp';
    this.habitat = 'desert';
    this.wings = false;
    this.lifeSpan = 5
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Xerus

