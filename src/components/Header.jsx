import "../scss/Header.scss";

function Header() {
  return (
    <div className="top-header">
      <div className="content-container">
        <div className="content">
          <div className="left">
            <p>Account</p>
            <p>Track Order</p>
            <p>Support</p>
          </div>
          <div className="right">
            <select name="" id="">
              <option value="">United States</option>
              <option value="">Bangladesh</option>
              <option value="">India</option>
            </select>
            <select name="" id="">
              <option value="">USD</option>
              <option value="">BDT</option>
              <option value="">INR</option>
            </select>
            <select name="" id="">
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
