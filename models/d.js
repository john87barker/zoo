class Dingo{
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
    this.name = 'Ralph';
    this.color = 'brown';
    this.weight = 35;
    this.family = 'canine'
    this.bodyLengthInch = 49;
    this.teethType = 'sharp';
    this.habitat = 'grass lands';
    this.wings = false;
    this.lifeSpan = 35
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Dingo

