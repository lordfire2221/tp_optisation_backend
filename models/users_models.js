const { default: mongoose } = require('mongoose');
const mongodb =require('mongoose');

const UserModel =mongodb.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,require:true},
    permission:{type:Boolean,required:true},
})


module.exports =mongoose.model('Utilisateurs',UserModel);