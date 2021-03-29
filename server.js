// nodemon helps us in restarting out server whenever we make a change
// We made this change in package.json file of node modules

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// log requests using morgan module
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// set view engine
app.set("view engine", "ejs")
// use the below one if you are using an ejs folder inside views
// app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
// now you just need to write css/style.css to access the style.css file

app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.get('/', (req,res) => {
    res.render('index');
})

app.get('/add-user', (req,res) => {
    res.render('adduser');
})

app.get('/updateuser', (req,res) => {
    res.render('updateuser');
})

app.listen(PORT, () => (console.log(`Server is running on http://localhost:${PORT}`)))