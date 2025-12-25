import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

export default function PropertyList({ properties, favourites, onFavourite }) {
  // If no properties match the filter, show a message
  if (!properties || properties.length === 0) {
    return <p className="no-results">No properties match your search.</p>;
  }

  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          favourites={favourites}
          onFavourite={onFavourite}
        />
      ))}
    </div>
  );
}
