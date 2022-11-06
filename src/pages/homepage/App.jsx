import "./App.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import Nav from "./components/nav";
import AllProduct from "./components/allProducts";
import ProductsNew from "./components/productsNew";
import Members from "./components/members";
import ProductsOverRate from "./components/productsOverRate";
import Drinks from "./components/drinks";
import Foods from "./components/foods";
import Slider from './components/slider'

const App = () => {
  let [activeOn, setActiveOn] = useState("home");

  return (
    <div className="app">
      <Header />
      <Nav setActiveOn={setActiveOn} />
      {activeOn === "home" && (
        <>
          <Slider />
          <ProductsNew />
          <ProductsOverRate />
          <Members />
        </>
      )}
      {activeOn === "drinks" && <Drinks />}
      {activeOn === "foods" && <Foods />}
      {activeOn === "all" && <AllProduct />}
      <Footer />
    </div>
  );
};

export default App;
