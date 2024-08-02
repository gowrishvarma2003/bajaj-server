const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/operation_code', (req, res) => {
    res.json({
        operation_code: 'ABC123'
    });
});

app.post('/api/data', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({
            is_success: false,
            message: 'Invalid input'
        });
    }

    const userId = 'john_doe_17091999';
    const email = 'john@xyz.com';
    const rollNumber = 'ABCD123';

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && typeof item === 'string');
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort()[alphabets.length - 1]] : [];

    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
