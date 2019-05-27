import {Bodies} from 'matter-js'

// export default class Player{
// 	constructor(name, health = 100, x, y , w, h){
//         this.name = name,
//         this.health = health,
//         // this.x = x,
//         // this.y = y,
//         // this.speed = speed
//         this.matter = Bodies.rectangle(x, y, w, h);
// 	}

//     getPosition(){
//         // return {x:this.x, y:this.y}
//     }
// }
 const makePlayer =  (name, x, y, w, h, health = 100) => {
    const player = Bodies.rectangle(x,y,w,h)
    player.name = name
    player.health = health

    return player
}

export default makePlayer