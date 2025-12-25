import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyCard.css';

export default function PropertyCard({ property, onFavourite, favourites }) {
  const isFavourite = favourites?.some((fav) => fav.id === property.id);

  return (
    <div className="property-card">

      {/* Image */}
      <div className="property-image-wrapper">
        <img
          src={property.picture}
          alt={property.type}
          className="property-image"
        />

        {property.images && property.images.length > 1 && (
          <span className="image-count">
            +{property.images.length - 1}
          </span>
        )}
      </div>

      {/* Details */}
      <div className="property-details">
        <h3 className="property-title">{property.type}</h3>

        <p className="property-info">
          Bedrooms: {property.bedrooms}
        </p>

        <p className="property-location">{property.location}</p>

        <p className="property-price">
          Rs {property.price.toLocaleString()}
        </p>

        <div className="property-buttons">

          {/* ✅ SPA navigation */}
          <Link
            to={`/property/${property.id}`}
            className="property-button"
          >
            View Details
          </Link>

          {/* Favourite */}
          <button
            className={`favourite-button ${isFavourite ? 'favourited' : ''}`}
            onClick={() => onFavourite(property)}
            disabled={isFavourite}
          >
            {isFavourite ? '★ Favourite' : '☆ Add to Favourite'}
          </button>

        </div>
      </div>
    </div>
  );
}
