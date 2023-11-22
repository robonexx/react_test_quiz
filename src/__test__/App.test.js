import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Header and Quiz components in App', () => {
  render(<App />);

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const quizElement = screen.getByTestId('quiz');
  expect(quizElement).toBeInTheDocument();
});
