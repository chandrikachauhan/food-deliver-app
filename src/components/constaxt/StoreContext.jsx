import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";
export const StoreContext = createContext('null')
const StoreContextProvider = (props) =>{

    const [cartItem , setCartItem] = useState({});
    const addToCart = (itemsid) =>{
        if(!cartItem[itemsid])
        {
            setCartItem((prev) =>({...prev,[itemsid]:1}));
        }
        else
        {
            setCartItem((prev) => ({...prev,[itemsid]:prev[itemsid]+1}));
        }
    }
    const removeItems = (itemsid) => {
        setCartItem((prev) =>({...prev,[itemsid]:prev[itemsid]-1}));
    }
    useEffect(() =>{
        console.log(cartItem);
    },[cartItem])

    const contextvalue ={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeItems
    }
    return (
        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider