const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { connectDB } = require('./config/database');
const router = require('./routes/index');

const app = express();

const startServer = async () => {
  const port = 5000;

  app.use(express.json());
  app.use(cors());

  connectDB();

  app.use('/campus', router);
  // Create a MySQL connection pool
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '789456123',
    database: 'school',
  });

  app.get('/', function (req, res) {
    res.send("API is working");
  })
  // Endpoint to get all student records
  app.get('/students', (req, res) => {
    pool.query('SELECT * FROM tb_student', (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json(results);
    });
  });

  app.get('/attendance', (req, res) => {
    pool.query('SELECT * FROM tb_class', (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json(results);
    });
  });

  // Endpoint to get attendance data for a specific class
  app.get('/attendance/:className', (req, res) => {
    const className = req.params.className;
    pool.query(`SELECT ${className}.id, username FROM tb_student, ${className} where stud_id = tb_student.id`, (error, results) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json(results);
    });
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

}
startServer();
// mongodb+srv://campus:5IUAVAAIX9EZnXiO@cluster0.mhgww.mongodb.net/?