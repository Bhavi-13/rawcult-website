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
       <h3 className='text-center mt-5 mb-5'>My Latest News</h3>
       <LatestNews/>
       <Coupon/>
    </div>
  )
}

export default AboutUsPage
