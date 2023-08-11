import React, {useState} from 'react'
import ManufacturerDashboard from './ManufacturerDashboard';
import RetailerDashboard from './RetailerDashboard';
import '../scss/SelectRole.scss'

function SelectRole() {
    const [showForm, setShowForm] = useState(false);
    const [isUser, setIsUser] = useState(true);
  
    const handleManufacturerClick = () => {
      setIsUser(true);
      setShowForm(true);
    };
  
    const handleRetailerClick = () => {
      setIsUser(false);
      setShowForm(true);
    };
  return (
  

  
    <div className="first-sign-up">
        {showForm ? (
            <>{isUser ? <ManufacturerDashboard /> : <RetailerDashboard /> }</>
        ) : (
            <div className="select-user-type">
            {/* <img id="logo" src={logo} alt="" /> */}
            <h3>You Are Here As</h3>
            <div className="btns">
                <button onClick={handleManufacturerClick}>Manufacturer</button>
                <button onClick={handleRetailerClick}>Retailer</button>
            </div>
            </div>

        )}
    </div>
  )
}


export default SelectRole
