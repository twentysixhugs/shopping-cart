import React from 'react';
import Header from '../Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Home from '../Home/Home';
import Products from '../Products/Products/Products';
import About from '../About/About';
import Cart, { CartItem } from '../Cart/Cart';
import NoMatch from '../NoMatch/NoMatch';
import CurrentCategoryDisplay from '../Products/Products/CurrentCategoryDisplay';
import CurrentProduct from '../Products/CurrentProduct/CurrentProduct';

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback(
    ({ id, name, price, img, quantity }: CartItem) => {
      return function () {
        setCart([...cart, { id, name, price, img, quantity }]);
      };
    },
    [cart],
  );

  function handleItemRemove(id: number) {
    setCart((cart) => cart.filter((cartItem) => cartItem.id !== id));
  }

  return (
    <div className="App">
      <BrowserRouter basename="/shopping-cart">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route
              path=":categoryName"
              element={<CurrentCategoryDisplay />}
            />
            <Route
              path=":categoryName/:productId"
              element={
                <CurrentProduct onCartAdd={handleAddToCart} cart={cart} />
              }
            />
          </Route>
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onItemRemove={handleItemRemove} />}
          />
          <Route path="/not-found" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
