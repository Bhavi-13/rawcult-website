import "../scss/Navbar.scss";
import React, {useState} from "react";

function Navbar() {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  return (
    <div className={`navbar ${isMobileNavOpen ? 'mobile-open' : ''}`}>
      <div className="content-container ">
          <button className="mobile-toggler" onClick={toggleMobileNav}>
            <i className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        <div className='links-container'>
       
          <div className="category-links">
            <button className="all-categories">
              <div className="icon-text">
                <i className="bi bi-grip-horizontal"></i>
                <p>All Categories</p>
              </div>
              <div className="icon">
                <i className="bi bi-caret-down-fill"></i>
              </div>
            </button>
            <ul className="links">
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <button className="seller-btn">
            Become a Seller
            <i className="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
