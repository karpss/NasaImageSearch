/* eslint-disable */

import "./Item.css";

const Item = ({item, onClick}) => {
    
    return (
        <div className="container">
        <div className="card" onClick={onClick} >
            <h4>{item.data[0].title}</h4>
            <img  src={item.links[0].href} alt="thumbnail" />
        </div>
        </div>

    )
}

export default Item;