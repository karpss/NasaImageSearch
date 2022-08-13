/* eslint-disable */
import React, { useContext, useState} from 'react';
import {
  ActionTypes,
  ApplicationContext,
} from "../../Context/ApplicationContextProvider";
import Item from "../Item/Item";
import Search from "../Search/Search";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";





const ItemList = () => {
    
    //const [filter, setFilter] = useState("all");
    const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
    
    

    const {
        state: { items, loading },
        dispatch
    } = useContext(ApplicationContext);

    
      
      
      
    

    
      
      


    

    console.log("Na me", items)
    console.log("SD",startDate)
    console.log("ED",endDate)

    
        
          
          
    
        
    
      

    return <div >
        <Search />
        {loading ? <LoadingSpinner/> : 
        <div
            
        >
            {items.length > 0 ? <div >
                
            From : <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        To : <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
              
            </div> : <div style={{display: 'flex', height: '40vh', alignItems: 'center'}}>Your search results will show here</div>}
            {( !startDate   ? items : items.filter((i) => new Date (i?.data[0].date_created).toISOString().slice(0, 10) >= startDate &&  new Date(i?.data[0].date_created).toISOString().slice(0, 10) <= endDate)
            ).map((item) => (
                <React.Fragment key={item.href}>
                    <Item
                        onClick={() =>
                            dispatch({
                                type: ActionTypes.SELECT_ITEM,
                                payload: item
                            })
                        }
                        item={item}
                    />
                </React.Fragment>
            ))}
        </div>}
        
    </div>;
    
}

export default ItemList;