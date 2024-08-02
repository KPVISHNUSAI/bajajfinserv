const Data = require('../models/Data');

exports.handlePostRequest = (req, res) => {
    const { data } = req.body;
    if (!data) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]$/.test(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

    const response = {
        is_success: true,
        user_id: 'your_fullname_ddmmyyyy', // replace with actual data
        email: 'your_email@domain.com',   // replace with actual data
        roll_number: 'your_roll_number',  // replace with actual data
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    };

    res.status(200).json(response);
};

exports.handleGetRequest = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};
