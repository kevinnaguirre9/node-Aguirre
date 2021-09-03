import {Router} from 'express'
import * as productCtrl from '../controllers/products.controller'
import {verifyToken} from '../middlewares'

const router = Router()

router.post('/', verifyToken, productCtrl.createProduct)
router.get('/', productCtrl.getProducts)
router.get('/:productId', productCtrl.getProductById)
router.put('/:productId', verifyToken, productCtrl.updateProductById)
router.delete('/:productId', verifyToken, productCtrl.deleteProduct)

export default router;