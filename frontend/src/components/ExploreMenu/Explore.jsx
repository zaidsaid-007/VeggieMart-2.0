import { useContext, useState } from 'react';
import './Explore.css';
import { explore_list } from '../../assets/assets';
import { StoreContext } from '../../context/Storecontext';


// Array of objects representing the categories to be displayed in the explore section
//TODO: Bug fixes

const Explore = () => {
    const [category, setCategory] = useState('All');
    const { catalogue } = useContext(StoreContext);

    return (
        <div className='explore' id='explore-catalogue'>
            <h1>Explore Our Catalogue</h1>
            <p className='explore-content'>
                Explore the freshest produce, premium dairy, and more—delivered straight
                to your kitchen. Freshness made simple!
            </p>
            <div className='explore-catalogue-list'>
                {explore_list.map((item, index) => {
                    return (
                        <div
                            onClick={() => setCategory(prev => prev === item.title ? 'All' : item.title)}
                            key={index}
                            className='explore-catalogue-list-item'
                        >
                            <div className='image-container'> {/* Image Container for the images */ }
                                <img className={category === item.title ? 'active' : ''} src={item.img} alt='' />
                            </div>
                            <p>{item.title}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default Explore;

