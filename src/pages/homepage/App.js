import './App.scss';
import  Header from '../../components/header/header';
import Product from './product'
import Jumbotron from './jumbotron'
import ProductsOverRate from './productsOverRate'
import Members from './member';
import Footer from '../../components/footer/footer'
import Foods from '../../components/foods/foods';
import Drinks from '../../components/drinks/drinks';
import { useState, useEffect } from 'react';
import Nav from './nav';
import { getAllProducts } from '../../redux/apiRequests';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../redux/slice/authSlice';
import createAxiosJWT from '../../axiosJWT';

const App = () => {

 let [activeOn, setActiveOn] = useState('home')
//  let allProduct = useSelector(state => state.user.products.products)
let user = useSelector(state => state.auth.login.user)
 let dispatch = useDispatch()
 let axiosJWT = createAxiosJWT(user, dispatch, loginSuccess)
 useEffect( () => {
  getAllProducts(dispatch)
 }, [])
  return (
    <div>
      <Header 
      />
      <Nav 
     setActiveOn = {setActiveOn}
     />
      {activeOn === 'home' &&
    <>
    <Jumbotron />
      <Product />
      <ProductsOverRate />
      <Members />
    </>  
    }
    {activeOn === 'drinks' && 
    <Drinks />
    }
    {activeOn === 'foods' && 
    <Foods />
    }
      <Footer />
    </div>
  )
}

export default App;