// nodemon helps us in restarting out server whenever we make a change
// We made this change in package.json file of node modules

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');


const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

// log requests using morgan module
app.use(morgan('tiny'));

app.get('/', (req,res) => {
    res.send("Crud Application");
})

app.listen(PORT, () => (console.log(`Server is running on http://localhost:${PORT}`)))