class Krill{
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
    this.name = 'Kyle';
    this.color = 'grey';
    this.weight = .07;
    this.family = 'invertebrae'
    this.bodyLengthInch = 2.5;
    this.teethType = 'NA';
    this.habitat = 'Water';
    this.wings = false;
    this.lifeSpan = 10
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Krill

