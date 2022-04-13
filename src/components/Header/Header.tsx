import Navbar from './Navbar';
import HeaderLogo from './HeaderLogo';
import './Header.css';

export default function Header() {
  return (
    <header className="c-header">
      <HeaderLogo />
      <Navbar />
    </header>
  );
}
