import ProductCard from "../product-card/product-card"
import { useSelector } from "react-redux"

const Drinks = () => {
    // let listP = [1,2,3,4,5,6,7,8,9,0]
    let allProduct = useSelector(state => state.user.products.products)
    return (
        <div className="container drinks-product">
            <h2 className="text-center">TẤT CẢ ĐỒ UỐNG TẠI NHÀ HÀNG</h2>
            <ul>
            {allProduct?.map( (item, index) => 
           <li style={{
            display: 'inline-block',
            width: '242px',
            margin: '20px 5px'
           }}>
             <ProductCard 
             item = {item}
           /></li>
            )}
            </ul>
        </div>
    )
}

export default Drinks