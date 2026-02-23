import SaintCard from "../components/SaintCard";
import therese_galery from "../assets/Sainte-Thérèse-galerie.jpg";

type SaintsType = {
  id: number;
  name: string;
  img: string | null;
};

const saints: SaintsType[] = [
  {
    id: 1,
    name: "Saint Thomas d'Aquin",
    img: null,
  },
  {
    id: 2,
    name: "Saint Anselme",
    img: null,
  },
  {
    id: 3,
    name: "Sainte Thérèse de l'Enfant-Jésus et de la Sainte Face",
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
