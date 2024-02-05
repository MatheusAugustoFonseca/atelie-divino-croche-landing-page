import logo from '../../public/logo.png';

function Header() {
  return (
    <header>
      <img src={ logo } alt="Logo Ateliê Divino Crochê" />
      <nav>
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="">Crochê</a></li>
          <li><a href="#">Costura</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Sobre mim</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
