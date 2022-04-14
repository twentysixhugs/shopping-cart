interface QuantityProps {
  quantity: number;
}

export default function Quantity({ quantity }: QuantityProps) {
  return (
    <div className="c-quantity-input">
      <button className="c-quantity-input__btn">-</button>
      <span className="c-quantity-input__quantity">{quantity}</span>
      <button className="c-quantity-input__btn">+</button>
    </div>
  );
}
