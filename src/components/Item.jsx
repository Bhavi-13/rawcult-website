import Image from "../assets/mens.jpeg";

function Item() {
  return (
    <div className="item">
      <img src={Image} alt="" />
      <h3>Mens Shirt Dress</h3>
      <p>
        $9.99 <span>$6.99</span>
      </p>
    </div>
  );
}

export default Item;
