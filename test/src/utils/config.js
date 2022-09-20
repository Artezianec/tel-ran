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

app.post('/register', (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    db.query('INSERT INTO users (id,username,password,email) VALUES (?,?,?,?)',
        [id, username, password, email],
        (err, result) => {
            console.log(err);
            console.log(result);
        }
    );
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ? AND password = ?',
        [username, password],
        (err, result) => {
            if (err) {
                console.log(err);
                res.send({ err: err })
            }
            if (result) {
                console.log(result);
                res.send(result)
            } else {
                console.log('Wrong username/password');
                res.send({ message: 'Wrong username/password' });
            }
        }
    )
})

app.listen(9000, () => {
    console.log('Server started');
});