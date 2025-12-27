import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const property = {
  id: 'p1',
  type: 'House',
  bedrooms: 3,
  location: 'London',
  price: 750000,
  picture: 'house.jpg',
};

describe('PropertyCard Component', () => {
  test('renders property details correctly', () => {
    render(
      <MemoryRouter>
        <PropertyCard property={property} favourites={[]} onFavourite={() => {}} />
      </MemoryRouter>
    );
    expect(screen.getByText(/house/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
    expect(screen.getByText(/london/i)).toBeInTheDocument();
  });

  test('favourite button works', async () => {
    const user = userEvent.setup();
    const mockFav = jest.fn();
    render(
      <MemoryRouter>
        <PropertyCard property={property} favourites={[]} onFavourite={mockFav} />
      </MemoryRouter>
    );
    await user.click(screen.getByText(/☆ add to favourite/i));
    expect(mockFav).toHaveBeenCalled();
  });
});
