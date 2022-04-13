import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="c-nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'c-nav__link c-nav__link--is-active' : 'c-nav__link'
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'c-nav__link c-nav__link--is-active' : 'c-nav__link'
        }
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'c-nav__link c-nav__link--is-active' : 'c-nav__link'
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'c-nav__link c-nav__link--is-active' : 'c-nav__link'
        }
        to="/cart"
      >
        [Cart]
      </NavLink>
    </nav>
  );
}
