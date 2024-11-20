import { Stop } from "../type";

export function Station({ station }: { station: Stop }) {
  return (
    <>
      <li className="step text-black">
        <div>
          <p>{station.name}</p>
          <p className="text-gray-500 text-left text-xs">{station.arrTime}</p>
        </div>
      </li>
    </>
  );
}
