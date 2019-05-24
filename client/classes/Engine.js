const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function percentX(percent) {
  return Math.round(percent/100 * window.innerWidth);
}
function percentY(percent) {
  return Math.round(percent/100 * window.innerHeight);
}

export default class Engine {
  constructor(){
    this.worldState = {};
    this.playersState = [];
    this.weaponsState = [];
    this.obstaclesState = [];
    this.buildingsState = [];
  };
  newGame = (world) => {
    this.createWorld(world);
  };
  createWorld = (world) => {
    // ctx.strokeRect(percentX(50), percentY(50), world.size.w, world.size.h);
    ctx.fillRect(150, 10, 1000, 1000);
    ctx.beginPath();
    ctx.arc(100, 100, 75, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.stroke();
  };
  gameOver = () => {

  };
};
