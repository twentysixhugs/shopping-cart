import { Outlet, useMatch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import './Products.css';

export default function Products() {
  /* This forces categories to be shown on desktops
  and allows to hide and show them on smaller screens */

  const [areCategoriesShownMedia, setAreCategoriesShownMedia] = useState(
    window.innerWidth > 768 ? true : false,
  );

  const [areCategoriesShownDemand, setAreCategoriesShownDemand] =
    useState(false);

  const showCategoriesOnMedia = function () {
    setAreCategoriesShownMedia(window.innerWidth > 768 ? true : false);
  };

  const toggleCategoriesOnDemand: React.MouseEventHandler = function () {
    setAreCategoriesShownDemand(!areCategoriesShownDemand);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addEventListener('change', showCategoriesOnMedia);

    return () =>
      mediaQuery.removeEventListener('change', showCategoriesOnMedia);
  }, []);

  const navigate = useNavigate();
  const match = useMatch('products');

  useEffect(() => {
    if (match) {
      navigate('motherboards');
    }
  }, [match, navigate]);
  return (
    <div className="c-products">
      <Categories
        onToggle={toggleCategoriesOnDemand}
        isShown={areCategoriesShownMedia || areCategoriesShownDemand}
        shouldShowCloseButton={
          areCategoriesShownDemand && !areCategoriesShownMedia
        }
      />
      <Outlet />
    </div>
  );
}
