import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../components/App';

// Mock properties data
const propertiesData = [
  {
    id: 'p1',
    type: 'House',
    bedrooms: 3,
    location: 'London',
    price: 750000,
    description: 'Beautiful house',
    picture: 'house.jpg',
  },
  {
    id: 'p2',
    type: 'House',
    bedrooms: 2,
    location: 'Bristol',
    price: 500000,
    description: 'Cozy house',
    picture: 'house2.jpg',
  },
];

describe('App Component', () => {
  test('renders App component and properties', () => {
    render(
      <MemoryRouter>
        <App properties={propertiesData} />
      </MemoryRouter>
    );

    // There are multiple houses, so use getAllByText
    const houseElements = screen.getAllByText(/house/i);
    expect(houseElements.length).toBeGreaterThan(0);

    // Optional: check first property
    expect(houseElements[0]).toBeInTheDocument();
  });
});
