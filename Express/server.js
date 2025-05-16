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

const app = express();

app.get('/api', (req, res) => {
    let filteredData = startups;

    const { industry, country, continent, is_seeking_funding, has_mvp } = req.query;

    if (industry) {
        filteredData = filteredData.filter(
            (startup) => startup.industry.toLowerCase() === industry.toLowerCase()
        );
    }

    if (country) {
        filteredData = filteredData.filter(
            (startup) => startup.country.toLowerCase() === country.toLowerCase()
        );
    }

    if (continent) {
        filteredData = filteredData.filter(
            (startup) => startup.continent.toLowerCase() === continent.toLowerCase()
        );
    }

    if (is_seeking_funding) {
        filteredData = filteredData.filter(
            (startup) => startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLowerCase())
        );
    }

    if (has_mvp) {
        filteredData = filteredData.filter(
            (startup) => startup.has_mvp === JSON.parse(has_mvp.toLowerCase())
        );
    }

    res.json(filteredData);
});

app.get('/api/:field/:term', (req, res) => {
    const { field, term } = req.params;

    const allowedFields = ['country', 'continent', 'industry'];

    if (!allowedFields.includes(field)) {
        return res.status(400).json({
            message: "Search field not allowed. Please use only 'country', 'continent', 'industry'",
        });
    }

    const filteredData = startups.filter(
        (startup) => startup[field].toLowerCase() === term.toLowerCase()
    );

    res.json(filteredData);
});

app.listen(PORT, () => console.log(`server connected to port ${PORT}`));
