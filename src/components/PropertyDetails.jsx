import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyTabs from './PropertyTabs';
import PropertyGallery from './PropertyGallery';
import properties from '../data/properties.json';
import './PropertyDetails.css';

export default function PropertyDetails({ favourites, onFavourite }) {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) return <p>Property not found</p>;

  const isFavourite = favourites?.some((p) => p.id === property.id);

  return (
    <div className="property-details-page">
      <h2>{property.type}</h2>
      <PropertyGallery images={property.images || []} />

      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Location:</strong> {property.location}</p>

      <button
  className={`favourite-button ${isFavourite ? 'favourited' : ''}`}
  onClick={() => onFavourite(property)}
  disabled={isFavourite}
>
  {isFavourite ? '★ Favourite' : '☆ Add to Favourite'}
</button>


      <PropertyTabs
        description={property.description}
        floorPlanUrl={property.floorPlan}
        mapEmbedUrl={property.mapEmbed}
      />
    </div>
  );
}
