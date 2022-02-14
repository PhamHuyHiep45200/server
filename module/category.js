import mongoose from 'mongoose'
import mongoose_delete from 'mongoose-delete';

const categorySchema=mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
},{timestamps:true});
categorySchema.plugin(mongoose_delete,
    { overrideMethods: 'all' ,
    deletedAt : true
    }
);
export const category=mongoose.model('category',categorySchema);