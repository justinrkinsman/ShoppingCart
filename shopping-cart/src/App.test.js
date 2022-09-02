import { render, screen } from '@testing-library/react';
import { Homepage } from './components/Homepage';
import React from "react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

describe("Navbar Links", () => {
  it('Renders Homepage', () => {
    const { getByText } = render(<a href="https://test.com">Home</a>);
    const link = screen.getByText('Home')
    userEvent.click(link)
    expect(screen.getByText("Home")).toHaveAttribute('href', 'https://test.com')
  })

  it('Renders Shop Page', () => {
    const { getByText } = render(<a href="http://test.com/shop">Shop</a>)
    const link = screen.getByText('Shop')
    userEvent.click(link)
    expect(screen.getByText("Shop")).toHaveAttribute('href', 'http://test.com/shop')
  })
})
