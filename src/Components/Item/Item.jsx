/* eslint-disable */



const Item = ({item, onClick}) => {
    
    return (
        <div onClick={onClick} >
            <h4>{item.data[0].title}</h4>
            <img width={200} src={item.links[0].href} alt="thumb" />
        </div>

    )
}

export default Item;