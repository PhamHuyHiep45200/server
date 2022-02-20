import {cart} from '../../module/cart.js'

export const addProCart=async (req,res)=>{
    const data=req.body
    const checkPro=await cart.findOne({proID:data.proID})
    if(checkPro){
        return res.json({success:false,description:'Sản phẩm đã có trong giỏ hàng!'})
    }
    const addCart= new cart(data)
    await addCart.save()
    res.status(200).json({success:true,description:'Đã thêm sản phẩm vào giỏ hàng'})
}

export const getCart=async (req,res)=>{
    const id=req.params.id
    const data=await cart.find({idUserCart:id})
    res.status(200).json(data)
}