import "../scss/Navbar.scss";
import {NavLink} from 'react-router-dom'

function Navbar() {

  return (
    <div className='navbar'>
      <div className="content-container ">
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
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
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


