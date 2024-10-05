import { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/storecontext'
import CatalogueItems from '../CatalogueItems.js/CatalogueItems'


const Display = ({category}) => {

    const{ catalogue } = useContext(StoreContext)


  return (
    <div className='catalogue_display' id='catalogue_display'>
        <h2> Vendors Near You</h2>
        <div className='display-list'>
            {catalogue.map((item,index)=>{
                return <CatalogueItems key={index} id={item.id} name={item.name} description={item.description} image={item.image} price={item.price} />

            })}
        </div>
    </div>
  )
}

export default Display