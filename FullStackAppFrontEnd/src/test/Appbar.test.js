// Appbar.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Appbar from '../components/Appbar';

describe('Appbar', () => {
  test('renders appbar with menu icon and title', () => {
    render(<Appbar />);

    // Check if the menu icon is rendered
    const menuIcon = screen.getByLabelText('menu');
    expect(menuIcon).toBeInTheDocument();

    // Check if the title is rendered
    const title = screen.getByText(/Spring Boot React Full Stack Application/i);
    expect(title).toBeInTheDocument();
  });
});
