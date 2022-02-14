import {category} from '../../../module/category.js'

export const getCategory= async (req, res)=>{
    try {
        const cate= await category.find()
        res.status(200).json(cate)
    }
    catch (err) {
        res.status(500).json({error:err})
    }
}

export const createCategory= async (req, res)=>{
    try {
        const create=req.body
        const cate= new category(create)
        await cate.save()
        res.status(200).json(cate)
    }
    catch (err) {
        res.status(500).json({error:err})
    }
}
export const getUpdateCategory= async (req, res)=>{
    try {
        const id=req.body
        const _id=id.id
        const data=await category.findById(_id)
        res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json({error:err})
    }
}
export const updateCategory= async (req, res)=>{
    try {
        const {id,name}=req.body
        await category.findByIdAndUpdate(id,{name:name})
        res.status(200).json({description:'update thanh cong'})
    }
    catch (err) {
        res.status(500).json({error:err})
    }
}
export const deleteCategory=async(req, res)=>{
    try {
        const id=req.params.id
        await category.delete({_id:id})
        res.status(200).json({description:'delete thanh cong'})
    }
    catch (err) {
        res.status(500).json({error:err})
    }
}