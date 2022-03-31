const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({ origin: "https://rabbolinif.github.io" }));
app.get("/api", (req, res) => res.send("you are connected"));

app.listen(port, (req, res) =>
  console.log(`Server is listening at port : ${port}`)
);
