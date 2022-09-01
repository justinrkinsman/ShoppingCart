import { render, screen } from '@testing-library/react';
import { Homepage } from './components/Homepage';
import React from "react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

test('render company name to homepage', () => {
  render(<Homepage />);
  const linkElement = screen.getByText('Bloodbath Records');
  expect(linkElement).toBeInTheDocument();
});
