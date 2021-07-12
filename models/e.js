class Emu{
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
    this.name = 'Ella';
    this.color = 'brown';
    this.weight = 80;
    this.family = 'canine'
    this.heightInch = 72;
    this.teethType = 'NA';
    this.habitat = 'woodland';
    this.wings = true;
    this.lifeSpan = 20
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Emu

