import { Outlet } from 'react-router-dom';
import Categories from './Categories';

export default function Products() {
  return (
    <div className="c-products">
      <Categories />
      <Outlet />
    </div>
  );
}
