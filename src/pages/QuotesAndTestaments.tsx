import { useParams } from "react-router-dom";
import { useSaints } from "../contexts/SaintsContext";

function QuotesAndTestaments() {
  const { enrichiedSaintsData } = useSaints();
  const { id } = useParams<string>();

  if (!id) {
    return;
  }

  const saint = enrichiedSaintsData.find(
    (saint) => saint.id === Number.parseInt(id, 10),
  );

  if (!saint) {
    return <h1>Aucun saint trouvé</h1>;
  }

  return (
    <>
      <img src={saint.img} alt={saint.name} />
      <h1>{saint.name}</h1>
      {saint.testament ? (
        <>
          <h2>{saint.testament.title}</h2>
          {saint.testament.content.map((line, index) => {
            return (
              // biome-ignore lint/suspicious/noArrayIndexKey: Static text
              <p key={index}>{line}</p>
            );
          })}
        </>
      ) : null}
      {saint.quotes ? (
        <>
          <h2>Citations</h2>
          {saint.quotes.map((quote) => {
            return <p key={quote}>{quote}</p>;
          })}
        </>
      ) : null}
    </>
  );
}

export default QuotesAndTestaments;
