const router = new require("express").Router()
const middleware = require("./middleware")
const Movie = require("./model")

router.get("/movies", (req, res, next) => {

  if (req.query.offset && !parseInt(req.query.offset)) {
    res.status(400).send({
      message: "The offset parameter must be ommitted or an integer"
    })
    return
  }

  if (req.query.limit && !parseInt(req.query.limit)) {
    res.status(400).send({
      message: "The limit parameter must be ommitted or an integer"
    })
    return
  }

  Movie.findAndCountAll({
    offset: parseInt(req.query.offset) || null,
    limit: parseInt(req.query.limit) || null,
  })
    .then(movies => res.send({
      data: movies.rows,
      total: movies.count,
    }))
    .catch(next)
})

router.get("/movies/:id", (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => {
      if (movie) {
        res.send(movie)
      } else {
        res.status(404).send({ message: "No movie with that id" })
      }
    })
    .catch(next)
})

router.post("/movies", middleware, (req, res, next) => {
  Movie.create(req.body)
    .then(movie => res.send(movie))
    .catch(next)
})

router.put("/movies/:id", middleware, (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => {
      if (movie) {
        movie.update(req.body)
          .then(movie => res.send(movie))
      } else {
        res.status(404).send({ message: "No movie with that id" })
      }
    })
    .catch(next)
})

router.delete("/movies/:id", (req, res, next) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then(amount => {
      if (amount) {
        res.send({ moviesDeleted: amount })
      } else {
        res.status(404).send({
          message: "No movie with that id",
          moviesDeleted: amount,
        })
      }
    })
    .catch(next)
})

module.exports = router