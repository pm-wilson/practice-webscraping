const parser = document => {
  const bookElements = [...document.querySelectorAll('.product_pod')];

  return bookElements.flatMap(book => {

    const image = 'http://books.toscrape.com/' + book.querySelector('.image_container>a>img').getAttribute('src');
    let rating = 0;
    const title = book.querySelector('h3>a').getAttribute('title');
    const price = book.querySelector('.price_color').textContent;
    const inStock = book.querySelector('.availability').classList.contains('instock');

    if(book.querySelector('.star-rating').classList.contains('One')) {
      rating = 1;
    } else if(book.querySelector('.star-rating').classList.contains('Two')) {
      rating = 2;
    } else if(book.querySelector('.star-rating').classList.contains('Three')) {
      rating = 3;
    } else if(book.querySelector('.star-rating').classList.contains('Four')) {
      rating = 4;
    } else if(book.querySelector('.star-rating').classList.contains('Five')) {
      rating = 5;
    }

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
