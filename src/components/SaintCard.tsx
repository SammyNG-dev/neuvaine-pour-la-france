type SaintType = {
  id: number;
  name: string;
  prayer: string;
};

const saint: SaintType = {
  id: 1,
  name: "Saint Anselme",
  prayer: "Seigneur, aide-moi",
};

function SaintCard() {
  return (
    <>
      <h1>{saint.name}</h1>
      <p>{saint.prayer}</p>
    </>
  );
}

export default SaintCard;
