import React, {useState, useEffect} from 'react'
import '../scss/FlashSale.scss'


    const CountdownTimer = ({ targetDate }) => {
        const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));
      
        useEffect(() => {
          const interval = setInterval(() => {
            const newTimeRemaining = getTimeRemaining(targetDate);
            setTimeRemaining(newTimeRemaining);
      
            if (newTimeRemaining.total <= 0) {
              clearInterval(interval);            }
          }, 1000);
      
          return () => {
            clearInterval(interval);
          };
        }, [targetDate]);
      
        const formatTime = (value) => {
          return value < 10 ? `0${value}` : value;
        };


        return (
            <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-value">{formatTime(timeRemaining.days)}</span> Days
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formatTime(timeRemaining.hours)}</span> Hours
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formatTime(timeRemaining.minutes)}</span> Minutes
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{formatTime(timeRemaining.seconds)}</span> Seconds
            </div>
          </div>
          );
        };

  
const getTimeRemaining = (targetDate) => {
    const total = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  function FlashSale() {
    const targetDate = new Date(2023, 9, 10, 24, 0, 0);
  
    return (
      <div className='flashSale'>
        <div className="flashSaleContent">
            <CountdownTimer targetDate={targetDate} />
            <h1>WOO! Flash Sale</h1>
            <p>You get into the 2K+ best Products in Flash Sale Offer with a Special-Shaped sofa for sale.</p>
            <a href="#">Shop Now</a>
        </div>
        <div className="image">
            <img src="https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        
      </div>
    );
  }


export default FlashSale
