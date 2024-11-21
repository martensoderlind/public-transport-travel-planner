import { OriginStation, Stop } from "../type";

type Props = {
  station: Stop | OriginStation;
  index: number;
};

export function Station({ station, index }: Props) {
  return (
    <>
      <li className="step text-black">
        <div>
          <p>{station.name.split("T-bana")[0]}</p>
          <p className="text-gray-500 text-left text-xs">
            {index === 0 ? station.depTime : station.arrTime}
          </p>
        </div>
      </li>
    </>
  );
}
