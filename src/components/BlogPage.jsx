import React from 'react'
import LatestNews from './LatestNews'
import Coupon from './Coupon'

function BlogPage() {
  return (
    <div>
        <h3 className='text-center mt-5 mb-5'>Our Blogs</h3>
        <LatestNews/>
        <Coupon/>
    </div>
  )
}

export default BlogPage
