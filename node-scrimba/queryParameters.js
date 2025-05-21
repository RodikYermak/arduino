import http from 'node:http';

const server = http.createServer((req, res) => {
    const urlObj = new URL(req.url, `http://${req.headers.host}`);

    const queryObj = Object.fromEntries(urlObj.searchParams);

    console.log(queryObj);
});

server.listen(8000, () => console.log('Server listening on port 8000'));
