import React from "react";
import { useParams } from "react-router-dom";
import { useSaints } from "../contexts/SaintsContext";

function QuotesAndTestaments() {
  const { saintsData } = useSaints();
  const { id } = useParams<string>();

  if (!id) {
    return;
  }

  const saint = saintsData.find(
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
          <h2>Testament</h2>
          {saint.testament.split("/n").map((line) => {
            return (
              <React.Fragment key={line}>
                <p>{line}</p>
              </React.Fragment>
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
