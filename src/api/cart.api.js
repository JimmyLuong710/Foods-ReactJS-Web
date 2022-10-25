import { AxiosAuth } from "../services/AxiosService";

 const addToCart = async (product, quantityAdded) => {
    let {data} = await AxiosAuth.post('/cart', {product, quantityAdded})
    return data
 };

 const getCart = async () => {
    let {data} = await AxiosAuth.post('/cart')
    return data
 };

 const updateProductInCart = async (productId) => {
    let {data} = await AxiosAuth.post(`/cart/products/${productId}`)
    return data
 };

 const deleteProductInCart = async (productId) => {
    let {data} = await AxiosAuth.post(`/cart/products/${productId}`)
    return data
 };

const deleteCart = async () => {

}

const cartAPI = {
    getCart,
    addToCart,
    updateProductInCart,
    deleteProductInCart,
    deleteCart
}

export default cartAPI
