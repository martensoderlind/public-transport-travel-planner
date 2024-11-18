export type StationType = {
  id: number;
  name: string;
  line: string;
};

export function Station({ station }: { station: StationType }) {
  return <li className="step">{station.name}</li>;
}
