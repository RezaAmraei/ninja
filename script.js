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

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    console.log(
      "What one programmer can do in one month, two programmers can do in two months."
    );
    super.drinkSake();
  }
  showStatsSen() {
    super.showStats();
    console.log(`Wisdom: ${this.wisdom}`);
  }
}

const Reza = new Ninja("reza", 100, 20);
Reza.drinkSake();
Reza.showStats();

const RezaSen = new Sensei("rezaSen", 500);
RezaSen.speakWisdom();
RezaSen.showStatsSen();
