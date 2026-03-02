import { useParams } from "react-router-dom";

type Obj = {
  id: number;
  name: string;
};

const objects: Obj[] = [
  {
    id: 1,
    name: "fourchette",
  },
  {
    id: 2,
    name: "couteau",
  },
];

function PrayersForFrance() {
  const { id } = useParams<string>();

  if (!id) {
    return <h1>ID Invalide</h1>;
  }
  const object = objects.find((o) => o.id === Number.parseInt(id, 10));

  return <p>{`Coucou ${id}, salut ${object ? object.name : undefined}`}</p>;
}

export default PrayersForFrance;
