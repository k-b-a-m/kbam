const addPlayer = player => {
  return {
    type: ADD_PLAYER,
    player
  };
};

module.exports = addPlayer;
