import './manageProduct.scss'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import {MdDelete} from 'react-icons/md'
import {GiPencil} from 'react-icons/gi'
import {IoMdAddCircleOutline} from 'react-icons/io'
import Modal from "react-modal";
import { useState } from "react";
import { getAllProducts } from '../../redux/apiRequests'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/apiRequests'

const customStyles = {
  content: {
    margin: "auto auto",
    width: "800px",
    height: "530px",
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.5)'
  }
};

const ManageProduct = () => {
    
    let lisTProducts = useSelector(state => state.user.products.products)
    const dispatch = useDispatch()
    let [productInfo, setProductInfo] = useState({
      productName: "",
      price: "",
      type: "",
      status: "",
      description: "",
      image: ""
    });
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    };
 
    const onProductInfoChange = (e, key) => {
      if(key === 'image') {
        setProductInfo({
          ...productInfo,
          [key]: e.target.files[0].name
        })
      } else {
        setProductInfo({
          ...productInfo,
          [key]: e.target.value,
        })
      }
    }
    const handleUpdateProduct = () => {

    }
    const handleDeleteProduct = () => {

    }
    const handleAddNewProduct = () => {
      let product = productInfo
      addProduct(product)
    }

    useEffect( () => {
      getAllProducts('vinh',dispatch)
    },[])
    return (  <>
        <Header />
        <div class="container mt-5 mb-5 management-products">
           <div className='title'>
           <span  onClick={openModal}><IoMdAddCircleOutline /> Thêm sản phẩm</span>
           <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 className="text-center">THÊM SẢN PHẨM MỚI</h2>
            <span className='btn-close-modal'
             onClick={closeModal}
            style={{
              position: 'absolute',
              fontSize: '25px',
              right: '10px',
              top: '-5px',
              padding: '3px',
              cursor: 'pointer',
              color: 'red'
            }}>x</span>
            <form>
              <div className="row">
                <div className="col-6 mb-3 mt-3">
                  <label>Tên sản phẩm</label>
                  <input type="text" className="form-control" 
                    value={productInfo.productName}
                    onChange={(e) => onProductInfoChange(e, 'productName')}
                  />
                </div>
                <div className="col-6 mt-3 mb-3">
                  <label>Gía (vnđ): </label>
                  <input type="number" className="form-control"
                   value={productInfo.price}
                   onChange={(e) => onProductInfoChange(e, 'price')}
                    />
                </div>
                <div className="col-6 mt-3 mb-3">
                  <label>Loại sản phẩm: </label>
                  <input type="text" className="form-control" 
                   value={productInfo.type}
                   onChange={(e) => onProductInfoChange(e, 'type')}
                   />
                </div>
                <div className="col-6 mt-3 mb-3">
                  <label>Tính trạng: </label>
                  <input type="text" className="form-control" 
                   value={productInfo.status}
                   onChange={(e) => onProductInfoChange(e, 'status')}
                  />
                </div>
                <div className="col-6 mt-3 mb-3">
                  <label>Mô tả sản phẩm:</label>
                  <textarea  rows="4" cols="47" 
                   value={productInfo.description}
                   onChange={(e) => onProductInfoChange(e, 'description')}
                   />
                </div>
                <div className="col-6 mt-3 mb-3">
                  <label>Ảnh sản phẩm:</label>
                  <input type="file" className="form-control" 
                   onChange={(e) => onProductInfoChange(e, 'image')}
                   />
                </div>
              </div>
            </form>
            <div className="submit-btn text-end mt-5">
                <button className="btn btn-primary" onClick={handleAddNewProduct}>
                  Hoàn tất
                </button>
              </div>
          </Modal>
           <h3 className=''>QUẢN LÝ SẢN PHẨM</h3>
           </div>

  <table class="table table-hover text-center">
    <thead>
      <tr>
      <th>Sản phẩm</th>
        <th>Giá</th>
        <th>Loại</th>
        <th>Tính trạng</th>
        <th>Mô tả</th>
        <th>Thao tác</th>
      </tr>
    </thead>
    <tbody>
        {lisTProducts?.map((item, index) => 
        <tr key={index}>
            <td style={{width: '30%'}}>
             <div className='img-product'>
             <img src="http://localhost:8000/vinh.jpg" />
             </div>
              <p className='product-name'> {item.productName} </p>
               </td>
            <td style={{width: '10%'}}>{item.price}</td>
            <td style={{width: '10%'}}>{item.type}</td>
            <td style={{width: '10%'}}>{item.status} </td>
            <td style={{width: '30%'}}>{item.description}</td>
            <td style={{width: '10%'}}> <GiPencil className='pencil' onClick={(e) => handleUpdateProduct()}/>
             <MdDelete className='bin'onClick={(e) => handleDeleteProduct()}/></td>
        </tr>
        )}
    </tbody>
  </table>
</div>
<Footer />
</>
    )
}

export default ManageProduct
