class IndianElephant{
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
    this.name = 'Inconcievable';
    this.color = 'grey';
    this.weight = 11,000;
    this.family = 'mammal'
    this.heightInch = 138;
    this.teethType = 'tusk';
    this.habitat = 'grassland';
    this.wings = false;
    this.lifeSpan = 48
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default IndianElephant

