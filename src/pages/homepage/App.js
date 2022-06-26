import './App.scss';
import  Header from '../../components/header/header';
import Product from './product'
import Jumbotron from './jumbotron'
import ProductsOverRate from './productsOverRate'
import Members from './member';
import Footer from '../../components/footer/footer'

const App = () => {

 
  return (
    <div>
      <Header />
      <Jumbotron />
      <Product />
      <ProductsOverRate />
      <Members />
      <Footer />
    </div>
  )
}

export default App;