class Ninja {
  constructor(name, health, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }
  sayName() {
    console.log(this.name);
  }
  showStats() {
    console.log(`Name : ${this.name}
    Strength : ${this.strength}
    Speed : ${this.speed}
    Health : ${this.health}`);
  }
  drinkSake() {
    return (this.health += 10);
  }
}
const Reza = new Ninja("reza", 100, 20);
Reza.drinkSake();
Reza.showStats();
