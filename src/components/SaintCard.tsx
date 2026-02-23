import "./SaintCard.css";
import { Link } from "react-router-dom";

type SaintType = {
  id: number;
  name: string;
  img: string | null;
};

type SaintTypeProps = {
  saint: SaintType;
};

function SaintCard({ saint }: SaintTypeProps) {
  return (
    <div className="saint-card">
      {saint.img ? (
        <img className="saint-image" src={saint.img} alt={saint.name} />
      ) : null}
      <h3 className="saint-name">{saint.name}</h3>
      <Link className="saint-button" to={`/page/prières-pour-la-france/${saint.id}`}>Prières pour la France</Link>
      <Link className="saint-button" to={`/page/citations-et-testaments/${saint.id}`}>Citations et Testament</Link>
    </div>
  );
}

export default SaintCard;
