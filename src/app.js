const routes = require('./routes')
const sequelize = require('./db/models/index')
// Set express as Node.js web application 
// server framework. 
  
// Install it using 'npm install express' command 
// and require like this:
var express = require('express'); 
var app = express(); 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', `${__dirname}/views`);
// Set EJS as templating engine 
app.set('view engine', 'ejs'); 
  
app.use(routes)

    
// Server setup
app.listen(3000, function(req, res) {
  console.log("Servidor escutando na porta 3000");
});

