export default class World {
  constructor(size = {w: window.innerWidth, h: window.innerHeight}, buildings, obstacles, weapons){
    this.size = size;
    this.buildings = buildings || [];
    this.obstacles = obstacles || [];
    this.weapons = weapons || [];
  };
};
