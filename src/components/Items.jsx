import "../scss/Items.scss";
import Item from "./Item";
import PropTypes from "prop-types";

Items.propTypes = {
  heading: PropTypes.string.isRequired,
  comp: PropTypes.number.isRequired,
};

function Items({ heading, comp }) {
  const items = Array.from({ length: comp }, (_, index) => {
    return <Item key={index} />;
  });
  return (
    <div className="trendy-design">
      <div className="content-container">
        <div className="content">
          <div className="heading-part">
            <h2>{heading}</h2>
            <button>
              View More
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="grid-container">{items}</div>
        </div>
      </div>
    </div>
  );
}

export default Items;
