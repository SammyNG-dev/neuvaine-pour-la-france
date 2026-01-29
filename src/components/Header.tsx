import nplf_logo from "../assets/Logo_neuvaine_rond_transparent.png";
import "./Header.css";
import BurgerButton from "./BurgerButton.tsx";

function Header() {
  return (
    <>
      <div className="header-head">
        <img className="header-head-logo" src={nplf_logo} alt="Lofo de 'Neuvaine pour la France" />
        <BurgerButton />
      </div>
      <div className="header-image-background">
        <img src={nplf_logo} className="header-image-logo" alt="" />
      </div>
    </>
  );
}

export default Header;
