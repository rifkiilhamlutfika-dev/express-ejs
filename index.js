const express = require("express");
const port = 8080 || 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Listening on host http://localhost:${port}`);
});
