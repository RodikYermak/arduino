// import http from 'node:http';

// const server = http.createServer((req, res) => {
//     console.log('server accessed');
//     res.end('<html><body>Hello Rodion</body></html>');
// });

// server.listen(8000, () => console.log('listening 8000'));

// console.log('Hello');

import express from 'express';

const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`server connected to port ${PORT}`));
