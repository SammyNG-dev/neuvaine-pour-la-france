import { useState } from "react";
import "./BurgerButton.css";

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
        <li>L'esprit des neuvaines</li>
        <li>Prières pour la France</li>
        <li>Citations et testaments</li>
        <li>Groupe de prière</li>
        <li>Inscription</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default BurgerButton;
