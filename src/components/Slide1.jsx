

function Slide1({ setAddress, setMobile, onNext, address, mobile }) {
    return (
        <div className="container slide">
            <div className="row d-flex flex-row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-2">
                        <div className="card-header bg-dark">
                            <h5 className="text-light"> Delivery Address</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group mt-2 mb-2">
                                <label htmlFor="address"><strong>Address</strong></label>
                                <textarea
                                    name="address"
                                    id="address"
                                    placeholder='Enter your address'
                                    cols="30"
                                    rows="5"
                                    className="form-control mt-3 mb-3"
                                    required
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                                <label htmlFor="phone"><strong>Mobile Number</strong></label> <br />
                                <input
                                    type="number"
                                    className="form-control mt-3"
                                    placeholder='Enter Your Number'
                                    name="phone"
                                    id="phone"
                                    required
                                    onChange={(e) => setMobile(e.target.value)}
                                    value={mobile}
                                />
                                <button
                                    className="btn btn-primary float-end mt-3 px-5"
                                    onClick={onNext}
                                    disabled={setAddress === '' || setMobile === ''}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide1;

