import SaintCard from "../components/SaintCard";
import { useSaints } from "../contexts/SaintsContext";

function SaintsGalery() {
  const { saintsData } = useSaints();

  return (
    <>
      <h1 className="saints-galery-title">Saints de France</h1>
      {saintsData.map((saint) => {
        return <SaintCard key={saint.id} saint={saint} />;
      })}
    </>
  );
}

export default SaintsGalery;
