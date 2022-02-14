import express from 'express';
import { getShow,deleteProduct,createProduct,getUpdateProduct,updateProduct } from '../../controller/admin/product/index.js';
import { getCategory,createCategory,getUpdateCategory,deleteCategory ,updateCategory} from '../../controller/admin/category/index.js';

const routerAdmin =express.Router()

//category
routerAdmin.get('/category',getCategory)
routerAdmin.post('/category/getUpdate',getUpdateCategory)
routerAdmin.post('/category/update',updateCategory)
routerAdmin.get('/category/delete/:id',deleteCategory)
routerAdmin.post('/category',createCategory)

//product
routerAdmin.post('/deleteProduct',deleteProduct)
routerAdmin.get('/updateProduct/:id',getUpdateProduct)
routerAdmin.post('/updateProduct/:id',updateProduct)
routerAdmin.post('/product',createProduct)
routerAdmin.get('/',getShow)


export default routerAdmin