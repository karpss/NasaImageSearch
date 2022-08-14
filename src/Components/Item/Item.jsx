/* eslint-disable */
import PropTypes from "prop-types";
import "./Item.css";

function Item({ item, onClick }) {
  return (
    <div className="container">
      <div className="card" onClick={onClick}>
        <h4>{item.data[0].title}</h4>
        <img src={item.links[0].href} alt="thumbnail" />
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  };

export default Item;
