import SocialNetworks from './SocialNetworks';
import './About.css';

export default function About() {
  return (
    <div className="c-about">
      <div className="c-about__wrapper">
        <h3 className="c-about__title">About</h3>
        <SocialNetworks />
        <p className="c-about__info">Made with love by Iaan Lamanosau</p>
        <a
          className="c-about__link"
          href="https://twentysixhugs.github.io/shopping-cart"
          target="_blank"
          rel="noreferrer"
        >
          View code
        </a>
      </div>
    </div>
  );
}
