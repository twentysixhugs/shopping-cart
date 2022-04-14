import { Link } from 'react-router-dom';

interface CategoryProductProps {
  name: string;
  price: string;
  img: string;
  location: string;
}

export default function CategoryProduct({
  name,
  price,
  img,
  location,
}: CategoryProductProps) {
  return (
    <div className="c-category-product">
      <img className="c-category-product__img" src={img}></img>
      <h5 className="c-category-product__name">{name}</h5>
      <h6 className="c-category-product__price">{price}</h6>
      <Link className="c-category-product__link" to={location}></Link>
    </div>
  );
}
