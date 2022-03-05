import React from 'react'
import InventoryItemCard from './InventoryItemCard'

function CurrentInventoryList({ inventory, handleAddToReorder, handleDelete }) {

    const inventoryItemCard = inventory.map(food =>{
        return <InventoryItemCard key={food.id} food={food} onReorderClick={handleAddToReorder} onDeleteClick={handleDelete} />
    })

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryItemCard}
            </div>
        </div>
    );
}

export default CurrentInventoryList;