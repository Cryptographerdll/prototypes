function Player(name, age, energy) {

    let player = Object.create(Player.prototype);

    player.name = name;
    player.age = age;
    player.energy = energy;

    return player;
}

Player.prototype.run = function(speed) {
    this.energy -= speed;
    console.log(this.energy);
};

Player.prototype.jump = function(height) {
    this.energy += height;
    console.log(this.energy);
};

Player.prototype.kickBall = function(strength) {
    this.energy -= strength;

};

const player1 = Player("John doe", 15, 100);
const player2 = Player("Maria cartner", 20, 80);

player1.run(20);

