import jeanne_img from "../assets/Bannière de Sainte Jeanne d_Arc.gif";
import fleur_de_lis from "../assets/fleur-de-lys-bleue.png";
import "./PrayerGroup.css";

function PrayerGroup() {
  return (
    <>
      <figure>
        <img className="jeanne-img" src={jeanne_img} alt="" />
      </figure>
      <h1>Groupe de prière Sainte Jeanne d'Arc</h1>
      <figure>
        <img className="fleur-de-lis" src={fleur_de_lis} alt="" />
      </figure>
        <blockquote className="quote-container">
          <p className="john-paul-ii-quote">
            France ! Qu’as-tu fait des promesses de ton baptême ?
          </p>
          <cite className="john-paul-ii">Saint Jean Paul II</cite>
        </blockquote>
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
          France :
          <ol>
            <li>Saint Remi de Reims (15/01)</li>
            <li>Bienheureuse Isabelle de France (24/02)</li>
            <li>Saint Joseph de Nazareth (19/03)</li>
            <li>Sainte Jeanne d’Arc (30/05)</li>
            <li>Sainte Clothilde (04/06)</li>
            <li>Saint Louis roi de France (25/08)</li>
            <li>Saint Jacques de Compostelle (25/07)</li>
            <li>Saint Michel Archange (29/09)</li>
            <li>Sainte Thérèse de Lisieux (01/10)</li>
            <li>Saint Martin de Tours (11/11)</li>
            <li>Immaculée Conception (08/12)</li>
          </ol>
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
