import "../scss/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerColumn">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo-5.svg"
            alt="no image"
          />
          <a href="#">Track order</a>
          <a href="#">Delivery & Returns</a>
          <a href="#">Warranty</a>
        </div>
        <div className="footerColumn">
          <span>About Us</span>
          <a href="#">Rave’s Story</a>
          <a href="#">Work With Us</a>
          <a href="#">Coporate News</a>
          <a href="#">Investors</a>
        </div>
        <div className="footerColumn">
          <span>Online Shop</span>
          <a href="#">Furniture</a>
          <a href="#">Decoration</a>
          <a href="#">Kitchen</a>
          <a href="#">Interior</a>
        </div>
        <div className="footerColumn">
          <span>Useful Links</span>
          <a href="#">Secure Payment</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Archived Products</a>
        </div>
      </div>
      <hr />
      <div className="footerEnd">
        <div className="leftFooter">
          <i className="bi bi-instagram"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
          <p>
            ©2022 <a href="#">Quomodosoft</a> All rights reserved
          </p>
        </div>
        <div className="companyLogos">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2006.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/200px-MasterCard_early_1990s_logo.svg.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
            alt=""
          />
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR4vjOeC9-oN_KRdg_P5kkeLoQw8RbCdV3ZgT-g3yG7nPvXSHy6"
            alt=""
          />
          <img
            src="https://e7.pngegg.com/pngimages/856/907/png-clipart-logo-brand-visa-electron-font-product-logo-visa-label-text-thumbnail.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
