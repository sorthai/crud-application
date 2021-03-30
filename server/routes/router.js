const express = require('express');
const route = express.Router();


const services = require('../services/render');


// @description Root Route, @method GET

route.get('/', services.homeRoutes)

// @description Add Users Route, @method GET

route.get('/add-user', services.add_user)

// @description Update Users Route, @method GET

route.get('/updateuser',services.update_user)

module.exports = route