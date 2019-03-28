const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
     if(err){
        return console.log('Unable to connect to MongoDb server');
     }
     console.log('Connected to MongoDb server');

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c9b6af82ec44fe0043bb592')
// },{
//     $set: {
//         completed: true
//     }
// }, {
//     returnOriginal: false
// }).then((result)=>{
//     console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c9b68d9b556ea3c544961d6')
},{
    $set: {
        name: 'Adwaith'
    },
    $inc : {
        age:1
    }
}, {
    returnOriginal: false
}).then((result)=>{
    console.log(result);
});
});

