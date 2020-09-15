const request = require('./lib/request');
const parse = require('./lib/parser');
const store = require('./lib/store');

request()
  .then(document => parse(document))
  .then(books => store(books))
  .then(books => console.log(books.length));
 