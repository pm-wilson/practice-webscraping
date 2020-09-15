const fs = require('fs');
const pool = require('../utils/pool');
const store = require('../lib/store');

describe('store function', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('takes an array of books and saves them to the database', async() => {
    const books = [
      {
        image: 'image url',
        rating: 3,
        title: 'A Book Title',
        price: 'pice as string',
        inStock: true,
      },
      {
        image: 'image url',
        rating: 3,
        title: 'A Book Title',
        price: 'pice as string',
        inStock: true,
      }
    ];

    await store(books);

    const { rows } = await pool.query('SELECT * FROM books');

    expect(rows).toHaveLength(2);
  });
});
