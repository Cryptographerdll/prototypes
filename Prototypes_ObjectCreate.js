const playerMethods = {

    run: function(speed) {
        this.energy -= speed;
        console.log(this.energy);
    },

    jump: function(height) {
        this.energy += height;
        console.log(this.energy);
    },

    kickBall: function(strength) {
        this.energy -= strength;

    },

    dance: function(move) {
        this.energy += move;
        console.log(this.energy);
    }
};

function Player(name, age, energy) {

    let player = Object.create(playerMethods);

    player.name = name;
    player.age = age;
    player.energy = energy;

    return player;
}

const player1 = Player("John doe", 15, 100);
const player2 = Player("Maria cartner", 20, 80);

player1.run(80);
player1.dance(14);

console.log(Player.prototype);

// Parent
let player = {
    name: "John Cobol",
    age: 13,
    energy: 150
};

// child
let gamer = Object.create(player);
gamer.name = "Django";

console.log(gamer.name);