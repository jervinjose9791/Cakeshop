const express=require('express');
const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://mvk14355:HXOv4I0C2Vaqo7xj@cluster0.xaqdnww.mongodb.net/Cake')
.then(()=>console.log('MongoDB is connected'))
.catch(err=>console.log(err))

const authSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobileNo:{
        type:Number
    },
    password:{
        type:String
    }


})


const authModel=mongoose.model('auth',authSchema);
module.exports=authModel;