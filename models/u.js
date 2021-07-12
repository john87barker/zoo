class Utonagan{
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
    this.name = 'Ike';
    this.color = 'Black, grey';
    this.weight = 100;
    this.family = 'canine';
    this.heightInch = 30;
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
  
export default Utonagan

