type SaintsType = {
  id: number;
  name: string;
  prayer: string;
  img: string | null;
};

type SaintsTypeProps = {
  saint: SaintsType;
};

function SaintCard({ saint }: SaintsTypeProps) {
  return (
    <>
      {saint.img ? <img src={saint.img} alt={saint.name} /> : null}
      <h1>{saint.name}</h1>
      <p>{saint.prayer}</p>
    </>
  );
}

export default SaintCard;
