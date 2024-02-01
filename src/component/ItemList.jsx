import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  
const [items, setItems] = useState([]);

const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>   
      <h4 className='itm-head'>List of Items displayed using the Api call</h4>
      <ol>
        <h3> Title </h3>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}

      </ol>
      <ol>
      <h3> Body </h3>
        {items.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </ol>
    </div>
  );
};

export default ItemList;
