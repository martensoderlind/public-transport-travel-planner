import { Repository } from "./repository";

export function createService(repository: Repository) {
  const api_key = process.env.API_KEY;
  return {
    async getAll() {
      return await repository.getAll();
    },
    async getStationId(name: string) {
      try {
        const url = `https://api.resrobot.se/v2.1/location.name?input=${name}&format=json&accessId=${api_key}`;
        const data = await fetch(url);
        const posts = await data.json();
        return posts;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    async getStation(id: string) {
      try {
        const url = `https://api.resrobot.se/v2.1/departureBoard?id=${id}&format=json&accessId=${api_key}&Stop.lon=18.07355&stop.lat=59.314342`;
        const data = await fetch(url);
        const posts = await data.json();
        return posts;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    async getTrip(fromStation: string, toStation: string) {
      try {
        const url = `https://api.resrobot.se/v2.1/trip?originId=${fromStation}&destId=${toStation}&passlist=true&showPassingPoints=true&format=json&numTrips=5&accessId=${api_key}&`;
        const data = await fetch(url);
        const posts = await data.json();
        return posts;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
  };
}
