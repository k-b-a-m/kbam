import React from "react";
import socket from "../socket";
import drawPlayers from "./Utils/drawPlayers";
import setUpControls from "./Utils/setUpControls"

class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.canvasRef = React.createRef();
  }

  componentDidMount() {
    //Set Up Control Event Listeners
    setUpControls(document)
    //pass name in from lobby
    const name = "Player";

    //Create player
    //name will be passed in from lobby
    socket.emit("createPlayer", name);

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    
    socket.on("gameState", gameState => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      const { players } = gameState;
      drawPlayers(ctx, players);
    });
  }

  render() {
    return (
      <canvas
        ref="canvas"
        width={window.innerWidth}
        height={window.innerHeight}
        style={{ background: "black" }}
      />
    );
  }
}

export default Game;
