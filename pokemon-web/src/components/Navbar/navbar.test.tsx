import { render } from '@testing-library/react';
import Navbar from '.';
import "@testing-library/jest-dom/extend-expect"

test('Navbar renders correctly', () => {
  const { getByAltText } = render(<Navbar />);

  const logoElement = getByAltText('Pokemon Image');
  expect(logoElement).toBeInTheDocument();
  expect(logoElement.firstChild).toMatchSnapshot();
  
});
