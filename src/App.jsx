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
import ShoppingCart from "./components/ShoppingCart";
import CheckOut from "./components/CheckOut";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import SelectRole from "./components/SelectRole";
import ManufacturerDashboard from "./components/ManufacturerDashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Search />
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/select" element={<SelectRole />} />
          <Route path="/approval" element={<ApprovalForm />} />
          <Route path="/manufacturer" element={<ManufacturerDashboard />} />
          <Route path="/createProduct" element={<ProductsUploadForm />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>

      {/* <ShoppingCart />
      <CheckOut /> */}
      {/* <ApprovalForm /> */}
      {/* <ProductsUploadForm /> */}
    </div>
  );
}

export default App;
