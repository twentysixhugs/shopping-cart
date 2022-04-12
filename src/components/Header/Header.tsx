import Navbar from './Navbar';
import HeaderLogo from './HeaderLogo';

export default function Header() {
  return (
    <header className="c-header">
      <HeaderLogo />
      <Navbar />
    </header>
  );
}
