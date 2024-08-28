import React,{useState} from 'react'
import Menu from '../menu/menu'
import Slider from '../menu/slider'
import './Home.css'
import ExploreMenu from '../menu/ExploreMenu'
function Home() {
  const [category , setCategory] = useState('All');
  return (
    <div className='homepage'>
        <Menu/>
        <Slider/>
        <ExploreMenu category={category} setCategory={setCategory}/> 
    </div>
  )
}

export default Home