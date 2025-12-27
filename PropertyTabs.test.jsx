import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyTabs from '../components/PropertyTabs';

describe('PropertyTabs Component', () => {
  test('renders Description, Floor Plan, and Map tabs', () => {
    render(<PropertyTabs description="" floorPlanUrl="" mapEmbedUrl="" />);
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/floor plan/i)).toBeInTheDocument();
    expect(screen.getByText(/map/i)).toBeInTheDocument();
  });

  test('renders description text', () => {
    const description = 'Test property description';
    render(<PropertyTabs description={description} floorPlanUrl="" mapEmbedUrl="" />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
