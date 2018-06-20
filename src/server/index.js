import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../Routes';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>,
  );

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="app">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});

