// @ts-ignore
import ReactDOMClient from 'react-dom/client';
import './reset.css';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import About from './components/Contact/About';
import Cart from './components/Cart/Cart';
import NoMatch from './components/NoMatch/NoMatch';
import CurrentCategoryDisplay from './components/Products/CurrentCategoryDisplay';

const root = ReactDOMClient.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route
            path=":categoryName"
            element={<CurrentCategoryDisplay />}
          ></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
