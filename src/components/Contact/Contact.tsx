import SocialNetworks from './SocialNetworks';

export default function Contact() {
  return (
    <div className="c-contact">
      <div className="c-contact__wrapper">
        <h3 className="c-contact__title">About</h3>
        <SocialNetworks />
        <p className="c-contact__info">Made with love by Iaan Lamanosau</p>
        <a
          className="c-contact__link"
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
