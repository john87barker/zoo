class PeregrineFalcon{
  constructor(
    name = '',
    color = '',
    weight = 0,
    family = '',
    heightInch = 0,
    teethType = '',
    habitat = '',
    wings = false,
    lifeSpan = 0
    ) {
    this.name = 'Priscilla';
    this.color = 'brown';
    this.weight = 2.2;
    this.family = 'bird'
    this.heightInch = 47;
    this.teethType = 'NA';
    this.habitat = 'woodland';
    this.wings = true;
    this.lifeSpan = 15
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default PeregrineFalcon

