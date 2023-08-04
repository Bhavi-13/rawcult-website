import CarouselSlider from "./components/CarouselSlider";
import Header from "./components/Header";
import Sales from "./components/Sales";
import Search from "./components/Search";
import Clients from './components/Clients'
import Footer from "./components/Footer";

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
      <Clients/>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
