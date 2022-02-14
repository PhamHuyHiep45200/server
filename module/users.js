import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    thumbnail:{
        type: String,
        default: ''
    },
},{timestamps:true})

export const user=mongoose.model('user',userSchema)