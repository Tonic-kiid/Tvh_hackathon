const express = require('express');
const db = require('./db');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define routes
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // Route to get all users
// app.get('/users', (req, res) => {
//   const sql = 'SELECT * FROM users';
//   db.query(sql, (err, results) => {
//     if (err) throw err;
//     res.json(results);
//   });
// });

// // Route to add a user
// app.post('/users', (req, res) => {
//   const newUser = req.body;
//   const sql = 'INSERT INTO users SET ?';
//   db.query(sql, newUser, (err, result) => {
//     if (err) throw err;
//     res.json({ id: result.insertId, ...newUser });
//   });
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
