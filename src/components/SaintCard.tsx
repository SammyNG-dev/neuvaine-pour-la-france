import "./SaintCard.css";
import { Link } from "react-router-dom";

type Prayer = {
  id: number;
  title: string;
  text: string;
};

type Testament = {
  id:number
  title: string;
  content: string[]
}

type SaintType = {
  id: number;
  name: string;
  img_galery: string
  prayers: Prayer[] | null;
  quotes: string[] | null;
  testament: Testament | null | undefined;
};

type SaintTypeProps = {
  saint: SaintType;
};

function SaintCard({ saint }: SaintTypeProps) {
  return (
    <div className="saint-card">
      <img className="saint-image" src={saint.img_galery} alt={saint.name} />
      <h2 className="saint-name">{saint.name}</h2>
      {saint.prayers && (
        <Link
          className="saint-button"
          to={`/page/prieres-pour-la-france/${saint.id}`}
        >
          Prières pour la France
        </Link>
      )}
      {saint.quotes || saint.testament ? (
        <Link
          className="saint-button"
          to={`/page/citations-et-testaments/${saint.id}`}
        >
          Citations et Testament
        </Link>
      ) : null}
    </div>
  );
}

export default SaintCard;
