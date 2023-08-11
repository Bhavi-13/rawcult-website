import CarouselSlider from "./components/CarouselSlider";
import Header from "./components/Header";
import Sales from "./components/Sales";
import Search from "./components/Search";

import Clients from "./components/Clients";
import Footer from "./components/Footer";
import FlashSale from "./components/FlashSale";
import CustomerFeedback from "./components/CustomerFeedback";
import LatestNews from "./components/LatestNews";
import AboutInfo from "./components/AboutInfo";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Coupon from "./components/Coupon";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Login from "./components/Login";
import ApprovalForm from "./components/ApprovalForm";
import ProductsUploadForm from "./components/ProductsUploadForm";
import Register from "./components/Register";
import AdminPanel from "./components/AdminPanel";
import ShoppingCart from "./components/ShoppingCart";
import CheckOut from "./components/CheckOut";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";


function App() {
  return (
    <div>
      <Router>

          <Header />
          <Search />
          <Navbar />

          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutUsPage/>} />
              <Route path="/contact" element={<ContactPage/>} />
              <Route path="/blogs" element={<BlogPage/>} />
          </Routes>
          
          <Footer />

      </Router>
      
      <AdminPanel/>
      <ShoppingCart/>
      <CheckOut/>
      <Login />
      <Register/>
      <ApprovalForm />
      <ProductsUploadForm />
     
    </div>
  );
}

export default App;
