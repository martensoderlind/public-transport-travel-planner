import { Leg } from "../type";
import { PartOfTravel } from "./stations";
import TravelInfo from "./travel-info";

export default function TripInfo({ stations }: { stations: Leg[] | null }) {
  if (!stations) {
    return (
      <div className="container mx-auto text-center p-4">
        Sök efter en resa för att se stationer
      </div>
    );
  }
  return (
    <div className="container mx-auto flex flex-col align-middle justify-center bg-slate-100 rounded-md w-full md:w-4/12 p-2 my-4 shadow-lg">
      {/* <TravelInfo stations={stations} /> */}
      {stations.map((station) => (
        <TravelInfo key={station.idx} stations={station} />
      ))}
      <section className="pt-2">
        {stations.map((station) => (
          <PartOfTravel
            key={station.Origin.routeIdx}
            stations={station.Stops.Stop}
          />
        ))}
      </section>
    </div>
  );
}
