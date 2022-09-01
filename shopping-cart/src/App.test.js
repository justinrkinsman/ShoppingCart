import { render, screen } from '@testing-library/react';
import { Homepage } from './Homepage';
import React from "react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

test('renders learn react link', () => {
  render(<Homepage />);
  const linkElement = screen.getByText('Bloodbath Records');
  expect(linkElement).toBeInTheDocument();
});
