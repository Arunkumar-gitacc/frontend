// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders Home navigation link', () => {
//   render(<App />);
//   const homeLink = screen.getByText(/Home/i);
//   expect(homeLink).toBeInTheDocument();
// });

// test('renders About Us section heading', () => {
//   render(<App />);
//   const aboutHeading = screen.getByText(/ABOUT US/i);
//   expect(aboutHeading).toBeInTheDocument();
// });





import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Home navigation link', () => {
  render(<App />);
  const homeLink = screen.getByRole('link', { name: /^home$/i });
  expect(homeLink).toBeInTheDocument();
});

test('renders About Us section heading', () => {
  render(<App />);
  const aboutHeading = screen.getByRole('heading', { name: /about us/i });
  expect(aboutHeading).toBeInTheDocument();
});
