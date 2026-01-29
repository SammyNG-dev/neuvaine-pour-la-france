import nplf_logo from "../assets/Logo_neuvaine_rond_transparent.png";
import "./Header.css";
import BurgerButton from "./BurgerButton.tsx";

function Header() {
  return (
    <>
      <div className="header-head">
        <img
          className="header-head-logo"
          src={nplf_logo}
          alt="Lofo de 'Neuvaine pour la France"
        />
        <BurgerButton />
        <nav className="header-navbar">
          <ul className="menu-desktop">
            <li className="header-desktop-link">L'esprit des neuvaines</li>
            <li className="header-desktop-link">Prières pour la France</li>
            <li className="header-desktop-link">Citations et testaments</li>
            <li className="header-desktop-link">Groupe de prière</li>
            <li className="header-desktop-link">Inscription</li>
            <li className="header-desktop-link">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="header-image-background">
        <img src={nplf_logo} className="header-image-logo" alt="" />
      </div>
    </>
  );
}

export default Header;
