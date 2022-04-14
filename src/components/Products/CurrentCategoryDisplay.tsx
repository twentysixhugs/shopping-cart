import { useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { getCategoryProducts } from '../../products-data/categories';
import CategoryProduct from './CategoryProduct';

export default function CurrentCategoryDisplay() {
  const params = useParams();
  const navigate = useNavigate();
  const products = getCategoryProducts(params.categoryName || '');

  useEffect(() => {
    if (!products) {
      navigate('/*');
    }
  }, []);

  if (products) {
    return (
      <div className="c-current-category-display">
        <h1 className="c-current-category-display__title">
          {params.categoryName}
          {products.map((product) => {
            return (
              <CategoryProduct
                name={product.name}
                img={product.img}
                price={product.price}
                key={product.id}
              />
            );
          })}
        </h1>
      </div>
    );
  } else {
    return null;
  }
}
