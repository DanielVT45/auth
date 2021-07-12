const express = require("express");
const app = express();
const morgan = require("morgan");
//Settings
app.set("host", "localhost");
app.set("port", 3000);

app.use(express.json());
app.use(morgan());

//Routes
//app.use("/api/v1", require("./api/auth"));
app.use("*", (req, res) => {
  return res.status(200).send("hola");
});

module.exports = app;
