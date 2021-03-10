import '../index.css';
import logo from '../../src/images/logo.svg';

function Header() {
  return (
      <>
        <header className="header">
            <img src={logo} className="header__logo" alt="Логотип сайта" />
  </header>
  </>
  );
}

export default Header;
