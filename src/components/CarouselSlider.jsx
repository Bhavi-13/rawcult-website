import React from 'react'
import '../scss/CarouselSlider.scss'


function CarouselSlider() {
  return (
    <div className="slider">
    <div className="leftContent">
        <p>FASHION HUNT</p>
        <h1>Shop the Hottest Brands and Designs at ShopO</h1>
        <button>Shop Now </button>
    </div>
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=600" class="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
</div>
  )
}

export default CarouselSlider
