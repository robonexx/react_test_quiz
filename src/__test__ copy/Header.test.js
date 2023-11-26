import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('renders Header component and checks so there is a title text - Code Quiz', () => {
  render(<Header title='Code Quiz' />);

  const titleElement = screen.getByText(/Code Quiz/i);
  expect(titleElement).toBeInTheDocument();
});
