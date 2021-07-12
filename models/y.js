class Yak{
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
    this.name = 'Yoseph';
    this.color = 'grey';
    this.weight = 2000;
    this.family = 'mammal'
    this.lengthInch = 90;
    this.teethType = 'tusk';
    this.habitat = 'grassland';
    this.wings = false;
    this.lifeSpan = 30
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Yak

