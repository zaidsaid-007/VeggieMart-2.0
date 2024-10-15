import { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/Storecontext'
import CatalogueItems from '../CatalogueItems/CatalogueItems'

//TODO: Fix bugs to show category on click exploreitems

// Assuming this is the correct import path


const Display = ({ category }) => {
  const { catalogue } = useContext(StoreContext);

  console.log("Catalogue in Display component:", catalogue); // Debugging: Log the catalogue in the Display component

  if (!catalogue || catalogue.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='catalogue_display' id='catalogue_display'>
      <h2>Vendors Near You</h2>
      <div className='display-list'>
        {catalogue.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <CatalogueItems
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Display;