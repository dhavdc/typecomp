const mongo = require('mongodb').MongoClient;


const url = 'mongodb://localhost:27017';

mongo.connect(url, (err, client) => {
    if (err) {
      console.error(err);
      return;
    }
    //...
  });



module.exports = { mongo };
