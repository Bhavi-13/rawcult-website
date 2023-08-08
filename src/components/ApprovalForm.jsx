import "../scss/DetailsForm.scss";

function ApprovalForm() {
  return (
    <div className="detailsForm">
      <form action="">
        <h4>Selling Approval Form</h4>
        <div className="inputGroup">
          <label htmlFor="name">
            Your Name <span>*</span> :{" "}
          </label>
          <input type="text" name="name" id="name" required />
        </div>

        <div className="inputGroup">
          <label htmlFor="shop">
            Your Shop/Manufacturer Unit Name <span>*</span> :
          </label>
          <input type="text" name="shop" id="shop" required />
        </div>
        <div className="inputGroup">
          <label htmlFor="address">
            Your Unit Address <span>*</span> :
          </label>
          <textarea
            name="address"
            id="address"
            cols="40"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="inputGroup">
          <label htmlFor="number">
            Phone Number <span>*</span> :{" "}
          </label>
          <input type="number" name="number" id="number" required />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">
            Your Email Address <span>*</span> :{" "}
          </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="inputGroup">
          <label htmlFor="gst">
            Your GST Number <span>*</span> :{" "}
          </label>
          <input type="text" name="gst" id="gst" required />
        </div>
        <div className="inputGroup">
          <label htmlFor="pan">
            Your Aadhar/PAN Card Number <span>*</span> :{" "}
          </label>
          <input type="text" name="pan" id="pan" required />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">
            Upload Your Image <span className="optional">(optional)</span>{" "}
          </label>
          <input type="file" name="image" id="image" />
        </div>
        <div className="inputGroup">
          <label htmlFor="products">
            Products You deal in <span>*</span> :
          </label>
          <select name="products" id="products">
            <option value="category">Category</option>
            <option value="subCat">Sub-Category</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="account">
            Bank Account Details <span>*</span> :
          </label>
          <textarea
            name="account"
            id="account"
            cols="40"
            rows="3"
            required
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ApprovalForm;
