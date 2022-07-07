import ProductCard from "../product-card/product-card"

const Foods = () => {
    let listP = [1,2,3,4,5,6,7,8,9,0]
    return (
       <div className="container foods-procut">
         <h2 className="text-center">TẤT CẢ ĐỒ ĂN TẠI NHÀ HÀNG</h2>
         <ul>
            {listP.map( (item, index) => 
           <li style={{
            display: 'inline-block',
            width: '242px',
            margin: '20px 5px'
           }}> <ProductCard /></li>
            )}
            </ul>
       </div>
    )
}

export default Foods