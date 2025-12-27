import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails';

// Mock the JSON import your component uses
jest.mock('../data/properties.json', () => [
  {
    id: 'p1',
    type: 'House',
    bedrooms: 3,
    location: 'London',
    price: 750000,
    description:
      'Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland.',
    images: ['1.jpg', '1.1.jpg', '1.2.jpg'],
  },
]);

describe('PropertyDetails Component', () => {
  test('renders property details for valid ID', () => {
    render(
      <MemoryRouter initialEntries={['/property/p1']}>
        <Routes>
          <Route
            path="/property/:id"
            element={<PropertyDetails favourites={[]} onFavourite={() => {}} />}
          />
        </Routes>
      </MemoryRouter>
    );

// Check property details
expect(screen.getByText(/house/i, { selector: 'h2' })).toBeInTheDocument();
expect(screen.getByText(/London/, { selector: 'p' })).toBeInTheDocument();
expect(screen.getByText(/750,000/i, { selector: 'p' })).toBeInTheDocument();
expect(
  screen.getByText(
    /attractive three bedroom semi-detached family home situated within 0.5 miles/i,
    { selector: 'div.tab-text' }
  )
).toBeInTheDocument();

expect(screen.getByText(/☆ add to favourite/i, { selector: 'button' })).toBeInTheDocument();
expect(screen.getByText(/view all images/i, { selector: 'button' })).toBeInTheDocument();
  });

  test('shows "Property not found" for invalid ID', () => {
    render(
      <MemoryRouter initialEntries={['/property/invalid']}>
        <Routes>
          <Route
            path="/property/:id"
            element={<PropertyDetails favourites={[]} onFavourite={() => {}} />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/property not found/i)).toBeInTheDocument();
  });
});
