import { useState } from "react";
import "./BurgerButton.css";
import { Link } from "react-router-dom";

function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-burger-button">
      <button
        className={`burger-btn ${isOpen ? "open" : ""}`}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`menu ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/page/esprit-des-neuvaines">L'esprit des neuvaines</Link>
        </li>
        <li>
          <Link to="/page/saints-de-france">Saints de France</Link>
        </li>
        <li>
          <Link to="/page/groupe-de-priere">Groupe de prière</Link>
        </li>
        <li>Inscription</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default BurgerButton;
