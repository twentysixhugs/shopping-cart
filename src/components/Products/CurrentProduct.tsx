import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { getCategory } from '../../products-data/categories';
import Quantity from './Quantity';

export default function CurrentProduct() {
  const [quantity, setQuantity] = useState(0);
  // TODO: query from cart || 0

  const params = useParams();
  const category = getCategory(params.categoryName!);
  let product;

  if (category.products) {
    product = category.products.find(
      (product) => product.id === parseInt(params.productId || ''),
    );
  }

  if (!product) {
    return <Navigate replace to="/not-found"></Navigate>;
  }

  return (
    <div className="c-current-product">
      <img className="c-current-product__img" src={product.img}></img>
      <div className="c-current-product__main-wrapper">
        <h3 className="c-current-product__name">{product.name}</h3>
        <span className="c-current-product__price">{product.price}</span>
        <div className="c-current-product__ui-wrapper">
          <Quantity quantity={quantity} />
          <button className="c-current-product__add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
