const router = new require("express").Router()

router.post("/messages", (req, res, next) => {
  if (!req.body.text) {
    console.log("Received a post request without a text property.")
    res.status(400).send({
      message: "Please provide a text property"
    })
    return
  }

  console.log("Received:", req.body.text)
  res.send({
    message: "Message received loud and clear"
  })
})

module.exports = router