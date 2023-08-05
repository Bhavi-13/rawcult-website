import React from 'react'
import '../scss/LatestNews.scss'

const MyLatestNews = () =>
{
   
    const newsData = [
        {
          imageSrc: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQduGnQpePWlGZOczAx8xO52skZKRzuvtbKFKn_U1QoevdgLBdT',
          admin: 'By Admin',
          comments: '6 comments',
          h3: 'Reprehenderit Non Esse Anim Laboris Reprehenderit Officia',
          info: 'Lorem ipsum dolor sit amet,sdam non rerum ratione, met, consectetur adipisicing elit.',
          button: 'View More'
        },
        {
          imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfh279qOaaS9uFBysstxw14ad77xQd0sylqOZKhelxkPbpWmPL',
          admin: 'By Admin',
          comments: '8 comments',
          h3: 'Reprehenderit Non Esse Anim Laboris Reprehenderit Officia',
          info: 'Lorem ipsum dolor sit amet,sdam non rerum ratione, met, consectetur adipisicing elit.',
          button: 'View More'
        },
         
         
         
      ];
    return(
        <div className="latestNews">
        <h2>My Latest News</h2>
        <div className="grid-container">
            {newsData.map((news, index) => (
                <div className="card" key={index}>
                    <img src={news.imageSrc} alt="no image" />
                    <div className="cardContent">
                        <div className="comments">
                            <p> <i className="bi bi-person"></i> {news.admin}</p>
                            <p><i class="bi bi-chat-left-text"></i> {news.comments}</p>
                        </div>
                        <h4>{news.h3}</h4>
                        <p>{news.info}</p>
                        <a href="#">{news.button} <i className="bi bi-arrow-right"></i> </a>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>

    )
}
function LatestNews() {
  return (
    <div >
        <MyLatestNews/>
    </div>
  )
}

export default LatestNews
