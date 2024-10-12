import { useState } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import Explore from '../../components/ExploreMenu/Explore';
import Display from '../../components/catalogueDisplay/Display';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <Explore category ={category} setCategory={setCategory}/>
        <Display category ={category} />
        <AppDownload/>
    </div>
  )
}

export default Home