const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'TranxHub'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database');
});

// API endpoint to retrieve transcript data based on user inputs
app.get('/transcript', (req, res) => {
  const { faculty, department, year } = req.query;

  // Construct the SQL query based on user inputs
  const sqlQuery = `
    SELECT *
    FROM STUDENTS
    WHERE COURSE_TITLE = ? AND COURSE_UNIT = ?
  `;

  // Execute the SQL query
  db.query(sqlQuery, [department, year], (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving transcript data');
      throw err;
    }

    // Calculate GPA (average grade)
    const gpa = results.reduce((total, current) => total + current.GRADE, 0) / results.length;

    // Send the transcript data and GPA as JSON response
    res.json({
      transcript: results,
      gpa: gpa.toFixed(2) // Round GPA to 2 decimal places
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
