import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
  const url = 'http://localhost:4000'; // Ensure this points to your backend
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/catalogue/list`);
      console.log(response.data); // Log to check what is being fetched
      setList(response.data); // Set the list state directly from the fetched data
    } catch (error) {
      console.error('Error fetching list:', error);
      toast.error('Error Fetching List');
    }
  };

  const handleDelete = async (itemId) => {
    if (!itemId) {
      console.error('Item ID is undefined');
      toast.error('Error: Item ID is undefined');
      return;
    }
    console.log('Delete item with ID:', itemId);
    try {
      // Use POST request for deletion
      const response = await axios.post(`${url}/api/catalogue/remove`, { id: itemId });

      if (response.status === 200) {
        toast.success('Item deleted successfully');
        fetchList(); // Refetch the list after deletion
      } else {
        toast.error('Error deleting item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error('Error Deleting Item');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list-add flex-col'>
      <p>All Catalogue Items</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img 
                src={`${url}/images/` + item.image} // Ensure this URL matches the backend static route for images
                alt={item.name}
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>Ksh {item.price}</p>
              <button onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

