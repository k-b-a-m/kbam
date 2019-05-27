module.exports = class World {
    constructor(w, h, noObstacles, noWeapons){
        this.w = w,
        this.h = h
    }

    getSize(){
        return {w:this.w,h:this.h}
    }
}