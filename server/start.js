import path from 'path';
import express from 'express';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();

const PORT = 3002;

app.use(express.static('./build'));

app.get('/*', (req, res) => {
  const appSite = ReactDOMServer.renderToString(<App />);

  const indexFile = path.resolve('./build/index.html');

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.log(`This is the error: ${err}`);
      return res.status(500).send('We found an error.')
    } else {
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${appSite}</div>`)
      )
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listenining on ${PORT}`)
})