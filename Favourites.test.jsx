import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Favourites from '../components/Favourites';

const favs = [{ id: 'p1', type: 'House' }];

test('removes a favourite when remove button is clicked', async () => {
  const user = userEvent.setup();
  const mockRemove = jest.fn();
  render(<Favourites favourites={favs} removeFavourite={mockRemove} clearFavourites={() => {}} />);
  
  await user.click(screen.getByText(/remove/i));
  expect(mockRemove).toHaveBeenCalledWith('p1');
});
