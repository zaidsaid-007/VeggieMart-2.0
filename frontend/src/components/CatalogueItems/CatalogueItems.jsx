import { useContext } from 'react';
import './CatalogueItems.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { StoreContext } from '../../context/Storecontext';


const CatalogueItems = ({ id, name, description, image, price }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='catalogue_items'>
      <div className='catalogue_items_img_container'>
        <img className='catalogue-item-image' src={`${url}/images/${image}`} alt={name} />

        {!cartItems[id] ? (
          <AddIcon className='add-only' onClick={() => addToCart(id)} />
        ) : (
          <div className='cat-item-counter'>
            <RemoveIcon 
              className='remove active' 
              onClick={() => removeFromCart(id)} 
            />
            <p>{cartItems[id]}</p>
            <AddIcon 
              className='add active' 
              onClick={() => addToCart(id)} 
            />
          </div>
        )}
      </div>
      <div className='catalogue_items_details'>
        <div className='catalogue-item-header'>
          <p className='catalogue-item-name'>{name}</p>
          <StarBorderIcon className='catalogue-item-rating' />
        </div>
        <p className='cat-item-desc'>{description}</p>
        <p className='cat-item-price'>Ksh: {price}</p>
      </div>
    </div>
  );
};

export default CatalogueItems;
