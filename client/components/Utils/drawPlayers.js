export default (ctx, players) => {
  for (let p in players) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(players[p].x, players[p].y, 30, 30);
  }
};
