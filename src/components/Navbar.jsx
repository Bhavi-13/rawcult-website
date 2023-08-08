import "../scss/Navbar.scss";

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


