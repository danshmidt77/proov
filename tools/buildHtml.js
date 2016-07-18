import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';
import assets from '../dist/assets.json';
/*eslint-disable no-console*/

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup); //cheerio creates in-mempory DOM which we can query
  $('head').prepend(`<link rel="stylesheet" href="${assets.main.css}">`);
  $('body').append(`<script src="${assets.main.js}"></script>`);
  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if(err) {
      return console.log(err);
    }
    console.log('index.html writtern to /dist'.green);
  });
});
