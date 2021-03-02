const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/';
const dbName = 'blog';

const connect = (cb) => {
  MongoClient.connect(url, (err, client) => {
    if (err) {
      console.log('connection failed', err);
    } else {
      const db = client.db(dbName);
      cb && cb(db);
      client.close();
    }
  });
};

module.exports = {
  connect,
};
