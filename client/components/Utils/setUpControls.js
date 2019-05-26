import socket from "../../socket";
export default document => {
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
        move.up = true;
        break;
      case 40: //Down Arrow
      case 83: // S
        move.down = true;
        break;
      case 39: //Right Arrow
      case 68: // D
        move.right = true;
        break;
      case 37: //Left Arrow
      case 65: // A
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
      console.log(event)
  })
  
  setInterval(() => socket.emit("move", move), 1000 / 60);
};
