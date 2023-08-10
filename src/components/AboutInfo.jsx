import "../scss/AboutInfo.scss";

function AboutInfo() {
  return (
    <div className="about">
      <h3>About Us</h3>
        <div className="eCommerce">
     
            <div className="cartImage">
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMpeAkhRzhF6lHo7FDWfzE7hJDQPl8ve479i5_BblQWuA0CyNu"
                alt="no image"
              />
            </div>

            <div className="cartContent">
              <h5>What is e-commerce business?</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only
                five centuries but also the on leap into electronic typesetting.
              </p>
              <ul>
                <li>slim body with metal cover</li>
                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
              </ul>

              <button>Contact Us</button>
            </div>
          </div>
    </div>
    
  );
}

export default AboutInfo;
