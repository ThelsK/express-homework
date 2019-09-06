const Sequelize = require("sequelize")
const databaseUrl = process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres"
const database = new Sequelize(databaseUrl)

database
  .sync()
  .then(() => console.log("Database schema updated"))
  .catch(console.error)

module.exports = database



const app = require("express")()
const port = process.env.PORT || 3000

app.use(
  require("body-parser").json(),
  require("./movie/router"),
)

app.listen(port, () => console.log(`Listening on :${port}`))