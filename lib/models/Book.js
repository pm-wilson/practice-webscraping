const pool = require('../utils/pool');

class Book {
  id;
  image;
  rating;
  title;
  price;
  inStock;

  constructor(row) {
    this.id = row.id;
    this.image = row.image;
    this.rating = row.rating;
    this.title = row.title;
    this.price = row.price;
    this.inStock = row.in_stock;
  }

  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (image, rating, title, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [book.image, book.rating, book.title, book.price, book.inStock]
    );
  }
}