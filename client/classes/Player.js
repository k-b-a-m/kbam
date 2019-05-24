export default class Player {
	constructor(x, y, health = 100, ){
        this.health = health
        this.x = x,
        this.y = y
	}

	shoot = (coordinates) => {

    }
    
    move = (input) => {

    }

    getPosition = () => {
        return [this.x, this.y]
    }
}