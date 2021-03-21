const express = require('express');
const { pool } = require('./config');

const app = express();
const port = 8000;

app.get('/api', (req, res) => {
    return pool.query('SELECT * FROM matches', (error, results) => {
        if (error) {
            return res.send(error);
        }
        return res.send(results.rows);
    })
})

app.listen(port, () => {
    console.log(`Example app listing at http://localhost:${port}`)
})