export default class World {
  constructor(size = {w: 100, h: 100}, buildings, obstacles, weapons){
    this.size = size;
    this.buildings = buildings || [];
    this.obstacles = obstacles || [];
    this.weapons = weapons || [];
  };
};
