import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// import Home from '../components/Home';
import App from '../containers/App/App';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  const content = renderToString(<App />);

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

