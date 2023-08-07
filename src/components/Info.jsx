import "../scss/Info.scss";

function Info() {
  return (
    <div className="grid-container-2">
      <div className="contact-item" id="phone">
        <i className="bi bi-phone-vibrate-fill"></i>
        <h2>Phone</h2>
        <p>+(323) 9847 3847 383</p>
        <p>+(434) 5466 5467 443</p>
      </div>
      <div className="contact-item" id="email">
        <i className="bi bi-envelope-fill"></i>
        <h2>Email</h2>
        <p>Demoemail@gmail.com</p>
        <p>rafiqulislamsuvobd@gmail.com</p>
      </div>
      <div className="contact-item" id="address">
        <i className="bi bi-phone-vibrate-fill"></i>
        <div className="full-add">
          <h2>Address</h2>
          <p>4517 Washington Ave. Manchester, Road 2342, Kentucky 39495</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
