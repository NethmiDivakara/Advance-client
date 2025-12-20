import React, { useState } from 'react';
import './SortBar.css';

const SortBar = ({ onFilter }) => {
  const [priceSort, setPriceSort] = useState('');
  const [bedroomsSort, setBedroomsSort] = useState('');
  const [dateSort, setDateSort] = useState('');

  const handleFilter = () => {
    // Pass all selected options to parent
    onFilter({ priceSort, bedroomsSort, dateSort });
  };

  return (
    <div className="sort-bar-container">
      <label>Price:</label>
      <select value={priceSort} onChange={(e) => setPriceSort(e.target.value)}>
        <option value="">-- None --</option>
        <option value="priceLowHigh">Low to High</option>
        <option value="priceHighLow">High to Low</option>
      </select>
      

      <label>Bedrooms:</label>
      <select value={bedroomsSort} onChange={(e) => setBedroomsSort(e.target.value)}>
        <option value="">-- None --</option>
        <option value="bedroomsHighLow">Most to Least</option>
        <option value="bedroomsLowHigh">Least to Most</option>
      </select>
      

      <label>Date Added: </label>
      <select value={dateSort} onChange={(e) => setDateSort(e.target.value)}>
        <option value="">-- None --</option>
        <option value="dateNewOld">Newest First</option>
        <option value="dateOldNew">Oldest First</option>
      </select>
      
      

      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default SortBar;
