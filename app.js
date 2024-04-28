const express = require("express");
const bodyParser = require("body-parser");
const authorsRoute = require("./routes/authors");
const logger = require("./logger")

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use("/authors", authorsRoute);
app.use(logger)

app.get("/", (req, res) => {
  res.send("Hello, Welcome to the fourth NodeJS assignment.");
});

app.listen(PORT, () => {
  console.log(`Server has started running on port ${PORT}`);
});
