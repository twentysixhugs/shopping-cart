interface CartProductProps {
  name: string;
  price: string;
  img: string;
  quantity: string | number;
}

export default function CartProduct({
  name,
  price,
  img,
  quantity,
}: CartProductProps) {
  return (
    <div className="c-cart-product">
      <img className="c-cart-product__img" src={img}></img>
      <h5 className="c-cart-product__name">{name}</h5>
      <h6 className="c-cart-product__price">{price}</h6>
      <span className="c-cart-product__quantity">{quantity}</span>
    </div>
  );
}
