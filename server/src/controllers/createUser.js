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
        .then(() => res.redirect("http://localhost:3000/Budget"))
        .then(() => res.redirect("http://localhost:3000/Stuff"))
        .catch(() => res.redirect("http://localhost:3000/Error"));
      
      })
      .catch(() => res.redirect("http://localhost:3000/Error"));
  }else{
      res.redirect("http://localhost:3000/Error");
     
  }
};
