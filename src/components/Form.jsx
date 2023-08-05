import "../scss/Form.scss";

function Form() {
  return (
    <div className="get-in-touch-form">
      <h2>Get in Touch</h2>
      <form action="">
        <label htmlFor="name">First Name*</label>
        <input type="text" placeholder="Demo Name" />
        <label htmlFor="email">Email Address*</label>
        <input type="text" placeholder="info@techsynergia.com" />
        <label htmlFor="name">Subject*</label>
        <input type="text" placeholder="Your Subject here" />
        <label htmlFor="name">Message*</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Type your message here"
        ></textarea>
        <button>Send Now</button>
      </form>
    </div>
  );
}

export default Form;
