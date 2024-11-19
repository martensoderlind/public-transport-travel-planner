import { db } from "./db/index";
import { stations } from "./db/schema";

export function createRepository() {
  return {
    async getAll() {
      return await db.select().from(stations);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
