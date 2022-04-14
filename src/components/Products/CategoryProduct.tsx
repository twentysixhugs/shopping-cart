interface CategoryProductProps {
  name: string;
  price: string;
  img: string;
}

export default function CategoryProduct({
  name,
  price,
  img,
}: CategoryProductProps) {
  return (
    <div className="c-category-product">
      <img className="c-category-product__img" src={img}></img>
      <h5 className="c-category-product__name">{name}</h5>
      <h6 className="c-category-product__price">{price}</h6>
    </div>
  );
}
