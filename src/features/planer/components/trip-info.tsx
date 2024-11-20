import { Leg } from "../type";
import { Stations } from "./stations";
import TravelInfo from "./travel-info";

export default function TripInfo({ stations }: { stations: Leg[] | null }) {
  return (
    <div className="container mx-auto flex flex-col align-middle justify-center bg-slate-100 rounded-md w-4/12 p-2 my-4">
      <TravelInfo stations={stations} />
      {stations == null ? "" : <Stations stations={stations} />}{" "}
    </div>
  );
}
