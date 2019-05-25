export default class Projectile {
    constructor(x, y, h = 2, w = 2, speed){
        this.speed = speed,
        this.x = x,
        this.y = y,
        this.h = h,
        this.w = w,
        this.speed = speed
    }

    getPosition = () =>{
        return {x,y}
    }
}