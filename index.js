const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.send("Hello World!"));

app.use('/api/todos', todoRoutes);

app.listen(3000, () => console.log("APP IS RUNNING ON PORT 3000"));