
import {product} from '../../../module/product.js'

export const getShow= async (req,res)=>{
    try{
        const data=await product.find()
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({erro:err})
    }
}

export const createProduct= async(req,res)=>{
    try{
        const create=req.body
        const data= new product(create)
        await data.save()
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({erro:err})
    }
}

export const getUpdateProduct= async(req,res)=>{
    try{
        const id=req.params.id
        const data=await product.find({_id:id})
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({erro:err})
    }
}

export const updateProduct= async(req,res)=>{
    try{
        const id=req.params.id
        const datas=req.body
        const data=await product.findByIdAndUpdate(id,{
        name:datas.name,
        img:datas.img,
        price:datas.price,
        sale:datas.sale,
        quantity:datas.quantity,
        tym:datas.tym,
        category:datas.category,
        description:datas.description,
        screen:datas.screen,
        chip:datas.chip,
        ram:datas.ram,
        rom:datas.rom,
        camera:datas.camera,
        pin:datas.pin,
        })
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({erro:err})
    }
}
export const deleteProduct= async(req,res)=>{
    try{
        const {id}=req.body
        const data=await product.delete({_id:id})
        res.status(200).json({description:'xóa thành công'})
    }
    catch(err){
        res.status(500).json({erro:err})
    }
}