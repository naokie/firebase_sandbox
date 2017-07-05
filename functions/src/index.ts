import * as functions from 'firebase-functions';

export const bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1;
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG'.repeat(hours)}
    </body>
  </html>`);
});

// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
