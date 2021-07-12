class Zorse{
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
    this.name = 'Zseth';
    this.color = 'black and white';
    this.weight = 1200;
    this.family = 'mammal'
    this.lengthInch = 70;
    this.teethType = 'NA';
    this.habitat = 'grassland';
    this.wings = false;
    this.lifeSpan = 15
  }

  eat(food) {
    console.log(`Yummy ${food}! I want more!`)
  }
  sound(noise) {
    alert(`The great ${this.name} cries ${noise}`)
  }
}
  
export default Zorse

