import { useEffect, useState } from "react";
import "../scss/DetailsForm.scss";
import axios from "axios";

function ApprovalForm() {
  const [name, setName] = useState("");
  const [mfdUnit, setMfdUnit] = useState("");
  const [unitAddress, setUnitAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [gstNo, setGstNo] = useState("");
  const [aadhaarOrPan, setAadhaarOrPan] = useState("");
  const [productDeal, setProductDeal] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [userId, setUserId] = useState("");

  const userDetails = async (req, res) => {
    try {
      const response = await axios.get(
        "https://rawcult-be.onrender.com/users/showMe",
        {
          withCredentials: true,
        }
      );

      setEmail(response.data.user.email);
      setName(response.data.user.name);
      setUserId(response.data.user.userId);
    } catch (error) {
      console.log(error);
    }
  };

  const additionalDetails = async (req, res) => {
    const response = await axios.get(
      `https://rawcult-be.onrender.com/users/${userId}`,
      {
        withCredentials: true,
      }
    );
    return response.data.user;
  };

  useEffect(() => {
    userDetails();
    const details = additionalDetails();
    details.then((data) => {
      setMfdUnit(data.mfdUnit);
      setUnitAddress(data.unitAddress);
      setPhone(data.phone);
      setGstNo(data.gstNo);
      setAadhaarOrPan(data.aadhaarOrPan);
      setBankAccount(data.bankAccount);
    });
  });

  const handleOnSubmit = async (req, res) => {
    try {
      const response = await axios.patch(
        "https://rawcult-be.onrender.com/users/updateUser",
        {
          name,
          email,
          mfdUnit,
          unitAddress,
          phone,
          gstNo,
          aadhaarOrPan,
          productDeal,
          bankAccount,
        },
        { withCredentials: true }
      );
      alert("User Updated Successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detailsForm">
      <form action="" onSubmit={(e) => handleOnSubmit(e.preventDefault())}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="shop">
            Your Shop/Manufacturer Unit Name <span>*</span> :
          </label>
          <input
            type="text"
            name="shop"
            id="shop"
            required
            value={mfdUnit}
            onChange={(e) => setMfdUnit(e.target.value)}
          />
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
            value={unitAddress}
            onChange={(e) => setUnitAddress(e.target.value)}
          ></textarea>
        </div>
        <div className="inputGroup">
          <label htmlFor="number">
            Phone Number <span>*</span> :
          </label>
          <input
            type="number"
            name="number"
            id="number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="gst">
            Your GST Number <span>*</span> :
          </label>
          <input
            type="text"
            name="gst"
            id="gst"
            required
            value={gstNo}
            onChange={(e) => setGstNo(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="pan">
            Your Aadhar/PAN Card Number <span>*</span> :
          </label>
          <input
            type="text"
            name="pan"
            id="pan"
            required
            value={aadhaarOrPan}
            onChange={(e) => setAadhaarOrPan(e.target.value)}
          />
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
          <select
            name="products"
            id="products"
            value={productDeal}
            onChange={(e) => setProductDeal(e.target.value)}
          >
            <option value="category">Category</option>
            <option value="Shirts">Shirts</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Jeans">Jeans</option>
            <option value="Trousers">Trousers</option>
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
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default ApprovalForm;
