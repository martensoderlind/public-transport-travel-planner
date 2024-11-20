import { Suspense } from "react";
import { Station } from "./station";
import { Leg } from "../type";

export function Stations({ stations }: { stations: Leg[] | null }) {
  if (!stations) {
    return (
      <div className="container mx-auto text-center p-4">
        Sök efter en resa för att se stationer
      </div>
    );
  }

  return (
    <div className="container mx-auto flex align-middle justify-center">
      <ul className="steps steps-vertical ">
        <Suspense fallback={<div>Laddar stationer...</div>}>
          {stations.map((station) => (
            <Station key={station.id} station={station[0].Stops.Stop} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
}
