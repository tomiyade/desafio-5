import React, { useState } from 'react'
import Items from './Items';
import BocaTitular from "../assets/BocaTitular.jpg"
import IndependienteTitular from "../assets/IndependienteTitular.jpg"
import RiverTitular from "../assets/RiverTitular.jpg"


const ItemListContainer = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Camiseta Titular Boca Juniors",
            price: "11500",
            "src": BocaTitular,
        },
        {
            id: 2,
            name: "Camiseta Titular River Plate",
            price: "11500",
            "src": BocaTitular,
        },
        {
            id: 3,
            name: "Camiseta Titular Independiente de Avellaneda",
            price: "10000",
            "src": BocaTitular,
        },
    ]);


    return (
        <div className='row'>
            {items.map(item => {
                return <Items
                    key={item.id}
                    name={item.name}
                    src={item.scr}
                    price={item.price}
                />
            })}
        </div>
    )
}

export default ItemListContainer
