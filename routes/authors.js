const express = require("express");

const authorsRouter = express.Router();

const authors = [
  {
    name: "J.R.R. Tolkien",
    id: 1,
    born: 1982,
  },
  {
    name: "George R. R. Martin",
    id: 2,
    born: 1948,
  },
  {
    name: "Albert Camus",
    id: 3,
    born: 1960,
  },
  {
    name: "Sylvia Plath",
    id: 4,
    born: 1963,
  },
  {
    name: "Virginia Woolf",
    id: 5,
    born: 1941,
  },
  {
    name: "J.K. Rowling",
    id: 6,
    born: 1965,
  },
];

// CREATE
authorsRouter.post("/", (req, res) => {
  const author = req.body;
  authors.push(author);
  res.json(author);
});

// READ
authorsRouter.get("/", (req, res) => {
  res.json(authors);
});

// UPDATE
authorsRouter.put("/:id", (req, res) => {
  const id = req.params.id;
  const author = req.body;
  const index = authors.findIndex((author) => author.id == id);
  if (index == -1) {
    res.status(404).end("Author not found, unable to update");
    return;
  }
  authors[index] = author;
  res.json(author);
});

// DELETE
authorsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = authors.findIndex((author) => author.id == id);
  if (index == -1) {
    res.status(404).end("Author not found, unable to delete author");
    return;
  }
  authors.splice(index, 1);
  res.json(authors);
});

module.exports = authorsRouter;
