const request = require('../lib/request');

describe('request function', () => {
  it('makes a request to the book scraper page and returns html', async() => {
    const document = await request(1);
    expect(document.querySelector('.active').textContent)
      .toEqual('All products');
  });
});
