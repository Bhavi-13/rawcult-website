import React, {useState} from 'react'


const RadioInput = (props) => {
    const {label, value, checked, setter } = props;
    return (
        <div className="form-check form-check-inline">
            <input type="radio" value={value} checked={checked == value} onChange={() => setter(value)}  className="form-check-input" required/>
            <label  className="form-check-label"> {label} </label>
        </div>
    )
}

function CheckOut() {

    const [address,setAddress] = useState('')
    const [pay,setPay] = useState('')

  return (
    <div className='container mt-5 mb-5'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h5 className="display-5 text-success text-uppercase">Check Out</h5>
            </div>
        </div>
    <div className="row">
        <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card mt-2">
                <div className="card-header bg-dark">
                    <h5 className="text-light">1. Delivery Address</h5>
                </div>
                <div className="card-body">
                    <div className="form-group mt-2 mb-2">
                        <label htmlFor="address"><strong>Address</strong></label>
                        <textarea name="address" id="address" placeholder='Enter your address' cols="30" rows="5" className="form-control mt-3 mb-3" required></textarea>
                        <label htmlFor="phone"><strong>Mobile Number</strong></label> <br />
                        <input type="number" className="form-control mt-3" placeholder='Enter Your Number' name="phone" id="phone" required/>
                    </div>
                </div>
            </div>
            <div className="card mt-2">
                <div className="card-header bg-dark">
                    <h5 className="text-light">2. Payment Options</h5>
                </div>
                <div className="card-body">
                    <div className="form-group mt-2 mb-2">
                        <RadioInput label="Cash on Delivery" value="cod" setter={setPay} checked={pay} />
                        <RadioInput label="Wallets" value="wallet" setter={setPay} checked={pay} />
                        <RadioInput label="Net Banking" value="netbanking" setter={setPay} checked={pay} />
                        <RadioInput label="UPI" value="upi" setter={setPay} checked={pay} />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="card mt-2">
                <div className="card-header bg-dark">
                    <h5 className="text-light">3. Cart Summary</h5>
                </div>
                <div className="card-body">
                <div className="table table-responsive">
                    <table className="table text-center">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                        <tr className='text-center'>
                                            <td> title </td>
                                            <td>
                                                <img src="image" alt="no image" className="img-fluid" />
                                            </td>
                                            <td>
                                                &#8377; price
                                            </td>
                                            <td>
                                                <strong className="text-dark ms-2 me-2"> quantity </strong>
                                            </td>
                                        </tr>
                                       
                                    </tbody>
                                </table>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-4">
                     <button className="btn btn-outline-success text-bg-success">Place Order</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CheckOut
