import mongoose from 'mongoose'

const cartSchema =mongoose.Schema({
    proID:{
        type:String,
        required: true,
    },
    nameCart:{
        type: String,
        required: true,
    },
    imgCart:{
        type: String,
        required: true,
    },
    // typeCart:{
    //     type: String,
    //     required: true,
    // },
    priceCart:{
        type: String,
        required: true,
    },
    quantityCart:{
        type: Number,
        required: true,
    },
    idUserCart:{
        type: String,
        required: true,
    },
},{timestamps:true})

export const cart=mongoose.model('cart',cartSchema)