import { useParams } from "react-router-dom";
import { useSaints } from "../contexts/SaintsContext";
import React from "react";
import "./PrayersFoFrance.css";

function PrayersForFrance() {
  const { id } = useParams<string>();
  const { enrichiedSaintsData } = useSaints();

  if (!id) {
    return <h1>ID Invalide</h1>;
  }
  const saint = enrichiedSaintsData.find(
    (s) => s.id === Number.parseInt(id, 10),
  );

  return (
    <>
      <h1>{saint?.name}</h1>
      <img className="saint-prayer-image" src={saint?.img} alt={saint?.name} />
      {saint?.prayers?.map((p) => {
        const pSplitted = p.text.split("\n");
        return (
          <>
            <h2>{p.title}</h2>
            {pSplitted.map((line, index) => {
              return (
                // biome-ignore lint/suspicious/noArrayIndexKey: Static text
                <React.Fragment key={index}>
                  <p>{line}</p>
                </React.Fragment>
              );
            })}
          </>
        );
      })}
    </>
  );
}

export default PrayersForFrance;
