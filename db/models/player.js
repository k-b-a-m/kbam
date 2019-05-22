const db = require("../db");
const {
  Sequelize: { STRING, INTEGER, ENUM }
} = connection;

const Player = db.define("player", {
  name: {
    type: STRING,
    allowNull: false,
    notEmpty: true
  },
  lives: {
    type: INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 3
    }
  }
});

module.exports = Player;
