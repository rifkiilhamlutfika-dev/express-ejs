const path = require("path");
const express = require("express");
const port = 8080 || 3000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/t/:tag", (req, res) => {
  const { tag } = req.params;
  res.render("tag", { tag });
});

app.get("/rand", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  //   res.render("random", { random: number }); that's correct
  res.render("random", { number });
});

app.listen(port, () => {
  console.log(`Listening on host http://localhost:${port}`);
});
