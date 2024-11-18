import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const stations = pgTable("stations", {
  id: serial().primaryKey().notNull(),
  name: text().notNull(),
  line: varchar({ length: 255 }).notNull(),
});
