import React from 'react';
import PropertyCard from './PropertyCard';
import propertiesData from '../data/properties.json';
import '../PropertyList.css';

export default function PropertyList({ favourites, onFavourite }) {

  const properties = Array.isArray(propertiesData) ? propertiesData : propertiesData.properties;

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
