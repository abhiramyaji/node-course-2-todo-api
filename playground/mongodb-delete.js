const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err){
        return console.log('Unable to connect to MongoDb server');
     }
     console.log('Connected to MongoDb server');
//   db.collection('Todos').deleteMany({text:'Eat dinner'}).then((result)=>{
//       console.log(result);
//   });

// db.collection('Todos').deleteOne({text:'Eat dinner'}).then((result)=>{
//       console.log(result);
//   });

// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//       console.log(result);
//   });
   db.collection('Users').deleteMany({name:'Geethu'});

  db.collection('Todos').findOneAndDelete({
      _id:new ObjectID("5c9b68a79ce28621549c0829")}).then((result)=>{
      console.log(JSON.stringify(result,undefined,2));
    
  });



// db.close();
});