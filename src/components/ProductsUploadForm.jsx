import { useState } from "react";
import "../scss/DetailsForm.scss";
import axios from "axios";

function ProductsUploadForm() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    colors: "",
    size: "",
    price: "",
    fitType: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
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
      setProductData((prevData) => ({
        ...prevData,
        image: response.data.image.src,
      }));
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "https://rawcult-be.onrender.com/products",
        productData,
        { withCredentials: true }
      );
      alert("Product Added Successfully!");
    } catch (error) {
      console.error("Update user error:", error);
      alert("There is some problem in adding the product");
    }
  };

  return (
    <div className="detailsForm">
      <form action="" onSubmit={(e) => handleAddProduct(e.preventDefault())}>
        <h4>Products Upload Form</h4>
        <div className="inputGroup">
          <label htmlFor="name">
            Product Type <span>*</span> :
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
          <label htmlFor="description">
            Product Description <span>*</span> :
          </label>
          <textarea
            name="description"
            id="description"
            cols="40"
            rows="3"
            required
            // value={description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="inputGroup">
          <label htmlFor="colors">
            Product Color <span>*</span> :
          </label>
          <input
            type="text"
            name="colors"
            id="colors"
            required
            // value={colors}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="size">
            Size available<span>*</span> :
          </label>
          <input
            type="text"
            name="size"
            id="size"
            required
            // value={size}
            onChange={handleInputChange}
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
            // value={price}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="fitType">
            Fit Type <span>*</span> :
          </label>
          <input
            type="text"
            name="fitType"
            id="fitType"
            required
            // value={fitType}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="image">
            Upload Your Image <span>*</span>
          </label>
          <input
            type="file"
            name="image"
            id="image"
            required
            onChange={handleImageUpload}
          />
        </div>

        <button>Upload</button>
      </form>
    </div>
  );
}

export default ProductsUploadForm;
