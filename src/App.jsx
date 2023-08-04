import Header from "./components/Header";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import Coupon from "./components/Coupon";
import WhyUs from "./components/WhyUs";

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
    </div>
  );
}

export default App;
