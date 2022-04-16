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
  const shouldRenderCart = cart.length > 0;

  if (shouldRenderCart) {
    const total = cart.reduce((prev, cur) => {
      return prev + parseInt(cur.price.slice(1)) * cur.quantity;
    }, 0);

    return (
      <div className="c-cart">
        <h1 className="c-cart__heading">Cart</h1>
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
        <div className="c-cart__check-out-wrapper">
          <span className="c-cart__total">Total: ${total}</span>
          <button
            className="c-cart__check-out"
            onClick={() => {
              alert('Thanks for coming by!');
              cart.forEach((cartItem) => onItemRemove(cartItem.id));
            }}
          >
            Check out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="c-cart">
        <h1 className="c-cart__heading">Cart</h1>
        <div className="c-cart__empty-cart-wrapper">
          There&apos;s nothing yet!
        </div>
      </div>
    );
  }
}
