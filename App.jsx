import React, { useState } from 'react';
import NavBar from './components/NavBar';
import PropertyList from './components/PropertyList';
import SortBar from './components/SortBar';
import propertiesData from './data/properties.json';
import './App.css'

function App() {
  // Ensure we always have an array
  const initialProperties = Array.isArray(propertiesData)
    ? propertiesData
    : propertiesData?.properties || [];

  const [properties, setProperties] = useState(initialProperties);

  // Multi-criteria filter handler
  const handleFilter = ({ priceSort, bedroomsSort, dateSort }) => {
    let sorted = [...initialProperties]; // always start from original data

    // Price sorting
    if (priceSort === 'priceLowHigh') sorted.sort((a, b) => a.price - b.price);
    if (priceSort === 'priceHighLow') sorted.sort((a, b) => b.price - a.price);

    // Bedrooms sorting
    if (bedroomsSort === 'bedroomsHighLow') sorted.sort((a, b) => b.bedrooms - a.bedrooms);
    if (bedroomsSort === 'bedroomsLowHigh') sorted.sort((a, b) => a.bedrooms - b.bedrooms);

    // Date Added sorting
    if (dateSort === 'dateNewOld') sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    if (dateSort === 'dateOldNew') sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));

    setProperties(sorted);
  };

  return (
    <div>
      {/* Header / NavBar */}
      <NavBar />

      {/* Multi-criteria SortBar with Filter button */}
      <SortBar onFilter={handleFilter} />

      {/* Property list */}
      <PropertyList properties={properties} />
    </div>
  );
}

export default App;
