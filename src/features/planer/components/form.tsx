"use client";

import { trip } from "../actions";
import { Leg } from "../type";

type Props = {
  setStations: React.Dispatch<React.SetStateAction<Leg[] | null>>;
};
export function Form({ setStations }: Props) {
  const getRout = async (formData: FormData) => {
    const origin = formData.get("from") as string;
    const destination = formData.get("to") as string;
    const route = await trip(origin, destination);
    console.log(route);
    if (route && route.Trip && route.Trip[0]?.LegList?.Leg[0]?.Stops?.Stop) {
      setStations(route.Trip[0].LegList.Leg);
    } else {
      setStations(null);
    }
  };
  return (
    <form
      action={async (formData: FormData) => {
        await getRout(formData);
      }}
      className=" container mx-auto flex flex-col items-center rounded-md w-2/4 m-4 p-4"
    >
      <h1 className=" text-3xl text-center">Sök din resa</h1>
      <div className="flex flex-col">
        <label htmlFor="">Från:</label>
        <input
          type="text"
          name="from"
          id="from"
          className="input input-bordered w-full max-w-xs bg-gray-300"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Till:</label>
        <input
          type="text"
          name="to"
          id="to"
          className="input input-bordered w-full max-w-xs bg-gray-300"
        />
      </div>
      <button className="btn my-2" type="submit">
        Sök
      </button>
    </form>
  );
}
