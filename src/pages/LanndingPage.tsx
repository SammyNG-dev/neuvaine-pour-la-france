import { Link } from "react-router-dom";
import "./LandingPage.css";
import logo_nplf from "../assets/Logo_neuvaine_rond_transparent.png";

function LandingPage() {
  return (
    <div className="landing-div">
      <figure className="landing-image-container">
        <img className="landing-image" src={logo_nplf} alt='Logo de "Neuvaine pour la France' />
      </figure>
      <h1 className="landing-title">
        Rejoignez-nous pour la prochaine neuvaine qui débutera le 22 mai 2026
      </h1>
      <Link to="/page" className="enter-website-button">
        Entrer sur le site
      </Link>
    </div>
  );
}

export default LandingPage;
