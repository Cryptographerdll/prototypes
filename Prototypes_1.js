function Player(fullName, age) {

    this.fullName = fullName;
    this.age = age;

    this.getInfo = function() {
        return `I'm ${this.fullName}, I'm ${this.age} years old,`;
    };
}

Player.prototype = {

    price: 1000,
    rating: 4,

    getValue: function() {
        return " price : " + this.price + "$" + " and rating is " + this.rating;
    },
};


const p = new Player("John doe", 20);
console.log(p.getInfo() + p.getValue());