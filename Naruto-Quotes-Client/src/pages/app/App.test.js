import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { App } from './App'

test('render the app with a button, a quote a button', () => {
   render( <App /> )

   const buttonEl = screen.getByRole('button')
   const imageEl = screen.getByRole('img')
   const textEl = screen.getByText(/Speaker/i)

   expect(buttonEl).toBeInTheDocument()
   expect(imageEl).toBeInTheDocument()
   expect(textEl).toBeInTheDocument()
})