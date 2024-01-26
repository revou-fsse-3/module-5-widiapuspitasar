import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import "@testing-library/jest-dom/extend-expect"

describe('Button Component', () => {

  test('calls onClick callback when button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Next" onClick={onClickMock} />);
    const buttonElement = getByText('Next');

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(buttonElement).toMatchSnapshot();
  });

  test('applies additional className to the button', () => {
    const { getByText } = render(<Button label="Next" className="custom-button" onClick={function (): void {
        throw new Error('Function not implemented.');
    } } />);
    const buttonElement = getByText('Next');

    expect(buttonElement).toHaveClass('custom-button');
    expect(buttonElement).toMatchSnapshot();
  });
});
