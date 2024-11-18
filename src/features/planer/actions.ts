"use server";

export async function getDestination(formData: FormData) {
  const from = formData.get("from") as string;
  const to = formData.get("to") as string;

  console.log(from, to);
}
