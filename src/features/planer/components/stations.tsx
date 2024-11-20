import { Suspense } from "react";
import { Station } from "./station";
import { Stop } from "../type";

export function PartOfTravel({ stations }: { stations: Stop[] | null }) {
  return (
    <div className="container mx-auto flex align-middle justify-center">
      <ul className="steps steps-vertical">
        <Suspense fallback={<div>Laddar stationer...</div>}>
          {stations!.map((station) => (
            <Station key={station.id} station={station} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
}
