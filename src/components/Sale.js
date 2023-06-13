import React from 'react'
import './Sale.css'
import ItemCard from './ItemCard'
import itemData from './data.js'

function Sale() {
    return (
        <div>
            <div className="spacer"/>
            <div className="mainContent">
                <div className="sideBar">
                </div>
                <div className="itemSets">
                    <h2 className="saleTitle">
                        Availables
                    </h2>
                    {itemData.map((itemInfo)=> {
                        return(
                            <ItemCard key={itemInfo.id}
                            itemImage={itemInfo.img}
                            itemTitle={itemInfo.title}
                            itemPrice={itemInfo.price}
                            ></ItemCard>
                        );
                    })}
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Sale