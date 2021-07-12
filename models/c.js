class Caiman{
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
    this.name = 'Larry';
    this.color = 'grey';
    this.weight = 1000;
    this.family = 'reptile'
    this.bodyLengthInch = 84;
    this.teethType = 'sharp';
    this.habitat = 'Water';
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
  
export default Caiman

