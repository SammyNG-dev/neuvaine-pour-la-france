import SaintCard from "../components/SaintCard";

type SaintType = {
  id: number;
  name: string;
  prayer: string;
};

const saint: SaintType = {
  id: 1,
  name: "Saint Thomas d'Aquin",
  prayer: "Seigneur, guidez moi\ndans vos sentiers",
};

function SaintsGalery() {
  return (
    <>
      <SaintCard />
    </>
  );
}

export default SaintsGalery;
