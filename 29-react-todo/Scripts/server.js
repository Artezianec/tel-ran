const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Dregonl1',
    database: 'test'
});

app.post('/newtask', (req, res) => {
    const task = req.body.task;

    db.query('INSERT INTO tasks (task) VALUES (?)',
        [task],
        (err, result) => {
            console.log(err);
            console.log(result);
        }
    );
});

app.listen(9000, () => {
    console.log('Server started');
});