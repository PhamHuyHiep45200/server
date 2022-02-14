import {user} from '../../module/users.js'

export const login=async(req,res)=>{
    try {
        const datalogin=req.body
        console.log(datalogin);
        const data =await user.findOne({email:datalogin.email})
        console.log(data);
        if(!data){
            return res.status(200).json({success:false,description:'Note: Vui lòng kiểm tra lại Email và PassWord!'})
        }
        if(data.password!=datalogin.password){
            return res.status(200).json({success:false,description:'Note: Vui lòng kiểm tra lại Email và PassWord!'})
        }
        res.status(200).json({success:true})
    }
    catch (err) {
        console.log({erro:err});
    }
}

export const register=async(req,res)=>{
    try {
        const dataRegister=req.body
        const data =await user.findOne({email:dataRegister.email})
        if(data){
            return res.status(200).json({success:false,description:'Note: Email này đã có người sử dụng!'})
        }
        const register=user(dataRegister)
        await register.save()
        res.status(200).json({success:true,description:'Đăng kí thành công'})
    }
    catch (err) {
        console.log({erro:err});
    }
}