const parser = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  return bookElements.flatMap(book => {

    const image = 'http://books.toscrape.com/' + book.querySelector('.image_container>a>img').getAttribute('src');
    const title = book.querySelector('h3>a').getAttribute('title');
    const price = book.querySelector('.price_color').textContent;
    const inStock = book.querySelector('.availability').classList.contains('instock');

    const ratingMap = {
      One: 1,
      Two: 2,
      Three: 3,
      Four: 4,
      Five: 5
    };

    const rating = ratingMap[book.querySelector('.star-rating').classList.item(1)];
  
    return {
      image,
      rating,
      title,
      price,
      inStock,
    };
  });
};

module.exports = parser;
