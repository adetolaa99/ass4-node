const express = require("express");
const bodyParser = require("body-parser");
const authorsRoute = require("./routes/authors");

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use("/authors", authorsRoute);

app.get("/", (req, res) => {
  res.end("Heyyy, Welcome to the third NodeJS assignment");
});

app.listen(PORT, () => {
  console.log(`Server has started running on port ${PORT}`);
});