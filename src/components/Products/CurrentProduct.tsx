import { useParams, Navigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { getCategory } from '../../products-data/categories';
import Quantity from './Quantity';
import { CartItem } from '../Cart/Cart';
import { Product } from '../../products-data/categories';

interface CurrentProductProps {
  onCartAdd: (
    id: number,
    quantity: number,
  ) => (e: React.MouseEvent) => void;
  cart: CartItem[];
}

export default function CurrentProduct({
  onCartAdd,
  cart,
}: CurrentProductProps) {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const handleQuantityChange = function (action: 'increase' | 'decrease') {
    if (action === 'decrease' && quantity !== 1) {
      setQuantity((q) => q - 1);
    } else if (action === 'increase' && quantity < 100) {
      setQuantity((q) => q + 1);
    }
  };

  const category = getCategory(params.categoryName!);

  let product: Product | undefined;
  if (category.products) {
    product = category.products.find(
      (product) => product.id === parseInt(params.productId || '') || null,
    );
  }

  if (!product) {
    return <Navigate replace to="/not-found"></Navigate>;
  }

  const isInCart = !!cart.find((cartItem) => cartItem.id === product!.id);

  return (
    <div className="c-current-product">
      <img className="c-current-product__img" src={product.img}></img>
      <div className="c-current-product__main-wrapper">
        <h3 className="c-current-product__name">{product.name}</h3>
        <span className="c-current-product__price">{product.price}</span>
        {!isInCart ? (
          <div className="c-current-product__ui-wrapper">
            <Quantity
              onIncrease={() => handleQuantityChange('increase')}
              onDecrease={() => handleQuantityChange('decrease')}
              quantity={quantity}
            />
            <button
              className="c-current-product__add-to-cart"
              onClick={onCartAdd(product.id, quantity)}
            >
              Add to cart
            </button>
          </div>
        ) : (
          <Link to="/cart" className="c-current-product__in-cart">
            In Cart
          </Link>
        )}
      </div>
    </div>
  );
}
