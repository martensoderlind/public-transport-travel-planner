import { Stop } from "../type";

export function Station({ station }: { station: Stop }) {
  return <li className="step text-black">{station.name}</li>;
}
