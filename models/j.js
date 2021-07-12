jerboa
class Jerboa{
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
    this.name = 'Jeremiah';
    this.color = 'brown';
    this.weight = .2;
    this.family = 'marsupial'
    this.bodyLengthInch = 1.7;
    this.teethType = 'sharp';
    this.habitat = 'Desert';
    this.wings = false;
    this.lifeSpan = 6
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Jerboa

