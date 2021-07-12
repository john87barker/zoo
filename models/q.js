class Quetzal {
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
    this.name = 'Queenie';
    this.color = 'brown';
    this.weight = .5;
    this.family = 'bird'
    this.heightInch = 13;
    this.teethType = 'NA';
    this.habitat = 'woodland';
    this.wings = true;
    this.lifeSpan = 25
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
      export default Quetzal
