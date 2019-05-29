// export default class Obstacle {
//     constructor(x, y, w, h, passable = false, deathTouch = false ){
//         this.x = x,
//         this.y = y,
//         this.w = w,
//         this.h = h,
//         this.passable = passable,
//         this.deathTouch = deathTouch
//     }

//     getPosition(){
//         return {x:this.x,y:this.y}
//     }
// }

import {Bodies} from 'matter-js';

const makeObstacles = (x, y, w, h, name) => {
  const obstacle = Bodies.rectangle(x, y, w, h, {
    isStatic: true,
    isNonColliding:false,
    render: {
      sprite: {
        texture: '/Art/props n decorations/generic-rpg-tree01.png',
        xScale: 2,
        yScale: 2,
      },
    },
  });
  obstacle.name = name;
  return obstacle;
};

export default makeObstacles;
