import { useEffect } from 'react';
import { Outlet, Navigate, useParams } from 'react-router-dom';
import { getCategory } from '../../products-data/categories';
import CategoryProduct from './CategoryProduct';

export default function CurrentCategoryDisplay() {
  const params = useParams();
  const category = getCategory(params.categoryName || '');

  if (category && category.products) {
    const products = category.products;

    return (
      <div className="c-current-category-display">
        <h1 className="c-current-category-display__title">
          {category.name}
        </h1>
        <div className="c-current-category-display__products">
          {products.map((product) => {
            return (
              <CategoryProduct
                name={product.name}
                img={product.img}
                price={product.price}
                key={product.id}
                location={`${product.id}`}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <Navigate replace to="/not-found"></Navigate>;
  }
}
