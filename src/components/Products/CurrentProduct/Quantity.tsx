import React from 'react';

interface QuantityProps {
  quantity: number;
  onIncrease: React.MouseEventHandler;
  onDecrease: React.MouseEventHandler;
}

export default function Quantity({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityProps) {
  return (
    <div className="c-quantity-input">
      <button className="c-quantity-input__btn" onClick={onDecrease}>
        -
      </button>
      <span className="c-quantity-input__quantity">{quantity}</span>
      <button className="c-quantity-input__btn" onClick={onIncrease}>
        +
      </button>
    </div>
  );
}
