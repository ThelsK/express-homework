const Sequelize = require("sequelize")
const databaseUrl = process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres"
const database = new Sequelize(databaseUrl)

database
  .sync()
  .then(() => console.log("Database schema updated"))
  .then(() => Promise.all(examples.map(example => Movie.create(example))))
  .catch(console.error)

module.exports = database

const Movie = require("./movie/model")
const examples = [
  {
    title: "Alien",
    yearOfRelease: 1979,
    synopsis: "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.",
  },
  {
    title: "Predator",
    yearOfRelease: 1987,
    synopsis: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.",
  },
  {
    title: "Terminator",
    yearOfRelease: 1984,
    synopsis: "A seemingly indestructible robot is sent from 2029 to 1984 to assassinate a young waitress, whose unborn son will lead humanity in a war against sentient machines, while a human soldier from the same war is sent to protect her at all costs.",
  },
]



const app = require("express")()
const port = process.env.PORT || 3000

app.use(
  require("body-parser").json(),
  require("./movie/router"),
)

app.listen(port, () => console.log(`Listening on :${port}`))