const app = require("express")()
const port = process.env.PORT || 3000

app.use(
  require("body-parser").json(),
  require("./messages/router"),
)

app.listen(port, () => console.log(`Listening on :${port}`))