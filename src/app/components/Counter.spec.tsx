import { Counter } from "./Counter"
import { render, screen } from '@testing-library/react'


describe("Counter", () => {
  it('test', () => {
    render(<Counter />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
