const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.cookies.usr) {
    jwt.verify(req.cookies.usr, process.env.JWT_SECRET, function(err, decoded) {
      if (err) {
        res.local.error = err;
        return next();
      }

      res.locals.signedIn = true;
      res.locals.user = decoded;
      next();
    });
  } else {
    res.locals.signedIn = false;
    res.locals.user = null;

    next();
  }
};
