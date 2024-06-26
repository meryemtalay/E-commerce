import React from "react";
import './App.css';
import {BrowserRouter , Routes,Route, Link} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import Cart from "./pages/Cart";
import CompleteOrder from "./pages/CompleteOrder";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            {/* element kısmı dosya isimlerini, path kısımları da urli söyler */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />            
              <Route path="product" element={<OurStore />} /> 
              <Route path="product/:id" element={<SingleProduct />} />                       
              <Route path="blogs" element={<Blog />} />            
              <Route path="blog/:id" element={<SingleBlog />} />            
              <Route path="cart" element={<Cart />} />            
              <Route path="complete-order" element={<CompleteOrder />} />            
              <Route path="compare-product" element={<CompareProduct />} />            
              <Route path="wishlist" element={<Wishlist />} />            
              <Route path="login" element={<Login />} />            
              <Route path="signup" element={<Signup />} />            
              <Route path="forgot-password" element={<Forgotpassword />} />
              <Route path="reset-password" element={<Resetpassword />} />            
              <Route path="privacy-policy" element={<PrivacyPolicy />} />            
              <Route path="refund-policy" element={<RefundPolicy />} />            
              <Route path="shipping-policy" element={<ShippingPolicy />} />            
              <Route path="term-conditions" element={<TermAndConditions />} />            
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}

export default App;
