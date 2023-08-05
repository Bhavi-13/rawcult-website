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

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Search />
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
