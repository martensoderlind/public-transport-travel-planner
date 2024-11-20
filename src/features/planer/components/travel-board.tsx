"use client";
import { useState } from "react";
import { Form } from "./form";
import { Leg } from "../type";
import TripInfo from "./trip-info";

export default function TravelBoard() {
  const [stations, setStations] = useState<Leg[] | null>(null);
  // setStations(route.Trip[0].LegList.Leg[0].Stops.Stop);

  return (
    <>
      <Form setStations={setStations} />
      {stations == null ? "" : <TripInfo stations={stations} />}
    </>
  );
}
