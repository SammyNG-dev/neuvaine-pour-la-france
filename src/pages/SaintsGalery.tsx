import SaintCard from "../components/SaintCard";
import therese_galery from "../assets/Sainte-Thérèse-galerie.jpg";

type SaintsType = {
  id: number;
  name: string;
  prayer: string;
  img: string | null;
};

const saints: SaintsType[] = [
  {
    id: 1,
    name: "Saint Thomas d'Aquin",
    prayer: "Seigneur, guide moi dans tes sentiers",
    img: null,
  },
  {
    id: 2,
    name: "Saint Anselme",
    prayer: "Seigneur, aide-moi !",
    img: null,
  },
  {
    id: 3,
    name: "Sainte Thérèse de l'Enfant-Jésus et de la Sainte Face",
    prayer: "Dans le coeur de l'Eglise, ma mère, je serai l'amour",
    img: therese_galery,
  },
];

function SaintsGalery() {
  return (
    <>
      {saints.map((saint) => {
        return <SaintCard key={saint.id} saint={saint} />;
      })}
    </>
  );
}

export default SaintsGalery;
