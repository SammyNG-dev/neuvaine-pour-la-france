import jeanne_img from "../assets/Bannière de Sainte Jeanne d_Arc.gif";
import "./PrayerGroup.css";

function PrayerGroup() {
  return (
    <>
      <figure className="jeanne-img-container">
        <img className="jeanne-img" src={jeanne_img} alt="" />
      </figure>
      <h1>Groupe de prière Sainte Jeanne d'Arc</h1>
      <p>
        Le Groupe de prière lyonnais « Sainte Jeanne d’Arc » prie pour notre
        pays et nos compatriotes dans l’esprit des apparitions mariales de
        l’Ile-Bouchard (diocèse de Tours).
      </p>
      <p>Il propose et anime :</p>
      <ul className="prayer-group-activities">
        <li>
          Quatre neuvaines des saints patrons secondaire de la France en
          l’église Saint George de Lyon, de 19h 15 à 19h 30 lors des neuvaines.
          Pour chacune des neuvaines, une nuit d’adoration sera proposé avant le
          dernier jour de la fête des saints patrons.
        </li>
        <li>
          Une Messe mensuelle pour la France et un thème particulier au sein du
          diocèse de Lyon. Proposition de placer une messe pour un saint de
          France (Saint Remi de Reims (15/01), Bienheureuse Isabelle de France
          (24/02), Saint Joseph de Nazareth (19/03), Sainte Jeanne d’Arc
          (30/05), Sainte Clothilde (04/06), Saint Jacques de Compostelle
          (25/07), Saint Louis roi de France (25/08), Saint Michel Archange
          (29/09), Sainte Thérèse de Lisieux (01/10), Saint Martin de Tours
          (11/11), Immaculée Conception (08/12))
        </li>
        <li>
          Un Pèlerinage annuel et nocturne pour la France de Vienne à Notre-Dame
          de Fourvière (le deuxième week-end de Mars).
        </li>
      </ul>
      <p className="for-contact">
        <span>Pour connaître les dates : contactez Bruno Vacher</span>
        <span>neuvainepourlafrance@hotmail.com</span>
      </p>
    </>
  );
}

export default PrayerGroup;
