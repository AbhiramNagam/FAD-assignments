const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

const usersFilePath = path.join(__dirname, 'users.json');


const getUsers = () => {
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath);
        return JSON.parse(data);
    }
    return [];
};

const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

app.post('/register', (req, res) => {
    const { username, password, email, fullname } = req.body;
    let users = getUsers();

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'User already exists!' });
    }

    users.push({ username, password, email, fullname });
    saveUsers(users);

    res.status(201).json({ message: 'User registered successfully!' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    let users = getUsers();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful', username: user.username });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

const port=3000
app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});

app.get('/users', (req, res) => {
    const { username } = req.query;
    const users = getUsers();
    const user = users.find(u => u.username === username);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json(null);
    }
});
