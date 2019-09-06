const router = new require("express").Router()
const middleware = require("./middleware")

router.post("/messages", middleware, (req, res, next) => {
  console.log("Received:", req.body.text)
  res.send({
    message: "Message received loud and clear"
  })
})

module.exports = router