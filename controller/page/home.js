import {product} from '../../module/product.js'

export const getProductHot= async (req, res)=>{
    try {
        const data=await product.find().limit(10)
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({erro:err});
    }
}

export const getDeltail= async (req, res)=>{
    try {
        const id=req.params.id
        const data= await product.find({_id:id})
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({erro:err});
    }
}

export const getSearch= async (req, res)=>{
    try {
        const name=req.params.name
        const data= await product.find({name:{ $regex: '.*' + name + '.*' } })
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({erro:err});
    }
}