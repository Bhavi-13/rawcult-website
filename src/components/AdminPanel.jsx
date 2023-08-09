import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

function AdminPanel() {

    const [sales,setSales] = useState("$4,679")
    const [payments,setPayments] = useState("$2,456")
    const [revenue,setRevenue] = useState("425k")
    const [orders,setOrders] = useState("276k")
    const [report,setReport] = useState("$84,686k")

    // useEffect(() => {
    //    getSales()
    //    getPayments()
    //    getRevenue()
    //    getOrders()
    // },[])
  return (
        <div className='container-fluid m-5'>

            <div className='row'>
                <nav className='col-md-2 shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-success border-0 d-none d-md-block bg-light sidebar'>
                    <div className='position-sticky'>
                        <ul className='nav flex-column'>
                          
                           <img
                                src={
                                    "https://shopo.quomodothemes.website/assets/images/logo-5.svg"
                                }
                                alt="" className='mb-3'
                            />
                          
                            <li className='nav-item'>
                                <a className='nav-link active text-black' href='#'>
                                    <i className='bi bi-house-door fs-4 px-2'></i> Dashboard
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
                    <div className='container p-5'>
                        <div className="row">
                            <div className="col-md-3 text-center">
                                    <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-success border-0">
                                    <div className="card-body">
                                        <h4>Order</h4>
                                        <h4 className='text-info'> {orders} </h4>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-success border-0">
                                    <div className="card-body">
                                        <h4>Sales</h4>
                                        <h4 className='text-info'> {sales} </h4>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-success border-0">
                                    <div className="card-body">
                                        <h4>Payments</h4>
                                        <h4 className='text-info'> {payments} </h4>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-success border-0">
                                    <div className="card-body">
                                        <h4>Revenue</h4>
                                        <h4 className='text-info'> {revenue} </h4>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-3 text-center">
                                    <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded bg-success border-0">
                                    <div className="card-body">
                                        <h4>Profile Report</h4>
                                        <h4 className='text-info'> {report} </h4>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </main>
            </div>
          
      </div>
    )
  }

export default AdminPanel
