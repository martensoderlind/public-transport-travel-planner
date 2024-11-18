import { getDestination } from "../actions";

export async function Form() {
  return (
    <form
      action={getDestination}
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
      <button className="btn my-2">Sök</button>
    </form>
  );
}
