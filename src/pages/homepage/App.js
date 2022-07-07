import './App.scss';
import  Header from '../../components/header/header';
import Product from './product'
import Jumbotron from './jumbotron'
import ProductsOverRate from './productsOverRate'
import Members from './member';
import Footer from '../../components/footer/footer'
import Foods from '../../components/foods/foods';
import Drinks from '../../components/drinks/drinks';
import { useState } from 'react';
import Nav from './nav';
const App = () => {

 let [activeOn, setActiveOn] = useState('home')
 
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