import './Explore.css';
import { explore_list } from '../../assets/assets';

const Explore = () => {
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
            <div key={index} className='explore-catalogue-list-item'>
              <div className='image-container'> {/* Image Container for the images */}
                <img src={item.img} alt='' />
              </div>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
      <hr/>
    </div>
  );
};

export default Explore;