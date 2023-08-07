import CarouselSlider from "./components/CarouselSlider";
import Header from "./components/Header";
import Sales from "./components/Sales";
import Search from "./components/Search";

import Clients from './components/Clients'
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

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Navbar />
      <WhyUs />
      <Items heading={"Trendy Design"} comp={4} />
      <Items heading={"Feature Design"} comp={4} />
      <Items heading={"New Arrival"} comp={12} />
      <Coupon />
      <Contact />
      <Login />
      <hr />
      <ApprovalForm/>
      <hr />
      <ProductsUploadForm/>
      <hr />
      <CarouselSlider/>
      <hr />
      <Sales/>
      <hr />

     
      <FlashSale/>
      <hr />
      <CustomerFeedback/>
      <hr />
      <LatestNews/>
      <hr />
      <AboutInfo/>
      <hr />


      <Clients/>
      <hr />
     
      <Footer/>
    </div>
  );
}

export default App;
