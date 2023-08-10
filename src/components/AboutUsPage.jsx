import LatestNews from './LatestNews'
import WhyUs from './WhyUs'
import CustomerFeedback from './CustomerFeedback'
import AboutInfo from './AboutInfo'
import Coupon from './Coupon'

function AboutUsPage() {
  return (
    <div>
       <AboutInfo />
       <CustomerFeedback />
       <WhyUs/>
       <LatestNews/>
       <Coupon/>
    </div>
  )
}

export default AboutUsPage
