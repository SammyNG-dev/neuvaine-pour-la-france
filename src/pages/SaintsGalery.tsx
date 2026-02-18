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
      <h1>Les saints patrons de France</h1>
      <h2>{saint.name}</h2>
      <p>{saint.prayer}</p>
    </>
  );
}

export default SaintsGalery;
