const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded());
require("dotenv").config();
const db = require("./database/connect");
const { User } = require("./database/models");

const PORT = 3001;
app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  User.create({ username, password, avatarImgUrl: "hmm" });
  res.end();
});

app.listen(process.env.PORT || PORT, () => {
  db.sync({ force: true });
  console.log(`Now listening on port http://localhost:${PORT}`);
});
