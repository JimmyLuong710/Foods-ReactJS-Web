import ProductCard from "../product-card/product-card"
import { useSelector } from "react-redux"

const Foods = () => {
   let allProduct = useSelector(state => state.user.products.products)
    return (
       <div className="container foods-procut">
         <h2 className="text-center">TẤT CẢ ĐỒ ĂN TẠI NHÀ HÀNG</h2>
         <ul>
            {allProduct?.map( (item, index) => 
           <li style={{
            display: 'inline-block',
            width: '242px',
            margin: '20px 5px'
           }}> <ProductCard item ={item} /></li>
            )}
            </ul>
       </div>
    )
}

export default Foods