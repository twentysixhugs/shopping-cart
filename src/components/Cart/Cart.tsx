import { Product } from '../../products-data/categories';
import CartProduct from './CartProduct';
import './Cart.css';

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
}

export default function Cart({ cart }: CartProps) {
  return (
    <div className="c-cart">
      {cart.map((cartItem) => {
        return (
          <CartProduct
            name={cartItem.name}
            price={cartItem.price}
            img={cartItem.img}
            key={cartItem.id}
            quantity={cartItem.quantity}
          />
        );
      })}
    </div>
  );
}
