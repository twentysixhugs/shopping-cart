import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar links', () => {
  it('adds .c-nav__link--is-active class to the selected link', () => {
    render(<MockNavbar />);

    const link = screen.getByText(/about/i);

    userEvent.click(link);

    const linkClassList = Array.from(link.classList);

    expect(linkClassList).toContain('c-nav__link--is-active');
  });
});
