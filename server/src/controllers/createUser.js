const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = (req, res) => {
    console.log(req.body);
    const data = req.body;
    const userName = data.username;
    const password = data.password;
    const confirmedPassword = data.confirmedPassword;
    
    console.log(userName);
    console.log(password);

    res.send('hi');
}