class Gharial{
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
    this.name = 'Gayle';
    this.color = 'grey';
    this.weight = 350;
    this.family = 'reptile'
    this.bodyLengthInch = 236;
    this.teethType = 'sharp';
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
  
export default Gharial

