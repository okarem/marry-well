const dbConnection = require('../database/db_connection');


    exports.addGuests = (name, city, gender, status,cb) => {
        userId=3;
        dbConnection.query(
            'INSERT INTO guests (userId,name, city, gender, status) VALUES ($1,$2,$3,$4,$5)',
             [userId, name, city, gender, status],
             err =>{
            if (err) {
                return cb(err);
            }
            return cb(null, "Guest added");
          });
      };


            