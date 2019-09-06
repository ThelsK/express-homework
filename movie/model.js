const Sequelize = require("sequelize")
const database = require("../sequelize-rest")

const Movie = database.define("movie", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  yearOfRelease: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  synopsis: {
    type: Sequelize.STRING,
  }
})

module.exports = Movie