const express = require('express');//import sa express
const app = express();//creating express app
const port = 3000;//port


//route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Caleb Micah P. Guinto' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});