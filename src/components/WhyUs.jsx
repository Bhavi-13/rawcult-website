import "../scss/WhyUs.scss";

function WhyUs() {
  return (
    <div className="why-choose-us">
      <div className="content-container">
        <div className="content">
          <div className="grid-container">
            <div className="item">
              <div className="icon">
                <i className="bi bi-cart3"></i>
              </div>
              <div className="check-points">
                <h4>Free Shipping</h4>
                <p>When ordering over $100</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="bi bi-arrow-clockwise"></i>
              </div>
              <div className="check-points">
                <h4>Free Return</h4>
                <p>Get Return within 30 days</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="bi bi-shield-lock"></i>
              </div>
              <div className="check-points">
                <h4>Secure Payment</h4>
                <p>100% Secure Online Payment</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="bi bi-trophy"></i>
              </div>
              <div className="check-points">
                <h4>Best Quality</h4>
                <p>Original Product Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
