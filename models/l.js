class Lobster{
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
    this.name = 'Lucy';
    this.color = 'grey and red';
    this.weight = 35;
    this.family = 'crestacean'
    this.bodyLengthInch = 20;
    this.teethType = 'NA';
    this.habitat = 'Water';
    this.wings = false;
    this.lifeSpan = 50
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Lobster

