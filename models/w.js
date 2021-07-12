class Warthog{
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
    this.name = 'Wally';
    this.color = 'grey';
    this.weight = 700;
    this.family = 'mammal'
    this.lengthInch = 60;
    this.teethType = 'tusk';
    this.habitat = 'grassland';
    this.wings = false;
    this.lifeSpan = 20
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Warthog

