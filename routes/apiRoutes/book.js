const router = require("express").Router();
const Book = require('../../models/Book')

// /api/book/
router.get("/", async (req, res) => {
  console.log("Book routes");
  const myBooks = await Book.findAll();
  res.json(myBooks);
});

router.get("/:id", async (req, res) => {
  const myBook = await Book.findByPk(req.params.id)
  res.json(myBook);
});

router.post("/", async (req, res) => {
  const book = await Book.create(req.body)
  res.json(book);
});

module.exports = router;
