import express from "express";
import { getProductHot,getDeltail,getSearch } from "../../controller/page/home.js";
import {login,register} from "../../controller/login/login.js"

const routerHome=express.Router()

routerHome.get('/search/:name',getSearch)
routerHome.get('/detailProduct/:id',getDeltail)
routerHome.post('/login',login)
routerHome.post('/register',register)
routerHome.get('/',getProductHot)
export default routerHome