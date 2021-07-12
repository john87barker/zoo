manatee
class Manatee{
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
    this.name = 'Marshal';
    this.color = 'grey';
    this.weight = 3500;
    this.family = 'Sea Cow'
    this.bodyLengthInch = 216;
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
  
export default Manatee

