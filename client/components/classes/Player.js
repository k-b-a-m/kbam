module.exports = class Player {
	constructor(name, x, y, health = 100, speed = 1){
        this.name = name,
        this.health = health
        this.x = x,
        this.y = y,
        this.speed = speed
	}

    getPosition(){
        return {x:this.x, y:this.y}
    }
}