import { Product } from '../../products-data/categories';
import CartProduct from './CartProduct';
import './Cart.css';

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  onItemRemove: (id: number) => void;
}

export default function Cart({ cart, onItemRemove }: CartProps) {
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
            onRemove={() => onItemRemove(cartItem.id)}
          />
        );
      })}
      <button className="c-cart__check-out">Check out</button>
    </div>
  );
}
