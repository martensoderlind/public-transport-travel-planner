import { Leg } from "../type";

export default function TravelInfo({ stations }: { stations: Leg | null }) {
  return (
    <section className="border-b-2 mb-2">
      <article>
        <h1 className="text-xl font-semibold text-black">
          {`${stations!.name.split("-")[1]} - ${
            stations!.direction.split("T-bana")[0]
          }`}
        </h1>
        <p>
          Från:{" "}
          <strong className="text-gray-700">
            {stations!.Origin.name.split("T-bana")[0]}
          </strong>
        </p>
        <p>
          Kl: <strong className="text-gray-700">{stations!.Origin.time}</strong>
        </p>
      </article>
      <article>
        <p>
          Till:{" "}
          <strong className="text-gray-700">
            {stations!.Destination.name.split("T-bana")[0]}
          </strong>
        </p>
        <p>
          Kl:{" "}
          <strong className="text-gray-700">
            {stations!.Destination.time}
          </strong>
        </p>
      </article>
    </section>
  );
}
