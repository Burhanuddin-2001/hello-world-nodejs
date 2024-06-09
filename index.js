const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Addition route (POST)
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).send({ error: 'Both a and b should be numbers' });
    }
    const result = a + b;
    res.send({ result });
});

// Addition route (GET)
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).send({ error: 'Both a and b should be numbers' });
    }
    const result = numA + numB;
    res.send({ result });
});

// Subtraction route (POST)
app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).send({ error: 'Both a and b should be numbers' });
    }
    const result = a - b;
    res.send({ result });
});

// Subtraction route (GET)
app.get('/subtract', (req, res) => {
    const { a, b } = req.query;
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
        return res.status(400).send({ error: 'Both a and b should be numbers' });
    }
    const result = numA - numB;
    res.send({ result });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} else {
    module.exports = app;
}
