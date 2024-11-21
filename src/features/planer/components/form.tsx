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
    console.log(route.Trip[0].LegList.Leg);
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
      className=" container mx-auto flex flex-col items-center m-4 p-4 bg-slate-100 rounded-md w-full md:w-4/12 shadow-lg"
    >
      <h1 className=" text-3xl text-center text-gray-900">Sök din resa</h1>
      <div className="flex flex-col">
        <label htmlFor="" className="text-gray-700">
          Från:
        </label>
        <input
          type="text"
          name="from"
          id="from"
          className="input input-bordered w-full max-w-xs bg-gray-300 text-black"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-gray-700">
          Till:
        </label>
        <input
          type="text"
          name="to"
          id="to"
          className="input input-bordered w-full max-w-xs bg-gray-300 text-black"
        />
      </div>
      <button className="btn my-2" type="submit">
        Sök
      </button>
    </form>
  );
}
