const axios = require('axios');

exports.homeRoutes = (req, res) => {

    // Make a GET request to /api/users
    axios.get('http://localhost:8000/api/users')
    .then(function(response){
        res.render('index',{users: response.data});
    })
    .catch(err => {
        res.send(err)
    })
}

exports.add_user = (req, res) => {
    res.render('adduser');
}

exports.update_user = (req, res) => {
    res.render('updateuser');
}