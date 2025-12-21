import React from 'react';
import './Favourites.css'

export default function Favourites({ favourites, removeFavourite, clearFavourites }) {
  return (
    <aside
      className="favourites"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const property = JSON.parse(e.dataTransfer.getData('property'));
        removeFavourite(property.id);
      }}
    >
      <h3>Favourites</h3>

      {favourites.map((p) => (
        <div key={p.id}>
          {p.type}
          <button onClick={() => removeFavourite(p.id)}>Remove</button>
        </div>
      ))}

      <button onClick={clearFavourites}>Clear All</button>
    </aside>
  );
}
