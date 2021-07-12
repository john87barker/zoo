class HornShark{
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
    this.name = 'Helga';
    this.color = 'blue-grey';
    this.weight = 22;
    this.family = 'reptile'
    this.bodyLengthInch = 40;
    this.teethType = 'sharp';
    this.habitat = 'Water';
    this.wings = false;
    this.lifeSpan = 25
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default HornShark

