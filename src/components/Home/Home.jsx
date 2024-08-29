import React,{useState} from 'react'
import Menu from '../menu/menu'
import Slider from '../menu/slider'
import './Home.css'
import ExploreMenu from '../menu/ExploreMenu'
import FoodDisplay from '../fooddisplay/foodDisplay'
function Home() {
  const [category , setCategory] = useState('All');
  return (
    <div className='homepage'>
        <Menu/>
        <Slider/>
        <ExploreMenu category={category} setCategory={setCategory}/> 
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home