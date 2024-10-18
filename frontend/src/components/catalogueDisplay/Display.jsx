import { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/Storecontext'
import CatalogueItems from '../CatalogueItems/CatalogueItems'

//TODO: Fix bugs to show category on click exploreitems




const Display = ({ category }) => {
  const { catalogue } = useContext(StoreContext);

  if (!catalogue || catalogue.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='catalogue_display' id='catalogue_display'>
      <h2>Vendors Near You</h2>
      <div className='display-list'>
        {catalogue.map((item, index) => 
          (category === 'All' || category === item.category) && (
            <CatalogueItems
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Display;
