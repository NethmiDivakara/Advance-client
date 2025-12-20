// SortBar.jsx
import React, { useState } from 'react';
import './SortBar.css';

const SortBar = ({ onSort }) => {
  const [sortOption, setSortOption] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onSort(value); // passes the selected option to parent
  };

  return (
    <div className="sort-bar-container">
      <label>Sort By:</label>
      <select value={sortOption} onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="bedrooms">Bedrooms</option>
        <option value="dateAdded">Date Added</option>
      </select>
    </div>
  );
};

export default SortBar;
