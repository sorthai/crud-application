exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.add_user = (req, res) => {
    res.render('adduser');
}

exports.update_user = (req, res) => {
    res.render('updateuser');
}