import SaintCard from "../components/SaintCard";

type SaintsType = {
  id: number;
  name: string;
  prayer: string;
};

const saints: SaintsType[] = [
  {
    id: 1,
    name: "Saint Thomas d'Aquin",
    prayer: "Seigneur, guide moi dans tes sentiers",
  },
  {
    id: 2,
    name: "Saint Anselme",
    prayer: "Seigneur, aide-moi !",
  },
  {
    id: 3,
    name: "Sainte Thérèse de l'Enfant-Jésus et de la Sainte Face",
    prayer: "Dans le coeur de l'Eglise, ma mère, je serai l'amour",
  },
];

function SaintsGalery() {
  return (
    <>
      {saints.map((saint)=> {
        return <SaintCard key={saint.id} saint={saint}/>
      })}
    </>
  );
}

export default SaintsGalery;
