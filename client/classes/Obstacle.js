export default class Obstacle {
    constructor(x, y, w, h, passable = false, deathTouch = false ){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.passable = passable,
        this.deathTouch = deathTouch
    }

    getPosition = () =>{
        return {x,y}
    }
}