const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello World Ignite" });
});

app.listen(3333);