import url from './config';

const MongoClient = require('mongodb').MongoClient;

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
