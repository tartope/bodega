import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function ReorderInventoryList({ reorder, handleRemoveFromReorder, handleDelete }) {

    const inventoryItemCard = reorder.map(food =>{
        return <InventoryItemCard key={food.id} food={food} onReorderClick={handleRemoveFromReorder} onDeleteClick={handleDelete} />
    })

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {inventoryItemCard}
            </div>
        </div>
    );
}

export default ReorderInventoryList;