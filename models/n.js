class Narwhal{
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
    this.name = 'Nolan';
    this.color = 'grey';
    this.weight = 1300;
    this.family = 'whale'
    this.bodyLengthInch = 156;
    this.teethType = 'tusk';
    this.habitat = 'Water';
    this.wings = false;
    this.lifeSpan = 60
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Narwhal

