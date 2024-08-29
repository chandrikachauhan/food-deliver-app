import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
function ExploreMenu({category , setCategory}) {
  return (
    <div className='explore_menu'>
        <h2>Explore Our Menu</h2>
        <div className='explore_menu_list'>
            {menu_list.map((items,index)=>
            {
                return(
                    <div 
                    onClick={()=>setCategory(prev=>prev===items.menu_name?"All":items.menu_name)}>
                        <img src={items.menu_image} alt={items.menu_name} className={category===items.menu_name?"active":""} />
                        <h4>{items.menu_name}</h4>
                    </div>
                )
            }
            )}
        </div>
    </div>
  )
}

export default ExploreMenu