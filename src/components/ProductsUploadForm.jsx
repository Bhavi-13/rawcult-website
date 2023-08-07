import React from 'react'
import '../scss/DetailsForm.scss'

function ProductsUploadForm() {
  return (
    <div className="detailsForm">
    <form action="">
        <h4>Products Upload Form</h4>
        <div className="inputGroup">
            <label htmlFor="type">Product Type <span>*</span> : </label>
            <input type="text" name="type" id="type" required/> 
        </div>
        <div className="inputGroup">
            <label htmlFor="desc">Product Description <span>*</span> :</label>
            <textarea name="desc" id="desc" cols="40" rows="3" required></textarea>  
        </div>
        <div className="inputGroup">
            <label htmlFor="color">Product Color <span>*</span> : </label>
            <input type="text" name="color" id="color" required/>
        </div>
        <div className="inputGroup">
            <label htmlFor="number">Size available<span>*</span> : </label>
            <input type="number" name="number" id="number" required/>
        </div>
        <div className="inputGroup">
            <label htmlFor="price">Price <span>*</span> : </label>
            <input type="number" name="price" id="price" required/>
        </div>
        <div className="inputGroup">
            <label htmlFor="fit">Fit Type <span>*</span> : </label>
            <input type="text" name="fit" id="fit" required/>
        </div>
        <div className="inputGroup">
            <label htmlFor="image">Upload Your Image <span>*</span> </label>
            <input type="file" name="image" id="image" />
        </div>

        <button>Upload</button>

    </form>
   </div>
  )
}

export default ProductsUploadForm
