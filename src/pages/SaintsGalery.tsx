import SaintCard from "../components/SaintCard";
import { useSaints } from "../contexts/SaintsContext";

function SaintsGalery() {
  const { enrichiedSaintsData } = useSaints();

  return (
    <>
      <h1 className="saints-galery-title">Saints de France</h1>
      {enrichiedSaintsData.map((saint) => {
        return <SaintCard key={saint.id} saint={saint} />;
      })}
    </>
  );
}

export default SaintsGalery;
