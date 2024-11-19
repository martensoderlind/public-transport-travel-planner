import { Suspense } from "react";
import { createFeature } from "../instance";
import { Station, StationType } from "./station";

export async function Stations() {
  const stations1: StationType[] = await createFeature.service.getAll();
  return (
    <>
      <ul className="steps steps-vertical lg:steps-horizontal container mx-auto">
        <Suspense>
          {stations1.map((station2, index) => (
            <Station key={index} station={station2} />
          ))}
        </Suspense>
      </ul>
    </>
  );
}
