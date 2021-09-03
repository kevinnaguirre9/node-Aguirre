import {Router} from 'express'
import * as productCtrl from '../controllers/products.controller'

const router = Router()

router.post('/', productCtrl.createProduct)
router.get('/', productCtrl.getProducts)
router.get('/', productCtrl.getProductById)
router.put('/', productCtrl.updateProductById)
router.delete('/', productCtrl.deleteProduct)

export default router;