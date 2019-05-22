const Sequelize = require("sequelize");
module.exports = new Sequelize(
  process.env.DATABASE || "postgress://localhost:5432/game",
  { logging: false }
);
