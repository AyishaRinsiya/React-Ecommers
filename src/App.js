import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slider from "./components/slider/Slider";
import Testimonials from "./components/testimonials/Testimonials";
import Virtual from "./components/virtual/Virtual";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Cart from "./components/cart/cart";
import Shop from "./components/cart/shop"
import { ShopContextProvider } from "./context/Context";

function App() {

  return (
    <ShopContextProvider>
    <BrowserRouter>
      <div className="App">
      <Routes>
      <Route path="/" element={<Shop/>} />
        <Route path="cart" element={<Cart/>} />
        </Routes>
      </div>
      </BrowserRouter>
      </ShopContextProvider>
      
  );
}

export default App;
