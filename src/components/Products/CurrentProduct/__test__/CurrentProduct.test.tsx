import CurrentProduct from '../CurrentProduct';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartItem } from '../../../Cart/Cart';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('quantity', () => {
  it('can increase and decrease quantity', () => {
    const onCartAddMock = jest.fn();
    const cart: CartItem[] = [];

    const { container } = render(
      <MemoryRouter initialEntries={['/products/motherboards/1']}>
        <Routes>
          <Route
            path="/products/:categoryName/:productId"
            element={
              <CurrentProduct onCartAdd={onCartAddMock} cart={cart} />
            }
          ></Route>
        </Routes>
      </MemoryRouter>,
    );

    const increaseBtn = screen.getByRole('button', { name: '+' });
    const decreaseBtn = screen.getByRole('button', { name: '-' });

    userEvent.click(increaseBtn);

    expect(
      (
        container.querySelector(
          '.c-quantity-input__quantity',
        ) as HTMLSpanElement
      ).textContent,
    ).toBe('2');

    userEvent.click(decreaseBtn);

    expect(
      (
        container.querySelector(
          '.c-quantity-input__quantity',
        ) as HTMLSpanElement
      ).textContent,
    ).toBe('1');
  });
  it('quantity cannot be higher than 99', () => {
    const onCartAddMock = jest.fn();
    const cart: CartItem[] = [];

    const { container } = render(
      <MemoryRouter initialEntries={['/products/motherboards/1']}>
        <Routes>
          <Route
            path="/products/:categoryName/:productId"
            element={
              <CurrentProduct onCartAdd={onCartAddMock} cart={cart} />
            }
          ></Route>
        </Routes>
      </MemoryRouter>,
    );

    const increaseBtn = screen.getByRole('button', { name: '+' });

    for (let i = 0; i < 100; i++) {
      // try to get it over 100
      userEvent.click(increaseBtn);
    }

    expect(
      (
        container.querySelector(
          '.c-quantity-input__quantity',
        ) as HTMLSpanElement
      ).textContent,
    ).toBe('100');
  });
});
