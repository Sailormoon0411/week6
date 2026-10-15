const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const books = [
  { id: 1, title: "1984", author: "George Orwell", genre: "Science Fiction", year: 1949 },
  { id: 2, title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Science Fiction", year: 1953 },
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen", genre: "Literature", year: 1813 },
  { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Literature", year: 1925 },
  { id: 5, title: "A Brief History of Time", author: "Stephen Hawking", genre: "History", year: 1988 }
];

// html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// all book
app.get("/data", (req, res) => {
  res.json(books);
});

// single book
app.get("/data/:bookId", (req, res) => {
  const bookId = Number(req.params.bookId);
  const book = books.find(book => book.id == bookId);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
