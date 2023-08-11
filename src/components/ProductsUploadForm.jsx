import { useState } from "react";
import "../scss/DetailsForm.scss";
import axios from "axios";

function ProductsUploadForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [colors, setColors] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [fitType, setFitType] = useState("");

  const handleSubmit = async (req, res) => {
    try {
      const response = await axios.post(
        "https://rawcult-be.onrender.com/products",
        { name, description, colors, size, price, fitType },
        {
          withCredentials: true,
        }
      );

      const uploadImage = await axios.post;
      alert("Product added successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="detailsForm">
      <form action="" onSubmit={(e) => handleSubmit(e.preventDefault())}>
        <h4>Products Upload Form</h4>
        <div className="inputGroup">
          <label htmlFor="type">
            Product Type <span>*</span> :
          </label>
          <input
            type="text"
            name="type"
            id="type"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="desc">
            Product Description <span>*</span> :
          </label>
          <textarea
            name="desc"
            id="desc"
            cols="40"
            rows="3"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="inputGroup">
          <label htmlFor="color">
            Product Color <span>*</span> :
          </label>
          <input
            type="text"
            name="color"
            id="color"
            required
            value={colors}
            onChange={(e) => setColors(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="text">
            Size available<span>*</span> :
          </label>
          <input
            type="text"
            name="text"
            id="text"
            required
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="price">
            Price <span>*</span> :
          </label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="fit">
            Fit Type <span>*</span> :
          </label>
          <input
            type="text"
            name="fit"
            id="fit"
            required
            value={fitType}
            onChange={(e) => setFitType(e.target.value)}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">
            Upload Your Image <span>*</span>
          </label>
          <input type="file" name="image" id="image" />
        </div>

        <button>Upload</button>
      </form>
    </div>
  );
}

export default ProductsUploadForm;
