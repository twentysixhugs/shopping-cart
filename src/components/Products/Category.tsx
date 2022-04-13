import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryProps {
  locationName: number;
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
      <Link to={`./${locationName}`}>{name}</Link>
      {isExpanded && children}
    </li>
  );
}
