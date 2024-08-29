import React, { useContext} from 'react'
import './card.css'
import { StoreContext } from '../constaxt/StoreContext'
function FoodCard({id,name,image,desc,price}) {
    const {cartItem,addToCart,removeItems} = useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img src={image} alt="" className="food-item-image" />
            { !cartItem[id]
                ? <img onClick={() =>addToCart(id)} src="./image/pluse.jpg" alt="pluse not found" height="20px" width="20px"/>
                : <div className='item-count'>
                    <img onClick={() =>removeItems(id)} src="./image/minus.png" alt="minus not found" height="20px" width="20px"/>
                    <p>{cartItem[id]}</p>
                    <img onClick={() =>addToCart(id)} src="./image/pluse.jpg" alt="pluse not found" height="20px" width="20px"/>
                </div> 

            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <h3>{name}</h3>
                <h3>rating</h3>
            </div>
            <p className="item-desc">
                {desc}
            </p>
            <h3 className="food-item-price">${price}</h3>
        </div>
    </div>
  )
}

export default FoodCard