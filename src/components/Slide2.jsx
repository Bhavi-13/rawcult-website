

function Slide2({ selectedPayment, setPayment, onNext }) {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                <div className="card mt-2">
                 <div className="card-header bg-dark">
                     <h5 className="text-light">2. Payment Options</h5>
                 </div>
                 <div className="card-body">
                     <div className="form-group mt-2 mb-2">
                        <input
                            type="radio"
                            id="cod"
                            value="Cash on Delivery"
                            checked={selectedPayment === 'Cash on Delivery'}
                            onChange={() => setPayment('Cash on Delivery')}
                        />
                        <label htmlFor="cod">Cash on Delivery</label>
                     </div>
                   
                     
                    
                     <button className="btn btn-primary float-end mt-3 px-5"
                        onClick={onNext}
                        disabled={selectedPayment === ''}
                        > Next
                    </button>
                 </div>

             </div>
                </div>
            </div>
        </div>
    );
}

export default Slide2;
