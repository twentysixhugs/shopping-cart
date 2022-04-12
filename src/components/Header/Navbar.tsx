import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="c-nav">
      <NavLink className="c-nav__link" to="/">
        Home
      </NavLink>
      <NavLink className="c-nav__link" to="/products">
        Products
      </NavLink>
      <NavLink className="c-nav__link" to="/contact">
        Contacts
      </NavLink>
      <NavLink className="c-nav__link c-nav__link--cart" to="/cart">
        [Cart]
      </NavLink>
    </nav>
  );
}
