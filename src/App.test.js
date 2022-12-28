import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color, and updates when clicked', () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  //expect the backgroud color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

  //click button
  fireEvent.click(colorButton)

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })

  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red')
});

test('checkbox has correct initial unchecked, and updates color button to disabled when true', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled()

  const checkbox = screen.getByRole('checkbox', {checked: false})
  expect(checkbox).not.toBeChecked()

  fireEvent.click(checkbox)

  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()
})