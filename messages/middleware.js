const texts = []

const middleware = (req, res, next) => {

  if (texts.length >= 5) {
    console.log("Received too many post requests.")
    res.status(429).send({
      message: "Received too many post requests"
    })
    return
  }

  if (!req.body.text) {
    console.log("Received a post request without a text property.")
    res.status(400).send({
      message: "Please provide a text property"
    })
    return
  }

  texts.push(req.body.text)
  next()
}

module.exports = middleware