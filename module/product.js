import mongoose from 'mongoose';
import mongoose_delete from 'mongoose-delete';

const productSchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    sale:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
    },
    tym:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    screen:{
        type: String,
        required: true,
    },
    chip:{
        type: String,
        required: true,
    },
    ram:{
        type: String,
        required: true,
    },
    rom:{
        type: String,
        required: true,
    },
    camera:{
        type: String,
        required: true,
    },
    pin:{
        type: String,
        required: true,
    }
},{timestamps:true})

productSchema.plugin(mongoose_delete,
    { overrideMethods: 'all' ,
    deletedAt : true
    }
);

export const product=mongoose.model('product',productSchema)