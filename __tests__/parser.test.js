const request = require('../lib/request');
const parser = require('../lib/parser');

describe('parser function', () => {
  it('returns an array of all book image, rating, title, price, in stock', async () => {
    const document = await request(1);
    const bookInfo = parser(document);

    expect(bookInfo).toEqual(expect.arrayContaining([
      { 
        image: 'http://books.toscrape.com/../media/cache/2c/da/2cdad67c44b002e7ead0cc35693c0e8b.jpg', 
        rating: 3, 
        title: 'A Light in the Attic', 
        price: '£51.77', 
        inStock: true
      }
    ]));
  });
});
