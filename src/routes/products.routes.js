import {Router} from 'express'
import * as productCtrl from '../controllers/products.controller'
import {authJwt} from '../middlewares'

const router = Router()

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productCtrl.createProduct)
router.get('/', productCtrl.getProducts)
router.get('/:productId', productCtrl.getProductById)
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.updateProductById)
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productCtrl.deleteProduct)

export default router;