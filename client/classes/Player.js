export default class Player {
	constructor(position = {x:0, y:0}, health = 100, lives = 1){
        this.lives = lives
        this.position = position
        this.health = health
	};

	shoot = (coordinates) => {

    };

    move = (input) => {

    };

    getPosition = () => {
        return this.position
    };

    getHurt = (damage) => {
        this.health = this.health - damage;
    };
};

const joe = new Player({x: 50, y: 100}, 50, 1);
console.log(joe.health);
