const path = require("path");
const express = require("express");
const port = 8080 || 3000;

const tagsData = require("./data.json");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/t/:tag", (req, res) => {
  const { tag } = req.params;
  const data = tagsData[tag];

  if (data) res.render("tag", { data });
  else res.render("not_found", { tag });
});

app.get("/rand", (req, res) => {
  const number = Math.floor(Math.random() * 10) + 1;
  //   res.render("random", { random: number }); that's correct
  res.render("random", { number });
});
app.get("/cats", (req, res) => {
  const cats = ["jacky", "nobita", "conan", "aye"];
  res.render("cats", { cats });
});

app.listen(port, () => {
  console.log(`Listening on host http://localhost:${port}`);
});
