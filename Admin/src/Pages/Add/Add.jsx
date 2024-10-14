import { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {


  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '',
    category: '',
    price: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', Number(data.price));
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/catalogue/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product added successfully:', response.data);
      setData({
        name: '',
        description: '',
        category: '',
        price: ''
      });
      setImage(null);
      toast.success(response.data.message)
      
    } 
    catch (error) {
      console.error('Error adding product:', error);
      toast.error(error.response.data.message)
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>

        <div className='add-image-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img
              src={image ? URL.createObjectURL(image) : assets.uploadIcon}
              alt='Upload Image'
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            accept='image/*'
            hidden
            required
          />
        </div>

        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            name='name'
            placeholder='Enter product name'
            required
          />
        </div>

        <div className='add-product-description flex-col'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name='description'
            rows='6'
            placeholder='Enter product description'
            required
          />
        </div>

        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Category</p>
            <select onChange={onChangeHandler} name='category' value={data.category} required>
              <option value=''>Select Category</option>
              <option value='Dairy Products'>Dairy Products</option>
              <option value='Fresh Fruits'>Fresh Fruits</option>
              <option value='Vegetables'>Vegetables</option>
              <option value='Herbs & Spices'>Herbs & Spices</option>
              <option value='Legumes'>Legumes</option>
              <option value='Nuts & Seeds'>Nuts & Seeds</option>
              <option value='Tubers & Roots'>Tubers & Roots</option>
              <option value='Animal Products'>Animal Products</option>
            </select>
          </div>

          <div className='add-price flex-col'>
            <p>Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type='number'
              name='price'
              placeholder='Ksh:200'
              required
              min='0'
              step='0.01'
            />
          </div>
        </div>

        <button type='submit' className='add-button'>Add Product</button>

      </form>
    </div>
  );
};

export default Add;
