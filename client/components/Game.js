import React from "react";
import socket from "../socket";
import drawPlayers from "./Utils/drawPlayers";
import setUpControls from "./Utils/setUpControls";
import makePlayer from "./classes/Player";
import Matter from "matter-js";

const {Engine, Render, Bodies, World } = Matter;
    

class Game extends React.Component {
  constructor(props) {
    super(props);
    // this.canvasRef = React.createRef();
  }

  componentDidMount() {
    //Set Up Control Event Listeners
    setUpControls(document);


    //Create player //name will be passed in from lobby
    const name = "Player";
    const player = makePlayer(name, 200, 200, 200, 200, 100);
    console.log(player)
    // socket.emit('newPlayer', player)

//Create engine
    const engine = Engine.create();
    //turn off gravity
    engine.world.gravity.y = 0;
    
      //in built renderer
      const render = Render.create({
        element: document.body,
        engine: engine
      });
    
      //Bottom wall
      var bottomWall = Bodies.rectangle(0, window.height, window.width, 60, { isStatic: true });
    
      // add all of the bodies to the world
      World.add(engine.world, [player, bottomWall]);
    
      // run the engine
      Engine.run(engine);
    
      // run the renderer
      Render.run(render);
    
    


    

    // const canvas = this.refs.canvas;
    // const ctx = canvas.getContext("2d");

    socket.on("gameState", gameState => {
      // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      // const { players } = gameState;
      // drawPlayers(ctx, players);
    });
  }

  render() {
    return (
      <div></div>
      // <canvas
      //   ref="canvas"
      //   width={window.innerWidth}
      //   height={window.innerHeight}
      //   style={{ background: "black" }}
      // />
    );
  }
}

export default Game;
