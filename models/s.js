class SaberToothTiger{
  constructor(
    name = '',
    color = '',
    weight = 0,
    family = '',
    tailLengthInch = 0,
    teethType = '',
    habitat = '',
    wings = false,
    
    
  ) {
    this.name = 'Sean';
    this.color = 'white';
    this.weight = 961;
    this.family = 'feline';
    this.heightInch = 47;
    this.teethType = 'sharp';
    this.habitat = 'cold';
    this.wings = false;
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default SaberToothTiger

