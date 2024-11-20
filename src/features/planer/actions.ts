"use server";

import { createFeature } from "./instance";

// export async function getDestination(formData: FormData) {
//   const from = formData.get("from") as string;
//   const destination = formData.get("to") as string;
//   const fromStation = await getStations(from);
//   const destinationStation = await getStations(destination);
//   // console.log("destinationID", destinationStation.Departure[0].stopExtId);
//   const travelDirection = direction(
//     fromStation.Departure[0].stopExtId,
//     destinationStation.Departure[0].stopExtId
//   );
// }

export async function getStations(station: string) {
  const stationId = await createFeature.service.getStationId(station);
  const { stopLocationOrCoordLocation } = stationId;
  const id = stopLocationOrCoordLocation[0].StopLocation.extId;
  const stationData = await createFeature.service.getStation(id);
  return stationData;
}

export async function trip(origin: string, destination: string) {
  // const from = formData.get("from") as string;
  // const destination = formData.get("to") as string;
  const fromStation = await getStations(origin);
  const destinationStation = await getStations(destination);
  const originIdId = fromStation.Departure[0].stopExtId;
  const destId = destinationStation.Departure[0].stopExtId;
  const trip = await createFeature.service.getTrip(originIdId, destId);
  return trip;
}
