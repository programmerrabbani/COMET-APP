const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const pageRoute = require('./routes/pageRoute');
const expressLayouts = require('express-ejs-layouts');

// environment variable 

const PORT = process.env.SERVER_PORT || 3030;

// init express

const app = express();

// data manage

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// init EJS

app.set( "view engine" , "ejs" );
app.set( "layout" , "layouts/app" );
app.use(expressLayouts);

// static folder

app.use(express.static('./public'));


// init routes

app.use( pageRoute );


// server listen

app.listen( PORT , () =>{

    console.log(` SERVER IS RUNNING ON http://localhost:${ PORT } `.bgMagenta.black);

});
