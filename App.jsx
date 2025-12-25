import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import PropertyList from './PropertyList';
import SortBar from './SortBar';
import Favourites from './Favourites';
import PropertyDetails from './PropertyDetails';

import propertiesData from '../data/properties.json';
import './App.css';

/* ===== Month map for date sorting ===== */
const monthMap = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

function App() {
  const [properties, setProperties] = useState(propertiesData);
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (property) => {
    setFavourites((prev) =>
      prev.find((p) => p.id === property.id) ? prev : [...prev, property]
    );
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((p) => p.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  /* ===== FILTER & SORT HANDLER ===== */
  const handleFilter = ({
    typeSort,
    priceSort,
    bedroomsSort,
    postcodeSort,
    dateOrder,
  }) => {
    let filtered = [...propertiesData];

    // Type
    if (typeSort) filtered = filtered.filter((p) => p.type === typeSort);

    // Max price
    if (priceSort) filtered = filtered.filter((p) => p.price <= Number(priceSort));

    // Bedrooms
    if (bedroomsSort) {
      if (bedroomsSort === '4+') filtered = filtered.filter((p) => p.bedrooms >= 4);
      else filtered = filtered.filter((p) => p.bedrooms === Number(bedroomsSort));
    }

    // Postcode
    if (postcodeSort) {
      filtered = filtered.filter((p) => {
        const postcode = p.location.split(' ').pop().toUpperCase();
        return postcode.startsWith(postcodeSort.toUpperCase());
      });
    }

    // Date Added (Newest ↔ Oldest)
    if (dateOrder) {
      filtered.sort((a, b) => {
        const dateA = new Date(a.added.year, monthMap[a.added.month], a.added.day);
        const dateB = new Date(b.added.year, monthMap[b.added.month], b.added.day);
        return dateOrder === 'Newest to oldest' ? dateB - dateA : dateA - dateB;
      });
    }

    setProperties(filtered);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <SortBar onFilter={handleFilter} />
              <div className="main-content" style={{ display: 'flex', gap: '20px' }}>
                <Favourites
                  favourites={favourites}
                  removeFavourite={removeFavourite}
                  clearFavourites={clearFavourites}
                />
                <PropertyList
                  properties={properties}
                  favourites={favourites}
                  onFavourite={addToFavourites}
                />
              </div>
            </>
          }
        />

        {/* Property Details Page */}
        <Route
          path="/property/:id"
          element={
            <div className="property-details-container" style={{ display: 'flex', gap: '20px' }}>
              <Favourites
                favourites={favourites}
                removeFavourite={removeFavourite}
                clearFavourites={clearFavourites}
              />
              <PropertyDetails 
              favourites={favourites}
        onFavourite={addToFavourites}/>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
