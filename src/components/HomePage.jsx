import CarouselSlider from './CarouselSlider'
import WhyUs from './WhyUs'
import Items from './Items'
import Clients from './Clients'
import FlashSale from './FlashSale'
import Sales from './Sales'
import Coupon from './Coupon'

function HomePage() {
  return (
    <div>
        
        <CarouselSlider />
        <WhyUs/>
        <Items heading={"Trendy Design"} comp={4} />
        <Clients />
        <FlashSale />
        <Items heading={"Feature Design"} comp={4} />
        <Items heading={"New Arrival"} comp={12} />
        <Sales />
        <Coupon />
       
    </div>
  )
}

export default HomePage
