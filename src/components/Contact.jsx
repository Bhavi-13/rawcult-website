import "../scss/Contact.scss";
import Form from "./Form";
import Info from "./Info";

function Contact() {
  return (
    <div className="contact-us">
      <div className="contactContainer">
        <div className="content">
          <div className="heading">
            <h2>Contact Information</h2>
            <p>
              Fill the form below or write us. We will help you as soon as
              possible
            </p>
          </div>
          <div className="form-and-info">
            <Info />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
