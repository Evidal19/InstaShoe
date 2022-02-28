const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path= require("path");
// multer
const multer = require('multer');
const bodyparser = require('body-parser');

// set up handlebars as template of choice
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

const hbs = exphbs.create({});

// handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
