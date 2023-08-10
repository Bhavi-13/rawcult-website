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
        {/* <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774382.6761693481!2d-73.979681!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1691667395415!5m2!1sen!2sbd" width="100" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> */}
      </div>
    </div>
  );
}

export default Info;
