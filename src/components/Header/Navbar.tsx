import { NavLink } from 'react-router-dom';
import cartSVG from './cart.svg';

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
          isActive
            ? 'c-nav__link c-nav__link--cart c-nav__link--is-active'
            : 'c-nav__link c-nav__link--cart'
        }
        to="/cart"
      >
        <img className="c-nav__cart" src={cartSVG}></img>
      </NavLink>
    </nav>
  );
}
