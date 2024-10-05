import { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import Explore from '../../components/ExploreMenu/Explore';
import Display from '../../components/catalogueDisplay/Display';

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Explore category ={category} setCategory={setCategory}/>
        <Display category ={category} />
    </div>
  )
}

export default Home