const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove({_id:'5c9da0b12ec44fe0043c14d8'}).then((todo)=>{
//     console.log(todo);
// });


Todo.findByIdAndRemove('5c9da0332ec44fe0043c14b0').then((todo)=>{
    console.log(todo);
});