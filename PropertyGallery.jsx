import React, { useState } from 'react';
import './PropertyGallery.css';

export default function PropertyGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="gallery">

      {/* Large Image */}
      <div className="main-image">
        <img src={mainImage} alt="Property" />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
            className={mainImage === img ? 'active' : ''}
          />
        ))}
      </div>

      {/* View All Button */}
      <button className="view-all-btn" onClick={() => setShowAll(true)}>
        View All Images
      </button>

      {/* Modal */}
      {showAll && (
        <div className="modal" onClick={() => setShowAll(false)}>
          <div className="modal-content">
            {images.map((img, index) => (
              <img key={index} src={img} alt="All Images" />
            ))}
          </div>
        </div>
      )}
      

    </div>
  );
}
