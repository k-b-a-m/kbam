/* eslint-disable default-case */
/* eslint-disable complexity */
import socket from "../../socket";
import {Body} from 'matter-js';
export default (document, player) => {
  let move = {
    up: false,
    down: false,
    right: false,
    left: false
  };

  //Key down event listener to continue moving
  document.addEventListener("keydown", event => {
    switch (event.keyCode) {
      case 38: //Up Arrow
      case 87: //W
        Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0, y: -0.02})
        move.up = true;
        break;
      case 40: //Down Arrow
      case 83: // S
        Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0, y: 0.02})
        move.down = true;
        break;
      case 39: //Right Arrow
      case 68: // D
        Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: 0.02, y: 0})
        move.right = true;
        break;
      case 37: //Left Arrow
      case 65: // A
        Body.applyForce(player, {x: player.position.x, y: player.position.y}, {x: -0.02, y: 0})
        move.left = true;
        break;
    }
  });

  //Key up event listener to stop moving
  document.addEventListener("keyup", event => {
    switch (event.keyCode) {
      case 38: //Up Arrow
      case 87: //W
        move.up = false;
        break;
      case 40: //Down Arrow
      case 83: // S
        move.down = false;
        break;
      case 39: //Right Arrow
      case 68: // D
        move.right = false;
        break;
      case 37: //Left Arrow
      case 65: // A
        move.left = false;
        break;
    }
  });

  document.addEventListener("click", event => {

    console.log(event);
  });
  // setInterval(() => socket.emit("move", move), 1000 / 60);
};
