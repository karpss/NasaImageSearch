import PropTypes from "prop-types";
import "./Item.css";

function Item({ item, onClick }) {
  return (
    <div className="container" role="button">
      <div className="card" onClick={onClick} aria-hidden="true">
        <h4>{item.data[0].title}</h4>
        <img src={item.links[0].href} alt="thumbnail" />
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Item;
