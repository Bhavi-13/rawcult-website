import React from 'react'
import '../scss/Sales.scss'

const PopularSaleCard = () =>
{
    const saleData = [
        {
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBwwQ_ZOuSZOIWtw2A3M9L7u6OQgiLFStchzEFEgsLhSPLTYU',
          text: 'Musaphics consequat consectetur aliquip nulla',
          strikeContent: '$25.25',
          price: '$10.99',
        },
        {
          imageSrc: 'https://t3.gstatic.com/images?q=tbn:ANd9GcT1o44UzvxDPQ1dtxh2Ink24CIVKQfj7m_l9HjSYTAU3SGEP5ML',
          text: 'Musaphics consequat consectetur aliquip nulla',
          strikeContent: '$25.25',
          price: '$10.99',
        },
        {
            imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSf_z6kvTgt309aYfbL_pY3-fHOExwvt2VF-guLhfqOODV8GJlc',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTy84smJuXKgRQYga2bYHTXcxpGZJ5OEWQEzBC5gYoz60cm6meW',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSD-7jxUDU1vPWz2jKMKtJ8gIEXiokmzN3yy3QvelaWfDfVQOr4',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTxCN0OaHuqtI7tvaRIJDvPH8vGzHkLOjupxVV5TaeYPIH4s2zH',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTxzoVNA1Z5JzPI2qrIpOevbxyyGsYGvCy0UAc_0gbjqn_3gxS6',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwIeIUMDiL_gNGJ8N6i8CrQrfvjiyHhaSnAbiWkS9cp7Q0z0F3',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDXdxrBUekwX4HHMKxgMzC-p4PPXfR7mas3SrwAYFGJ4fTEaH',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSpvoJ0LjCpq0BrSx3vVnGIgWVUuoDh6wQgItix7hJVeVT9kkB0',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTok5bSYQ8oXs6zBV_2CccqgvVRuYzoyPbzCP5DfLENhayry_l_',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
          {
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvr9azTpkrdMi4VAlN4xnjRhY3Vdqn26MDG5ZLI_LkOn4VnU2Z',
            text: 'Musaphics consequat consectetur aliquip nulla',
            strikeContent: '$25.25',
            price: '$10.99',
          },
      ];
    return(
        <div className="saleCard">
      <div className="headContent">
        <h2>Popular Sales</h2>
        <h5>
          View More <i className="bi bi-arrow-right"></i>
        </h5>
      </div>
      <div className="saleDetails">
        {saleData.map((sale, index) => (
          <div className="card" key={index}>
            <div className="leftContent">
              <div className="imageContent">
                <img src={sale.imageSrc} alt="no image" />
              </div>
              <div className="info">
                <a className="text-truncate" href="#">
                  {sale.text}
                </a>
                <span>
                  <strike>{sale.strikeContent}</strike> {sale.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    )
}
function Sales() {
    return (
      <PopularSaleCard/>
    )
  }

export default Sales
