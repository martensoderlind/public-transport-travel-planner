import { Leg } from "../type";

export default function TravelInfo({ stations }: { stations: Leg[] | null }) {
  const destinationIndex: number = stations!.length;
  return (
    <section className="border-b-2">
      <article>
        <p>
          Från:{" "}
          <strong className="text-gray-700">{stations![0].Origin.name}</strong>
        </p>
        <p>
          Kl:{" "}
          <strong className="text-gray-700">{stations![0].Origin.time}</strong>
        </p>
      </article>
      <article>
        <p>
          Till:{" "}
          <strong className="text-gray-700">
            {stations![destinationIndex].Destination.name}
          </strong>
        </p>
        <p>
          Kl:{" "}
          <strong className="text-gray-700">
            {stations![destinationIndex].Destination.time}
          </strong>
        </p>
      </article>
    </section>
  );
}
