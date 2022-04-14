import { useEffect } from 'react';
import { Outlet, Navigate, useParams } from 'react-router-dom';
import { getCategoryProducts } from '../../products-data/categories';
import CategoryProduct from './CategoryProduct';

export default function CurrentCategoryDisplay() {
  const params = useParams();
  const products = getCategoryProducts(params.categoryName || '');

  if (products) {
    return (
      <div className="c-current-category-display">
        <h1 className="c-current-category-display__title">
          {params.categoryName}
        </h1>
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
      </div>
    );
  } else {
    return <Navigate replace to="/not-found"></Navigate>;
  }
}
