interface CartProductProps {
  name: string;
  price: string;
  img: string;
  quantity: number;
  onRemove: React.MouseEventHandler;
}

export default function CartProduct({
  name,
  price,
  img,
  quantity,
  onRemove,
}: CartProductProps) {
  return (
    <div className="c-cart-product">
      <img className="c-cart-product__img" src={img}></img>
      <h5 className="c-cart-product__name">{name}</h5>
      <h6 className="c-cart-product__price">{price}</h6>
      <span className="c-cart-product__quantity">
        Quantity: {quantity}
      </span>
      <button className="c-cart-product__remove" onClick={onRemove}>
        {'\u00d7'}
      </button>
    </div>
  );
}
