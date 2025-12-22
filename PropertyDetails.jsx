import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyTabs from './PropertyTabs';

import properties from '../data/properties.json';
import PropertyGallery from './PropertyGallery';
import './PropertyDetails.css'

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="property-details-page">
      <h2>{property.type}</h2>
      <PropertyGallery images={property.images || []} />

      
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Location:</strong> {property.location}</p>
      <PropertyTabs
  description={property.description}
  floorPlanUrl={property.floorPlan}
  mapEmbedUrl={property.mapEmbed}
/>
    </div>
  );
}
