class RedSquirrel{
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
    this.name = 'Austin';
    this.color = 'red';
    this.weight = .75;
    this.family = 'marsupial'
    this.bodyLengthInch = 14;
    this.teethType = 'sharp';
    this.habitat = 'forest';
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
  
export default RedSquirrel

