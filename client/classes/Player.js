export default class Player {
	constructor(x, y, health = 100, speed = 1){
        this.health = health
        this.x = x,
        this.y = y,
        this.speed = speed
	}

	shoot = (coordinates) => {

    }
    
    move = (input) => {

    }

    getPosition = () => {
        return [this.x, this.y]
    }
}