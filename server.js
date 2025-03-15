const express = require('express');
const User = require('./question5.js/user'); // import user model

const app = express();
const PORT = 3000;

// middleware to parse JSON requests
app.use(express.json());

// route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

// start the server
app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});