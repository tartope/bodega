import React, {useEffect, useState } from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

const inventoryAPI = 'http://localhost:8001/inventory'

function InventoryManager() {

    const [inventory, setInventory] = useState([])
    const [reorder, setReorder] = useState([])

    useEffect(()=>{
        fetch(inventoryAPI)
        .then(response => response.json())
        .then(inventoryData =>{
            // console.log(inventoryData)
            setInventory(inventoryData)
        })
    }, [])

    function handleAddToReorder(food){
        if(!reorder.includes(food)){
            setReorder([...reorder, food])
        }
    }

    function handleRemoveFromReorder(food){
        const updatedReorder = reorder.filter(item => item.id !== food.id)
        setReorder(updatedReorder)
    }

    function handleDelete(deletedFood){
        fetch(`${inventoryAPI}/${deletedFood.id}`, {
            method: 'DELETE',
        })
        const deletedInventory = inventory.filter(item => item.id !== deletedFood.id)
        setInventory(deletedInventory)
        const deletedReorder = reorder.filter(item => item.id !== deletedFood.id)
        setReorder(deletedReorder)
    }

    return(
        <div className="container">
            <CurrentInventoryList inventory={inventory} handleAddToReorder={handleAddToReorder} handleDelete={handleDelete} />
            <ReorderInventoryList reorder={reorder} handleRemoveFromReorder={handleRemoveFromReorder} handleDelete={handleDelete} />
        </div>
    );
}

export default InventoryManager;