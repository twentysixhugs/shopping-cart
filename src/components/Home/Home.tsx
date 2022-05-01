import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="c-home">
      <h1 className="c-home__title">
        A really clever title<div className="c-home__title-effect"></div>
      </h1>
      <p className="c-home__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Consequatur quia ea at delectus earum iure, nemo dignissimos amet!
        Inventore modi architecto non repellendus dolore reprehenderit
        doloremque dicta optio perspiciatis enim! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit.
      </p>
      <Link className="c-home__link" to="/products/motherboards">
        Shop now
      </Link>
    </div>
  );
}
