import ApiService from '../../../api/api.service'
import { Product } from '../models/Product'

class ProductsService {
    createProduct = (product) => {
        return ApiService.create('products', product)
    }

    getProducts = () => {
        return ApiService.getAll('products', Product)
    }

    getProductById = (id) => {
        return ApiService.getById('products', Product, id)
    }

    updateProduct = (product) => {
        return ApiService.update('products', product)
    }

    deleteAllProducts = () => {
        return ApiService.deleteAll('products')
    }

    deleteProduct = (id) => {
        return ApiService.deleteById('products', id)
    }
}

export default Object.freeze(new ProductsService())
