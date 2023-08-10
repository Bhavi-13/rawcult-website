

function Slide3({ cartItems }) {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
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
    );
}

export default Slide3;
