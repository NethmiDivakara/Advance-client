import React, { useState } from 'react';
import { DropdownList } from 'react-widgets';
import 'react-widgets/styles.css';
import './SortBar.css';

const SortBar = ({ onFilter }) => {
  const [typeSort, setTypeSort] = useState('');
  const [priceSort, setPriceSort] = useState('');
  const [bedroomsSort, setBedroomsSort] = useState('');
  const [postcodeSort, setPostcodeSort] = useState('');
  const [dateOrder, setDateOrder] = useState('');

  const handleFilter = () => {
    onFilter({ typeSort, priceSort, bedroomsSort, postcodeSort, dateOrder });
  };

  const clearFilters = () => {
    setTypeSort('');
    setPriceSort('');
    setBedroomsSort('');
    setPostcodeSort('');
    setDateOrder('');
    onFilter({ typeSort: '', priceSort: '', bedroomsSort: '', postcodeSort: '', dateOrder: '' });
  };

  return (
    <div className="sort-bar-container">
      <div className="sort-fields">
        <div className="sort-field-item">
          <label>Type:</label>
          <DropdownList
            data={['House', 'Flat', 'Bungalow']}
            value={typeSort}
            onChange={setTypeSort}
            placeholder="-- None --"
          />
        </div>

        <div className="sort-field-item">
  <label>Price (max):</label>
  <input
    type="number"
    className="price-input"
    value={priceSort || ''}
    onChange={(e) => setPriceSort(Number(e.target.value))}
    placeholder="-- None --"
  />
</div>


        <div className="sort-field-item">
          <label>Bedrooms:</label>
          <DropdownList
            data={['1', '2', '3', '4+']}
            value={bedroomsSort}
            onChange={setBedroomsSort}
            placeholder="-- None --"
          />
        </div>

        <div className="sort-field-item">
          <label>Date added:</label>
          <DropdownList
            data={['Newest to oldest', 'Oldest to newest']}
            value={dateOrder}
            onChange={setDateOrder}
            placeholder="-- None --"
          />
        </div>

        <div className="sort-field-item">
          <label>Postcode:</label>
          <DropdownList
            data={['BR5', 'BR6', 'KT2']}
            value={postcodeSort}
            onChange={setPostcodeSort}
            placeholder="-- None --"
          />
        </div>
      </div>

      <div className="sort-buttons">
        <button onClick={handleFilter}>Filter</button>
        <button onClick={clearFilters}>Clear</button>
      </div>
    </div>
  );
};

export default SortBar;
