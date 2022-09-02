import { render, screen } from '@testing-library/react';
import React from "react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { Sidebar } from "./components/shopPageComponents/Sidebar"

describe("Navbar Links", () => {
  it('Renders Homepage', () => {
    render(<a href="https://test.com">Home</a>);
    const link = screen.getByText('Home')
    userEvent.click(link)
    expect(screen.getByText("Home")).toHaveAttribute('href', 'https://test.com')
  })

  it('Renders Shop Page', () => {
    render(<a href="http://test.com/shop">Shop</a>)
    const link = screen.getByText('Shop')
    userEvent.click(link)
    expect(screen.getByText("Shop")).toHaveAttribute('href', 'http://test.com/shop')
  })
})

test('Renders sidebar', () => {
  const { getByText } = render(<Sidebar/>)
  expect(screen.getByText('Placeholder for cart quantity')).toBeInTheDocument()
})
