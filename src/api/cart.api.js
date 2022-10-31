import { AxiosAuth } from "../services/AxiosService";

 const addToCart = async (product, quantityAdded) => {
    let {data} = await AxiosAuth.post('/cart', {product, quantityAdded})
    return data
 };

 const getCart = async () => {
    let {data} = await AxiosAuth.get('/cart')
    return data
 };

 const updateProductInCart = async (productId, product) => {
    let {data} = await AxiosAuth.put(`/cart/${productId}`, product)
    return data
 };

 const deleteProductInCart = async (productId) => {
    let {data} = await AxiosAuth.delete(`/cart/${productId}`)
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
