const express = require('express');
const mysql = require('mysql');
const habitRoutes = require('./routes/habitRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'habit_tracker'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.use('/api/habits', habitRoutes(db));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});