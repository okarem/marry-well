const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {createUser} = require("../models/users");



exports.addUser = (req, res) => {
  console.log(req.body);
  const data = req.body;
  const userName = data.username;
  const password = data.password;
  const confirmedPassword = data.confirmedPassword;



  if (password === confirmedPassword) {

       bcrypt
      .hash(password, 10)
      .then(hash => {
        createUser(userName,hash)
        .then(message=>{console.log(message)})
        .catch(errMessage=>{console.log(errMessage)});
      })
      .catch(err => console.log(err));
  }else{
      res.send("password and confirmed password are not equal");
     
  }
  res.redirect("http://localhost:3000/");
};
