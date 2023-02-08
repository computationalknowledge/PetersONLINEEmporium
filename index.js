const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ces.db');

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/help', function (req, res) {
  res.send('HELP FILE')
})

db.serialize(() => {
    db.each("SELECT students.studentname, students.studentid, classes.classid, classes.classdatetime  " + 
            " FROM enrollments, students, classes " +
            "WHERE enrollments.studentid = students.studentid AND classes.classid = enrollments.classid", (err, row) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(row.studentname + " " + row.studentid + " " + row.classid + " " + row.classdatetime);
        }
    });
});

db.close((err) => {
    if (err) {
      console.error(err.message);
    }
});

app.listen(3001)
