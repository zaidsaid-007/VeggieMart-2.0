import { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/Storecontext'
import CatalogueItems from '../CatalogueItems.js/CatalogueItems'

//TODO: Fix bugs to show category on click exploreitems

const Display = ({category}) => {

    const {catalogue} = useContext(StoreContext)

  return (
    <div className='catalogue_display' id='catalogue_display'>
        <h2> Vendors Near You</h2>
        <div className='display-list'>

            {catalogue.map((item,index)=>{
                if (category === 'All' || category === item.category){
                  return <CatalogueItems key={index} id={item.id} name={item.name} description={item.description} image={item.image} price={item.price} />
                }

            })}
        </div>
    </div>
     // Check what category is being passed

  )
}

export default Display