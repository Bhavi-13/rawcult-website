import { useState } from "react";
import "../scss/DetailsForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ApprovalForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mfdUnit: "",
    unitAddress: "",
    phone: "",
    gstNo: "",
    aadhaarOrPan: "",
    productDeal: "",
    bankAccount: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axios.post(
        "https://rawcult-be.onrender.com/products/uploadImage",
        formData,
        { withCredentials: true }
      );
      setUserData((prevData) => ({
        ...prevData,
        image: response.data.image.src,
      }));
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  const handleUpdateUser = async () => {
    try {
      const response = await axios.patch(
        "https://rawcult-be.onrender.com/users/updateUser",
        userData,
        { withCredentials: true }
      );

      alert("Form Submitted Successfully!");
      navigate("/manufacturer");
    } catch (error) {
      console.error("Update user error:", error);
      alert("There is some problem in saving the form");
    }
  };

  return (
    <div className="detailsForm">
      <form action="" onSubmit={(e) => handleUpdateUser(e.preventDefault())}>
        <h4>Selling Approval Form</h4>
        <div className="inputGroup">
          <label htmlFor="name">
            Your Name <span>*</span> :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            // value={name}
            onChange={handleInputChange}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="mfdUnit">
            Your Shop/Manufacturer Unit Name <span>*</span> :
          </label>
          <input
            type="text"
            name="mfdUnit"
            id="mfdUnit"
            required
            // value={mfdUnit}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="unitAddress">
            Your Unit Address <span>*</span> :
          </label>
          <textarea
            name="unitAddress"
            id="unitAddress"
            cols="40"
            rows="3"
            required
            // value={unitAddress}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="inputGroup">
          <label htmlFor="phone">
            Phone Number <span>*</span> :
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            // value={phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">
            Your Email Address <span>*</span> :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            // value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="gst">
            Your GST Number <span>*</span> :
          </label>
          <input
            type="text"
            name="gstNo"
            id="gstNo"
            required
            // value={gstNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="aadhaarOrPan">
            Your Aadhar/PAN Card Number <span>*</span> :
          </label>
          <input
            type="text"
            name="aadhaarOrPan"
            id="aadhaarOrPan"
            required
            // value={aadhaarOrPan}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">
            Upload Your Image <span className="optional">(optional)</span> :
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageUpload}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="products">
            Products You deal in <span>*</span> :
          </label>
          <select
            name="productDeal"
            id="productDeal"
            // value={productDeal}
            onChange={handleInputChange}
          >
            <option value="category">Category</option>
            <option value="Shirts">Shirts</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Jeans">Jeans</option>
            <option value="Trousers">Trousers</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="bankAccount">
            Bank Account Details <span>*</span> :
          </label>
          <textarea
            name="bankAccount"
            id="bankAccount"
            cols="40"
            rows="3"
            required
            // value={bankAccount}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ApprovalForm;
