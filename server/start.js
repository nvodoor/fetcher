import path from 'path';
import express from 'express';
import fs from 'fs';
import axios from 'axios';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import morgan from 'morgan';

const app = express();

const PORT = 3002;

app.use(express.static('./build'));
app.use(morgan());

app.get('/repos/:username', (req, res) => {
  const { username } = req.params;
  axios.get(`https://api.github.com/users/${username}/repos`)
    .then((response) => {
      return response.data
    })
    .then((repos) => {
      res.send(repos)
    })
    .catch(err => res.status(500).send(err))
})

app.get('/*', (req, res) => {

  axios.get('https://api.github.com/users/amazon/repos')
  .then((response) => {
    return response.data
  })
  .then((repos) => {
    const appSite = ReactDOMServer.renderToString(<App repos={repos}/>);

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

})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})