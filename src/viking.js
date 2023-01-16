// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = 100;
        this.strength = 30;

    }
    attack() {
        return this.strength

    }
    receiveDamage(damage) {
        this.health = this.health - damage
        return this.health
    }
  } 
  
  // Viking
  class Viking extends Soldier {
    constructor (health, strength, name)
    super (health,strength) {

        this.name = Viking
    }
    receiveDamage(damage) {
        this.health = this.health - damage
        return this.health
        if (this.health > 0) {
            return "Viking has received DAMAGE points of damage"}
        if (this.health = 0) {
            return "Viking has died in act of combat"}
        }
        
    battleCry() {
            return "Odin Owns You All!"
        }

    }
  
  
  // Saxon
  class Saxon extends Soldier {
    attack() {
        return this.strength
    }
    receiveDamage(damage){
        this.health = this.health - damage
        return this.health
        if (this.health > 0) {
            return "A Saxon has received DAMAGE points of damage"}
        if (this.health = 0) {
            return "A Saxon has died in act of combat"}
    }
  }

  
  // War
  class War {
    addViking() {

    }
addSaxon() {

}
vikingAttack() {

}
saxonAttack() {

}
showStatus() {

}
  }