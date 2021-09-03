import Product from '../models/Product'

export const createProduct = async (req, res) => {
     const {name, category, price, imgUrl} = req.body;
     const newProduct = new Product({name, category, price, imgUrl})
     const productSaved = await newProduct.save()
     res.status(201).json(productSaved)

}

export const getProducts = async (req, res) => {
     const products = await Product.find();
     res.json(products)
}

export const getProductById = async (req, res) => {
     const {productId} = req.params;
     const productFound = await Product.findById(productId);
     res.json(productFound)
}

export const updateProductById = async (req, res) => {
     const {productId} = req.params;
     const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, {
          new: true
     });
     res.json(updatedProduct)
}

export const deleteProduct = async (req, res) => {
     const {productId} = req.params;
     await Product.findByIdAndDelete(productId)
     res.json('Product deleted successfully')
}