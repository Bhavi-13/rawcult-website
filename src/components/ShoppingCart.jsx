import React, {useState, useEffect} from 'react'


function ShoppingCart() {

    const [total,setTotal] = useState(0)
    const [dc,setDC] = useState(0)
   
    return (
    <div className='container m-auto'>
        <div className="row">
            <div className="col-12 col-lg-10 m-auto shadow-lg bg-body-tertiary rounded-2">
                <div className="card-group">
                    <div className="card border border-0 flex-row flex-column" style={{ flex: 2 }}>
                        <div className="card-header d-flex flex-direction-row justify-content-between p-4">
                            <h5 className='fs-3 fw-semi-bold'>Shopping Cart</h5> 
                            <p className='fw-bold text-secondary'>2 items</p>
                        </div>
                        <div className="card-body">
                            <div className="table table-responsive">
                                <table className="table text-center">
                                    <tbody>
                                        <tr className='text-center'>
                                            <td>
                                                <img src="image" alt="no image" className="img-fluid" />
                                            </td>
                                            <td> title </td>
                                            <td>
                                                <span className="text-danger" onClick={() => decrement(_id)} > 
                                                    <i className="bi bi-dash-circle"></i> </span>
                                                <strong className="text-dark ms-2 me-2"> quantity </strong>
                                                <span className="text-success" onClick={() => increment(_id)}> 
                                                    <i className="bi bi-plus-circle"></i> </span>
                                            </td>
                                            <td>
                                                &#8377; price
                                            </td>
                                            <td>
                                                <span className="text-danger" onClick={() => remove(_id)} >
                                                    <i className="bi bi-trash"></i>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                   
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <span ><a href="/">Back to Shop</a></span>
                        </div>
                    </div>
                
                    <div className="card col p-3 bg-info border border-0" style={{ flex: 1 }}>
                        <div className="card-header p-3">
                            <h5 className='fw-semi-bold fs-3'>Summary</h5>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between mb-3">
                                <strong>Items 3</strong>
                                <span className="text-success float-end"> &#8377; total </span>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <strong>SHIPPING</strong>
                                <span className='border border-dark p-2 mt-2 mb-3'>Standard-Delivery- &#8377; dc</span>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <label className='mb-2' htmlFor="code"><strong>GIVE CODE</strong></label>
                                <input type="text" name="code" id="code" placeholder='Enter Your Code'/>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-between mb-3'>
                                <strong>TOTAL PRICE</strong>
                                <span> &#8377; final </span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="" className="btn btn-dark w-75 rounded-0">Check Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart

