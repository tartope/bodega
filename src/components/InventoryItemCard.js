import React from 'react'

function InventoryItemCard({ food, onReorderClick, onDeleteClick }) {
    return(
        <div className="card" onClick={() => onReorderClick(food)}>
            <img src={food.image} alt=''></img>
            <h3>{food.name}</h3>
            <h4>$ {food.price}</h4>
            <button onClick={() => onDeleteClick(food)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;