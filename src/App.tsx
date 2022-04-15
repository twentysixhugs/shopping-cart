import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import NoMatch from './components/NoMatch/NoMatch';
import CurrentCategoryDisplay from './components/Products/CurrentCategoryDisplay';
import CurrentProduct from './components/Products/CurrentProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
              element={<CurrentProduct />}
            />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/not-found" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
