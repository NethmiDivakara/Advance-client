import React from 'react';
import '../PropertyCard.css';
import propertiesData from '../data/properties.json';


export default function PropertyCard({ property, onFavourite, favourites }) {
  const isFavourite = favourites?.some((fav) => fav.id === property.id);

  return (
    <div className="property-card">
      <img src={property.picture} alt={property.type} className="property-image" />
      <h3 className="property-title">{property.type} </h3>
      <p className="property-price">£{property.price.toLocaleString()}</p>
      <p className="property-bedrooms">{property.bedrooms} Bed</p>
      <p className="property-location">{property.location}</p>

      <div className="property-buttons">
        <a href={property.url} className="property-button">View Details</a>
        <button
          className={`favourite-button ${isFavourite ? 'favourited' : ''}`}
          onClick={() => onFavourite(property)}
        >
          {isFavourite ? '★ Favourite' : '☆ Add to Favourite'}
        </button>
      </div>
    </div>
  );
}
