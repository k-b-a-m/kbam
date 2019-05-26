module.exports = class Weapon {
    constructor(name, x, y, h = 15, w = 15, ammo, explosive = false,spread = 1){
        this.name = name,
        this.x = x,
        this.y = y,
        this.h = h,
        this.w = w,
        this.ammo = ammo,
        this.explosive = explosive,
        this.spread = spread
    }

    getPosition(){
        return {x:this.x,y:this.y}
    }
}