//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err)
  {
    return console.log('Unable to connect to mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // db.collection('Todos').find().count().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch todos.', err);
  // });
  db.collection('User').find({name:'Devanshu'}).toArray().then((names)=>{
    console.log('Users with name Devanshu');
    console.log(JSON.stringify(names, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch users.', err);
  });

  // db.close();
});
