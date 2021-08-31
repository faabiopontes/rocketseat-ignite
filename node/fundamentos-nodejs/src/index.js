const express = require('express');

const app = express();

// GET - Read 
app.get("/courses", (req, res) => {
  res.json(["Course 1", "Course 2", "Course 3"]);
});

// POST - Create
app.post("/courses", (req, res) => {
  res.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
});

// PUT - Update all
app.put("/courses/:id", (req, res) => {
  res.json(["Course 6", "Course 2", "Course 3", "Course 4"]);
});

// PATCH - Update specific
app.patch("/courses/:id", (req, res) => {
  res.json(["Course 7", "Course 2", "Course 3", "Course 4"]);
});

// DELETE - Delete
app.delete("/courses/:id", (req, res) => {
  res.json(["Course 2", "Course 3", "Course 4"]);
});

app.listen(3333);