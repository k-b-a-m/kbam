<<<<<<< HEAD
import React from 'react';
import socket from '../socket';
import drawPlayers from './Utils/drawPlayers';
import setUpControls from './Utils/setUpControls';
import makePlayer from './classes/Player';
import Matter from 'matter-js';
import makeObstacles from './classes/Obstacle';
import makeBuildings from './classes/Building';
import {tree, building} from './classes/bitmap';

const {
  Engine,
  Render,
  Bodies,
  World,
  Mouse,
  MouseConstraint,
  Events,
  Runner,
} = Matter;

const players = [
  {name: 'Kyle', x: 300, y: 200, h: 50, w: 50, health: 100},
  // {name: 'Mariano', x: 500, y: 200, h: 50, w: 50, health: 100},
  // {name: 'Alex', x: 200, y: 500, h: 50, w: 50, health: 100},
  // {name: 'Bao', x: 100, y: 100, h: 50, w: 50, health: 100},
];
=======
import React from "react";
import socket from "../socket";
import drawPlayers from "./Utils/drawPlayers";
import setUpControls from "./Utils/setUpControls";
import makePlayer from "./classes/Player";
import Matter from "matter-js";
import {fetchPlayers} from '../redux/reducers/playersReducer';
import {connect} from 'react-redux';

const { Engine, Render, Bodies, World, Mouse, MouseConstraint, Events, Runner } = Matter;

const mapStateToProps = (state) => {
  return{
    players: state.lobby,
    gameState: state.gameState,
  }
};
>>>>>>> 6d78142380cf82a558142fdb6c2ef581b2cdcc87

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    //Set Up Control Event Listeners

    //Create engine
    const engine = Engine.create();
    //turn off gravityssssssss
    engine.world.gravity.y = 0;

    //in built renderer
    const render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
      },
    });

    let mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: true,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    Render.lookAt(render, {
      min: {x: 0, y: 0},
      max: {x: 1920, y: 1080},
    });

    //Bottom wall
    let bottomWall = Bodies.rectangle(0, 1100, 4200, 100, {
      isStatic: true,
    });

    let topWall = Bodies.rectangle(0, 0, 4200, 100, {
      isStatic: true,
    });

    let leftWall = Bodies.rectangle(-110, 0, 50, 2200, {
      isStatic: true,
    });

    let rightWall = Bodies.rectangle(2050, 1000, 50, 2200, {
      isStatic: true,
    });

    //Create player //name will be passed in from lobby
<<<<<<< HEAD
    players.forEach(player => {
      let curPlayer = makePlayer(
        player.name,
        player.x,
        player.y,
        player.h,
        player.w,
        player.health
      );
      setUpControls(document, curPlayer);

      socket.emit('newPlayer', {
        position: {
          x: curPlayer.position.x,
          y: curPlayer.position.y,
        },
        velocity: 1,
      });

      World.add(engine.world, [curPlayer]);
    });

    /*Environment
    ==================================================================*/

    //Make obstacles
    const addedObstacles = [];
    for (let i = 0; i <= 10; ++i) {
      const x = Math.floor(Math.random() * 1920);
      const y = Math.floor(Math.random() * 1080);
      const w = 120;
      const h = 150;
      const madeObstacle = makeObstacles(x, y, w, h, i);
      madeObstacle.collisionFilter.category = tree;
      addedObstacles.push(madeObstacle);
    }

    //Make buildings
    const addedBuildings = [];
    for (let i = 0; i <= 10; ++i) {
      const x = Math.floor(Math.random() * 1920);
      const y = Math.floor(Math.random() * 1080);
      const w = 150;
      const h = 150;
      const madeBuilding = makeBuildings(x, y, w, h, i);
      madeBuilding.collisionFilter.category = building;
      addedBuildings.push(madeBuilding);
    }
=======
    const {players} = this.props;
    console.log(players);
    let myPlayer = players.find(player => player.id === socket.id);

    myPlayer = makePlayer(myPlayer.name, (window.innerWidth*Math.random()), (window.innerHeight*Math.random()));
    console.log(myPlayer.name)
    setUpControls(document, myPlayer);

    socket.emit("newPlayer", {
      position: {
        x:myPlayer.position.x,
        y:myPlayer.position.y
      }
    });

    World.add(engine.world, [myPlayer]);



>>>>>>> 6d78142380cf82a558142fdb6c2ef581b2cdcc87
    // vertices: [player.vertices[0],player.vertices[1],player.vertices[2],player.vertices[3]]

    // add all of the bodies to the world
    World.add(engine.world, [
      bottomWall,
      topWall,
      leftWall,
      rightWall,
      ...addedObstacles,
      ...addedBuildings,
    ]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);

    socket.on('gameState', gameState => {
      // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      const {players} = gameState;

      //ADD PLAYER HERE

      // drawPlayers(ctx, players);
    });
  }

  render() {
    return (
      <div />
      // <canvas
      //   ref="canvas"
      //   width={window.innerWidth}
      //   height={window.innerHeight}
      //   style={{ background: "black" }}
      // />
    );
  }
}

export default connect(mapStateToProps)(Game);
