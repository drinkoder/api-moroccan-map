import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { database } from "./database.ts";

const fetchAllData = async (ctx: RouterContext) => {
  ctx.response.body = await database;
};

export { fetchAllData };
