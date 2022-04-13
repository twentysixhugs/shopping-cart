import { Outlet } from 'react-router-dom';
import Categories from './Categories';
import './Products.css';

export default function Products() {
  return (
    <div className="c-products">
      <Categories />
      <Outlet />
    </div>
  );
}
