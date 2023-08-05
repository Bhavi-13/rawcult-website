import "../scss/Coupon.scss";

function Coupon() {
  return (
    <div className="discount-coupon">
      <div className="content-container">
        <div className="content">
          <h2>
            Get <span>20% </span>Off Discount Coupon
          </h2>
          <p>by Subscribe our Newsletter</p>
          <div className="form">
            <i className="bi bi-envelope"></i>
            <input type="email" placeholder="EMAIL ADDRESS" />
            <button>Get the Coupon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
