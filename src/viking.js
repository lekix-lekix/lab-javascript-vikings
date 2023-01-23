// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength),
        this.name = name
        }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry () {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    vikingAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const damageTaken = this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);
        if (this.saxonArmy[randomSaxonIndex].health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return damageTaken;
    }
    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const damageTaken = this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);
        if (this.vikingArmy[randomVikingIndex].health <= 0) {
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return damageTaken;
    }
    showStatus() {
        if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
        else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day...";        
        else return "Vikings and Saxons are still in the thick of battle."
    }
}
// const viking1 = new Viking("joe", 200, 15);
// const viking2 = new Viking("richar", 200, 15);
// const viking3 = new Viking("tonotk", 200, 15);
// const viking4 = new Viking("albert", 200, 15);
// const saxon1 = new Saxon(200, 15);
// const saxon2 = new Saxon(200, 15);
// const saxon3 = new Saxon(200, 15);
// const saxon4 = new Saxon(200, 15);
// const war = new War();
// war.addViking(viking1);
// war.addViking(viking2);
// war.addViking(viking3);
// war.addViking(viking4);
// war.addSaxon(saxon1);
// war.addSaxon(saxon2);
// war.addSaxon(saxon3);
// war.addSaxon(saxon4);
// console.log(war.vikingAttack());
// console.log(war.saxonAttack());
// console.log(war.vikingArmy)
// console.log(war.saxonArmy)

