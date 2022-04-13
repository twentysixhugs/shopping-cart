import React from 'react';
import { NavLink } from 'react-router-dom';

interface CategoryProps {
  locationName?: number;
  children?: React.ReactNode;
  name: string;
}

export default function Category({
  locationName,
  children,
  name,
}: CategoryProps) {
  const [isExpanded, setIsExpanded] = React.useState(true);

  const handleToggleButtonClick: React.MouseEventHandler<HTMLButtonElement> =
    function (e) {
      setIsExpanded(!isExpanded);
    };

  return (
    <li className="c-category">
      {children && (
        <button
          className="c-category__toggle"
          onClick={handleToggleButtonClick}
        >
          {isExpanded ? '-' : '+'}
        </button>
      )}
      {locationName ? (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'c-category__link c-category__link--is-active'
              : 'c-category__link'
          }
          to={`./${locationName}`}
        >
          {name}
        </NavLink>
      ) : (
        name
      )}

      {isExpanded && children}
    </li>
  );
}
