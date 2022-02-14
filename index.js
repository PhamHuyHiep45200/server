import express from 'express';
import mongoose  from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routerHome from './router/Shop/home.js'
import routerAdmin from './router/admin/index.js'

const app=express();
//middleware
app.use(bodyParser.json({limit:'30mb'}))
app.use(bodyParser.urlencoded({extended: true,limit:'30mb'}))
app.use(cors())

//connect db
const URL='mongodb+srv://huyhiep:huyhiep4520@cluster0.npiwa.mongodb.net/shopHD?retryWrites=true&w=majority'
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('connect to db');
    })
    .catch((err)=>{
        console.log('err',err);
    })
//router
app.use('/admin',routerAdmin)
app.use('/',routerHome)

//connect localhost
const POST=process.env.POST||5000
app.listen(POST,()=>{
    console.log('oke');
})