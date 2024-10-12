import { useContext } from 'react';
import './CatalogueItems.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { StoreContext } from '../../context/Storecontext';

const CatalogueItems = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='catalogue_items'>
            <div className='catalogue_items_img_container'>
                <img className='catalogue-item-image' src={image} alt={name} />

                {!cartItems[id] ? (
                    <AddIcon className='add-only' onClick={() => addToCart(id)} />
                ) : (
                    <div className='cat-item-counter'>
                        <RemoveIcon 
                            className='remove active' // Ensure the correct class is applied
                            onClick={() => removeFromCart(id)} 
                        />
                        <p>{cartItems[id]}</p> {/* Display the count of items */}
                        <AddIcon 
                            className='add active' // Ensure the correct class is applied
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
}

export default CatalogueItems;
