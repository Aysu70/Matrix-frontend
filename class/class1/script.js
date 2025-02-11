class measure{
    constructor(m, H, V0, g){
        this.Weight = m;
        this.Height = H;
        this.firstVelocity = V0;
        this.gravity = g;
        this.lastVelocity = this.Vs();
        this.Time = this.t();
        this.Implus = this.P();
    }
    Vs(){
        return Math.sqrt(this.firstVelocity**2 + 2*this.gravity*this.Height);
    }
    t(){
        return (this.lastVelocity - this.firstVelocity)/this.gravity;
    }
    P(){
        return (this.Weight*this.gravity)/this.Time;
    }
}
 class measure2 extends measure {
    constructor(m, H, V0, g) {
        super(m, H, V0, g);
        this.maxkinetics = this.Ek();
        this.maxpotensial = this.Ep();
    }
    Ek(){
        return this.Implus*this.lastVelocity/2;
    }
    Ep(){
        return this.Weight*this.gravity*this.Height;
    }
 }

let action = new measure2(3, 20, 0, 10);
console.log(action);

class Dragon {
    constructor(name, element, health = 100){
        this.name = name;
        this.element = element;
        this.health = health; 
        this.treasure = 0;
    }
    breatheFire() {
        return `${this.name} the ${this.element} dragon breathes a massive ${this.element}-flavored fire!`;
    }
    sleep() {
        this.health += 10; 
        return `${this.name} curls up on a treasure pile, snoozing peacefully. Health restored to ${this.health}!`;
    }
    
    collectTreasure(amount) {
        this.treasure += amount;
        return `${this.name} collects ${amount} gold coins. Total treasure: ${this.collectedtreasure} coins.`;
    }
    startTreasureCollection() {
        setInterval(() => {
            console.log(this.collectTreasure()); 
        }, 5000); 
    }
}
class BattleDragon extends Dragon {
    constructor(name, element, health, strength, battleCry) {
        super(name, element, health);
        this.strength = strength;
        this.experience = 0; 
        this.battleCry = battleCry;
        this.Level = this.defineLevel();
        this.startLevelChecker();
    }
    fight(opponent){
        const damage = Math.floor(5*Math.random() * this.strength) + 10; 
        this.experience += 5;
        return `${this.name} unleashes their battle cry "${this.battleCry}" and deals ${damage} damage to ${opponent}! Experience: ${this.experience}`;
    }
    train() {
        this.strength += 10; 
        this.experience += 10; 
        return `${this.name} trains hard and now has ${this.strength} strength and ${this.experience} experience!`;
    }
    displayStats() {
        return `${this.name}'s Stats - Element: ${this.element}, Strength: ${this.strength}, Experience: ${this.experience}, Health: ${this.health}`;
    }
    defineLevel() {
        if (this.experience < 20) return 1; 
        else if (this.experience <= 50) return 2; 
        else return 3; 
    }
    startLevelChecker() {
        setInterval(() => {
            const currentLevel = this.level;
            this.level = this.defineLevel(); 
            if (currentLevel !== this.level) {
                console.log(`${this.name} leveled up to Level ${this.level}!`);
            }
        }, 3000); 
    }
}

class LegendaryDragon extends BattleDragon {
    constructor(name, element, health, strength, battleCry, legendLevel) {
        super(name, element, health, strength, battleCry);
        this.legendLevel = legendLevel; 
    }
    displayStats() {
        return `${super.displayStats()}, Legend Level: ${this.legendLevel}`;
    }
}

// const babyDragon = new Dragon("Fluffy", "Fire");
// console.log(babyDragon.breatheFire()); 
// console.log(babyDragon.collectTreasure(15)); 
// console.log(babyDragon.sleep()); 

// const warriorDragon = new BattleDragon("Blaze", "Electric", 100, 50, "Feel the thunder!");
// console.log(warriorDragon.fight("an Ice Troll")); 
// console.log(warriorDragon.train()); 
// console.log(warriorDragon.displayStats()); 

// const legendaryDragon = new LegendaryDragon("Inferno", "Flame", 150, 100, "Bow before me!", "The Eternal Flame");
// console.log(legendaryDragon.displayStats());
