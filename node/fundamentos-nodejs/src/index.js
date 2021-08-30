const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello World Ignite3" });
});

app.listen(3333);