import { Suspense } from "react";
import { Station } from "./station";
import { Stop } from "../type";

export function PartOfTravel({ stations }: { stations: Stop[] | null }) {
  return (
    <div className="container mx-auto flex">
      <ul className="steps steps-vertical">
        <Suspense fallback={<div>Laddar stationer...</div>}>
          {stations!.map((station, index) => (
            <Station key={station.id} station={station} index={index} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
}
