const middleware = (req, res, next) => {

  if (!req.body.title || !req.body.yearOfRelease) {
    res.status(400).send({
      message: "Please provide a title and a yearOfRelease"
    })
    return
  }
  req.body.yearOfRelease = parseInt(req.body.yearOfRelease)

  if (!req.body.yearOfRelease) {
    res.status(400).send({
      message: "The yearOfRelease property must be an integer"
    })
    return
  }
  next()
}

module.exports = middleware