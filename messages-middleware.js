const middleware = (req, res, next) => {
  if (!req.body.text) {
    console.log("Received a post request without a text property.")
    res.status(400).send({
      message: "Please provide a text property"
    })
    return
  }
  next()
}

module.exports = middleware