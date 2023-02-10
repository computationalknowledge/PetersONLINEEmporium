const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
app.set('view engine','ejs');app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'pug');
// Finally, render the view file in the route:

app.get('/', function(req, res) {
  res.render('index');
});
app.get('/', (req, res) => {
    res.send(`
    <form action="/form" method="post">
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="age" placeholder="Age" />
      <input type="submit" value="Submit" />
    </form>
  `);
});

// Create a route for POST requests
app.post('/form', function(req, res) {
    // Retrieve form data from request body
    const name = req.body.name;
    const age = req.body.age;
  
    // Send back a response
    res.send(`Hello, ${name}. You are ${age} years old.`);
  });

  // Assign port
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
