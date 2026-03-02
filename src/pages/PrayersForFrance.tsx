import { useParams } from "react-router-dom";

function PrayersForFrance() {
  const { id } = useParams();

  return <p>{`Coucou ${id}`}</p>;
}

export default PrayersForFrance;
