import {Bodies} from 'matter-js';

const makeObstacles = (x, y, w, h, name) => {
  const obstacle = Bodies.rectangle(x, y, w, h, {
    isStatic: true,
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
