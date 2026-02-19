type SaintsType = {
  id: number;
  name: string;
  prayer: string;
};

type SaintsTypeProps = {
    saint: SaintsType
}

function SaintCard({ saint }: SaintsTypeProps) {
  return (
    <>
      <h1>{saint.name}</h1>
      <p>{saint.prayer}</p>
    </>
  );
}

export default SaintCard;
