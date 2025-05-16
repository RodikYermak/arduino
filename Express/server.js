// import http from 'node:http';

// const server = http.createServer((req, res) => {
//     console.log('server accessed');
//     res.end('<html><body>Hello Rodion</body></html>');
// });

// server.listen(8000, () => console.log('listening 8000'));

// console.log('Hello');

import express from 'express';
import { startups } from './data/data.js';

const PORT = 8000;

// const celebrity = {
//     type: 'action hero',
//     name: 'JSON Statham',
// };

const app = express();

// console.log(app);
app.get('/', (req, res) => {
    // res.json(celebrity);
    res.json(startups);
});

app.listen(PORT, () => console.log(`server connected to port ${PORT}`));
