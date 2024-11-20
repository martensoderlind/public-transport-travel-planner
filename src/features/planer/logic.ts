export function direction(idFrom: string, IdTo: string) {
  return idFrom < IdTo ? 1 : 2;
}

export function CapitalFirstLetter(name: string) {
  return name
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
