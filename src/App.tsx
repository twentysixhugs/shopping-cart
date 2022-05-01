import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Home from './components/Home/Home';
import Products from './components/Products/Products/Products';
import About from './components/About/About';
import Cart, { CartItem } from './components/Cart/Cart';
import NoMatch from './components/NoMatch/NoMatch';
import CurrentCategoryDisplay from './components/Products/Products/CurrentCategoryDisplay';
import CurrentProduct from './components/Products/CurrentProduct/CurrentProduct';

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
