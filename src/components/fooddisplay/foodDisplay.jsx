import React, { useContext } from 'react'
import './fooddesplay.css'
import { StoreContext } from '../constaxt/StoreContext'
import FoodCard from '../card/FoodCard'

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food_display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((items , index)=>{
                    if(category==="All" || category===items.category)
                    {
                        return<FoodCard key={index} id={items.id} name={items.name} image={items.image} desc={items.description} price={items.price}/>
                    }
                })
            }
        </div>
    </div>
  )
}

export default FoodDisplay