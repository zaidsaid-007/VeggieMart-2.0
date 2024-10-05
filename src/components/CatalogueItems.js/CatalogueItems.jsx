import React, { useState } from 'react';
import './CatalogueItems.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CatalogueItems = ({ id, name, price, description, image }) => {
    const [itemCount, setItemCount] = useState(0);
    
    return (
        <div className='catalogue_items'>
            <div className='catalogue_items_img_container'>
                <img className='catalogue-item-image' src={image} alt={name} />
                <div className={`cat-item-counter ${itemCount === 0 ? 'zero' : 'active'}`}>
                    {!itemCount ? (
                        <AddIcon className='add' onClick={() => setItemCount(prev => prev + 1)} />
                    ) : (
                        <>
                            <RemoveIcon className='remove' onClick={() => setItemCount(prev => prev - 1)} />
                            <p>{itemCount}</p>
                            <AddIcon className='add' onClick={() => setItemCount(prev => prev + 1)} />
                        </>
                    )}
                </div>
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
export default CatalogueItems