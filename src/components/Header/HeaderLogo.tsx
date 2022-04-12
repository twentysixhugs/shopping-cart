import { NavLink } from 'react-router-dom';

export default function HeaderLogo() {
  return (
    <div className="c-header-logo">
      <NavLink className="c-header-logo__link" to="/" />
      <svg className="c-header-logo__image" viewBox="0 0 24 24">
        <path
          fill="white"
          d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
        />
      </svg>
      <h2 className="c-header-logo__text">HugShop</h2>
    </div>
  );
}
