import {Bodies} from 'matter-js';

const makeBuildings = (x, y, w, h, name) => {
  const building = Bodies.rectangle(x, y, w, h, {
    isStatic: true,
    render: {
      sprite: {
        texture: '/Art/props n decorations/generic-rpg-house-inn.png',
        xScale: 2,
        yScale: 2,
      },
    },
  });
  building.name = name;
  return building;
};

export default makeBuildings;
