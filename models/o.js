class Octopus {
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
    this.name = 'Orion';
    this.color = 'varies';
    this.weight = 165;
    this.family = 'Sea Cow'
    this.bodyLengthInch = 360;
    this.teethType = 'tusk';
    this.habitat = 'Water';
    this.wings = false;
    this.lifeSpan = 5
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
      
      
      export default Octopus
