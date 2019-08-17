//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err)
  {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID("5d57d7f65a13733a0369b0e9")
  },{
    $set:{
      completed : false
    }
  },{
    returnOriginal : false
  }).then((result)=>{
    console.log(result);
  });

  // db.close();
});
