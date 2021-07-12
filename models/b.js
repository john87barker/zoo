class Bandicoot{
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
    this.name = 'Crash';
    this.color = 'brown';
    this.weight = 3;
    this.family = 'marsupial'
    this.bodyLengthInch = 15;
    this.teethType = 'sharp';
    this.habitat = 'vegetation of Australia';
    this.wings = false;
    this.lifeSpan = 4
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Bandicoot

